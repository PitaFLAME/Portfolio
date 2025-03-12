"use client"

import React, {useEffect, useRef, useState} from 'react';
import StarVisual from './Star';
/*
* Star Animation component.
* stars[] is a variable-size array of Star objects.
* 
* Star objects have a position, an expiry time in seconds, and a symbol.
* 
* When a star expires, it is removed from stars[]
* When stars[] has room for more stars, one star is added.
* 
*/


class Star {
    position: [number, number];
    visual: React.ReactNode;
    expiresAt: Date;
    exists: boolean;
    symbolDeterminant: number;

    constructor(position: [number, number], expiresAt: Date) {
        this.position = position;
        this.expiresAt = expiresAt;
        this.exists = false;
        this.symbolDeterminant = Math.floor(Math.random() * 120)
        this.visual = (<StarVisual symbolDeterminant={this.symbolDeterminant} exists={this.exists}/>);
    }

    hasExpired(): boolean { 
      this.exists = true;
      this.visual = (<StarVisual symbolDeterminant={this.symbolDeterminant} exists={this.exists}/>);
      return new Date() > this.expiresAt; 
    }

}


const getRandomPosition = ({gridSize}:{ gridSize: number; }):[number, number] => 
    { return [Math.floor(Math.random() * gridSize), Math.floor(Math.random() * gridSize)]; };

const getStarSymbol = ():React.ReactNode => {
    return (<></>);
}







const StarAnimation = () => {
  const [_, setForceUpdate] = useState(0);
  const stars = useRef<Star[]>([]);
  let starCount = 25;

  const getStarCount = () => {
    const r = (Math.random() * 2) - 1;
    starCount = r > 0 ? starCount + 1 : starCount - 1;
    if (starCount > 50) { starCount = 40; }
    else if (starCount < 15) { starCount = 25; }
    return starCount;
  }

  const isPositionValid = (newPosition: [number, number]): boolean => {
    for (const star of stars.current) {
      const [existingX, existingY] = star.position;
      const [newX, newY] = newPosition;
  
      if (
        (newX === existingX && Math.abs(newY - existingY) <= 2) ||
        (newY === existingY && Math.abs(newX - existingX) <= 2)
      ) {
        return false;
      }
  
      if (
        Math.abs(newX - existingX) === 1 &&
        Math.abs(newY - existingY) === 1
      ) {
        return false;
      }
    }
  
    return true;
  };


  const getStar = (): Star => {
    let isValidPosition = false;
    let pos: [number, number] = [-1, -1];
    while (!isValidPosition) {
      pos = getRandomPosition({gridSize: 48});
      isValidPosition = isPositionValid(pos);
    }
    
    // random number between 25 and 95.  Represents number of seconds star will live for.
    const ttl = Math.floor((Math.random() * 70) + 25);
    const expiryDate = new Date(Date.now() + (ttl * 1000));
  
    return new Star(pos, expiryDate);
  }



  useEffect(() => {
    const updateStars = async () => {
      // remove expired stars
      stars.current = stars.current.filter(star => !star.hasExpired());
    
      // add a star if there's room
      const r = Math.floor(Math.random() * 100);
      if (getStarCount() > stars.current.length && r > 60) { stars.current.push(getStar()); }
    
      setForceUpdate(prev => prev + 1);
    }

    const interval = setInterval(() => {
      updateStars();
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute grid grid-cols-48 grid-rows-48 gap-2 w-full h-full overflow-hidden">
      {
        stars.current.map((star, index) => {
          const [col, row] = star.position;
          return (
            <div key={index} style={{
              gridColumnStart: col + 1,
              gridRowStart: row + 1
            }}>
              { star.visual }
            </div>
          )
        })
      }
    </div>
  )
}

export default StarAnimation;