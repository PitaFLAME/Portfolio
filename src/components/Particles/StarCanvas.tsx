import { useConstellationMultiplier } from '@/utils/getSize';
import React, { useEffect, useRef } from 'react';

/* 
* Star System Component.
* Author: Pita Sherwood
* Inspiration for the implementation of this star system goes to: Cory Hughart
* 
*/


interface Star {
  x: number;
  y: number;
  z: number;
  opacity: number;
  fullOpacity: number;
  flicker: number;
  createdAt: number;
  expiresAt: number;
  fadeStartTime?: number;
}

interface ConnectionPoint {
  x: number;
  y: number;
}

interface Connection {
  id: number;
  originPoint: ConnectionPoint;
  stars: Star[];
  currentLineIndex: number;
  startTime: number;
  age: number;
  opacity: number;
  traveled: number;
  distances: number[];
}

const StarAnimation = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number>();
  const mouseRef = useRef({ x: 0, y: 0 });
  const foregroundStarsRef = useRef<Star[]>([]);
  const foregroundStarsCountRef = useRef(0);
  const backgroundStarsRef = useRef<Star[]>([]);
  const backgroundStarsCountRef = useRef(0);
  const connectionsRef = useRef<Connection[]>([]);
  const connectionIdCounter = useRef(0);
  const lastStarCreationRef = useRef(0);

  // config
  const INIT_F_STARS = 100;
  const MIN_F_STARS = 80;
  const MAX_F_STARS = 120;
  const INIT_B_STARS = 160;
  const MIN_B_STARS = 120;
  const MAX_B_STARS = 200;
  const STAR_LIFESPAN = 30000;
  const STAR_LIFESPAN_VARIANCE = 16000;
  const STAR_FADE_DURATION = 2000;
  const STAR_CREATION_INTERVAL = 200;
  const MOTION_FACTOR = 0.02;
  const STAR_COLOR = '#FFEED4'
  const PARTICLE_SIZE_BASE = 0.4;
  const PARTICLE_SIZE_MULTIPLIER = 0.2;
  const LINE_WIDTH = 0.4;
  const FLICKER_SMOOTHING = 50;
  const CONNECTION_RADIUS = 200;
  const MIN_STARS_FOR_CONNECTION = 6;
  const MAX_CONNECTIONS = 2;
  const CONNECTION_CREATION_CHANCE = 1;
  const CONNECTION_LIFESPAN = 4000;
  const CONNECTION_LIFESPAN_VARIANCE = 1800;
  const LINE_SPEED = 9.8;


  const getRandom = (min: number, max: number): number => {
    return Math.random() * (max - min) + min;
  };



  const getStar = (isForeground: boolean): Star => ({
    x: getRandom(-0.1, 1.1),
    y: getRandom(-0.1, 1.1),
    z: getRandom(0, 7),
    opacity: 0,
    fullOpacity: isForeground ? getRandom(0.25, 1) : getRandom(0.08, 0.3),
    flicker: 0,
    createdAt: Date.now(),
    expiresAt: Date.now() + STAR_LIFESPAN + Math.floor(Math.random() * STAR_LIFESPAN_VARIANCE),
  });

  const calculateDistance = (p1: { x: number; y: number }, p2: { x: number; y: number }): number => {
    const dx = p1.x - p2.x;
    const dy = p1.y - p2.y;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const getConnection = ({canvasWidth, canvasHeight}:{
    canvasWidth: number,
    canvasHeight: number
  }): Connection | null => {

    if (Math.random() * 100 > CONNECTION_CREATION_CHANCE) {
      return null;
    }
  
    const originPoint: ConnectionPoint = {
      x: Math.random() * canvasWidth,
      y: Math.random() * canvasHeight
    };

    const constellationMultiplier = Math.min((window.innerHeight  / 896), (window.innerWidth / 1280));
    const connectionRadius = CONNECTION_RADIUS * constellationMultiplier;

  
    const tooCloseToExisting = connectionsRef.current.some(existingConnection => {
      const distance = calculateDistance(originPoint, existingConnection.originPoint);
      return distance <= connectionRadius;
    });
  
    if (tooCloseToExisting) {
      return null;
    }
  
    const nearbyStars = foregroundStarsRef.current.filter(star => {
      const starPos = calculatePosition(star, canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      return calculateDistance(originPoint, starPos) <= connectionRadius;
    });

    nearbyStars.forEach(star => {
      star.expiresAt += CONNECTION_LIFESPAN + CONNECTION_LIFESPAN_VARIANCE;
    } )
  
    if (nearbyStars.length < MIN_STARS_FOR_CONNECTION) {
      return null;
    }
  
    const originStar = nearbyStars.reduce((furthest, current) => {
      const currentPos = calculatePosition(current, canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      const furthestPos = calculatePosition(furthest, canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      const currentDistance = calculateDistance(originPoint, currentPos);
      const furthestDistance = calculateDistance(originPoint, furthestPos);
      return currentDistance > furthestDistance ? current : furthest;
    });
  
    const orderedStars: Star[] = [originStar];
    const remainingStars = nearbyStars.filter(star => star !== originStar);
  
    while (remainingStars.length > 0) {
      const lastStar = orderedStars[orderedStars.length - 1];
      const lastStarPos = calculatePosition(lastStar, canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      
      let nextStar = remainingStars[0];
      let shortestDistance = Infinity;
      
      remainingStars.forEach(star => {
        const starPos = calculatePosition(star, canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
        const distance = calculateDistance(lastStarPos, starPos);
        if (distance < shortestDistance) {
          shortestDistance = distance;
          nextStar = star;
        }
      });
  
      orderedStars.push(nextStar);
      const index = remainingStars.indexOf(nextStar);
      remainingStars.splice(index, 1);
    }
  
    const distances: number[] = [];
    for (let i = 0; i < orderedStars.length - 1; i++) {
      const pos1 = calculatePosition(orderedStars[i], canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      const pos2 = calculatePosition(orderedStars[i + 1], canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      distances.push(calculateDistance(pos1, pos2));
    }
  
    return {
      id: connectionIdCounter.current++,
      originPoint,
      stars: orderedStars,
      currentLineIndex: 0,
      startTime: Date.now(),
      age: Math.floor(Math.random() * CONNECTION_LIFESPAN_VARIANCE) + CONNECTION_LIFESPAN,
      opacity: 1,
      traveled: 0,
      distances
    };
  };

  const calculatePosition = (star: Star, canvasWidth: number, canvasHeight: number, mouseX: number, mouseY: number) => {
    const zMotion = star.z * MOTION_FACTOR;
    return {
      x: (star.x * canvasWidth) + (((canvasWidth / 2) - mouseX) * zMotion),
      y: (star.y * canvasHeight) + (((canvasHeight / 2) - mouseY) * zMotion)
    };
  };

  const renderStar = (
    context: CanvasRenderingContext2D, 
    star: Star, 
    pos: { x: number; y: number },
    sizeRatio: number,
    currentTime: number
  ) => {
    const radius = ((star.z * PARTICLE_SIZE_MULTIPLIER) + PARTICLE_SIZE_BASE) * (sizeRatio / 1000);
    let opacity = star.opacity;

    const fadeInProgress = Math.min(1, (currentTime - star.createdAt) / STAR_FADE_DURATION);
    opacity = star.fullOpacity * fadeInProgress;

    if (currentTime >= star.expiresAt - STAR_FADE_DURATION) {
      if (!star.fadeStartTime) {
        star.fadeStartTime = currentTime;
      }
      const fadeProgress = (currentTime - star.fadeStartTime) / STAR_FADE_DURATION;
      opacity *= (1 - fadeProgress);
    }

    const newFlicker = (Math.random() - 0.5) * 2;
    star.flicker += (newFlicker - star.flicker) / FLICKER_SMOOTHING;
    opacity += star.flicker;
    opacity = Math.max(0, Math.min(1, opacity));

    context.beginPath();
    context.arc(pos.x, pos.y, radius, 0, Math.PI * 2);
    context.fillStyle = STAR_COLOR;
    context.globalAlpha = opacity;
    context.fill();
    context.globalAlpha = 1;
  };

  const renderConnection = (
    context: CanvasRenderingContext2D,
    connection: Connection,
    canvasWidth: number,
    canvasHeight: number
  ) => {
    connection.traveled += LINE_SPEED;

    if (connection.traveled >= connection.distances[connection.currentLineIndex]) {
      connection.traveled = 0;
      connection.currentLineIndex++;
    }

    context.beginPath();
    context.strokeStyle = STAR_COLOR;
    context.lineWidth = LINE_WIDTH;
    context.globalAlpha = connection.opacity;

    for (let i = 0; i < connection.currentLineIndex; i++) {
      const pos1 = calculatePosition(connection.stars[i], canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      const pos2 = calculatePosition(connection.stars[i + 1], canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      
      context.moveTo(pos1.x, pos1.y);
      context.lineTo(pos2.x, pos2.y);
    }

    if (connection.currentLineIndex < connection.stars.length - 1) {
      const pos1 = calculatePosition(connection.stars[connection.currentLineIndex], canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      const pos2 = calculatePosition(connection.stars[connection.currentLineIndex + 1], canvasWidth, canvasHeight, mouseRef.current.x, mouseRef.current.y);
      
      const progress = connection.traveled / connection.distances[connection.currentLineIndex];
      const currentX = pos1.x + (pos2.x - pos1.x) * progress;
      const currentY = pos1.y + (pos2.y - pos1.y) * progress;
      
      context.moveTo(pos1.x, pos1.y);
      context.lineTo(currentX, currentY);
    }

    context.stroke();
    context.globalAlpha = 1;
  };

  const render = (context: CanvasRenderingContext2D, width: number, height: number) => {
    context.clearRect(0, 0, width, height);
    const currentTime = Date.now();

    foregroundStarsCountRef.current = Math.min(
      MAX_F_STARS, Math.max( MIN_F_STARS, foregroundStarsCountRef.current + (Math.floor(Math.random() * 3) - 1))
    );

    backgroundStarsCountRef.current = Math.min(
      MAX_B_STARS, Math.max( MIN_B_STARS, backgroundStarsCountRef.current + (Math.floor(Math.random() * 3) - 1))
    );

    if (currentTime - lastStarCreationRef.current >= STAR_CREATION_INTERVAL) {
      if (foregroundStarsRef.current.length < foregroundStarsCountRef.current) {
        foregroundStarsRef.current.push(getStar(true));
      }
      lastStarCreationRef.current = currentTime;
    }

    if (backgroundStarsRef.current.length < backgroundStarsCountRef.current) {
      backgroundStarsRef.current.push(getStar(false));
    }

    foregroundStarsRef.current = foregroundStarsRef.current.filter(star => currentTime < star.expiresAt);
    backgroundStarsRef.current = backgroundStarsRef.current.filter(star => currentTime < star.expiresAt);


    while (foregroundStarsRef.current.length < MIN_F_STARS) {
      foregroundStarsRef.current.push(getStar(true));
    }

    while (backgroundStarsRef.current.length < MIN_B_STARS) {
      backgroundStarsRef.current.push(getStar(false));
    }


    foregroundStarsRef.current.forEach(star => {
      const pos = calculatePosition(star, width, height, mouseRef.current.x, mouseRef.current.y);
      renderStar(context, star, pos, Math.max(width, height), currentTime);
    });
    
    backgroundStarsRef.current.forEach(star => {
      const pos = calculatePosition(star, width, height, mouseRef.current.x, mouseRef.current.y);
      renderStar(context, star, pos, Math.max(width, height), currentTime);
    });
    

    if (connectionsRef.current.length < MAX_CONNECTIONS) {
      const newConnection = getConnection({canvasWidth: width, canvasHeight: height});
      if (newConnection) {
        connectionsRef.current.push(newConnection);
      }
    }

    connectionsRef.current = connectionsRef.current.filter(connection => {
      const age = currentTime - connection.startTime;
      if (age >= connection.age) {
        return false;
      }
      
      const fadeStart = connection.age - 1000;
      if (age > fadeStart) {
        connection.opacity = 1 - ((age - fadeStart) / 1000);
      }
      
      renderConnection(context, connection, width, height);
      return true;
    });
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const context = canvas.getContext('2d');
    if (!context) return;

    foregroundStarsRef.current = Array.from({ length: INIT_F_STARS }, () => getStar(true));
    backgroundStarsRef.current = Array.from({ length: INIT_B_STARS }, () => getStar(false));
    lastStarCreationRef.current = Date.now();

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top
      };
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    
    const animate = () => {
      handleResize();
      render(context, canvas.width, canvas.height);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    handleResize();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [render, getStar]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full bg-transparent"
    />
  );
};

export default StarAnimation;