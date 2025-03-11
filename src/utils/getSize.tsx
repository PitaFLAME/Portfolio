import { useState, useEffect } from 'react';

interface ComponentSize {
  width: number;
  height: number;
}



const useWindowSize = (): ComponentSize => {

  const [size, setSize] = useState<ComponentSize>({width: 0, height: 0});
  useEffect(() => {
    const updateSize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();

    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);

  }, []);

  return size;
}

export const useMainComponentSize = () => {
  
  const windowSize: ComponentSize = useWindowSize();

  const width = Math.min((windowSize.height * 0.82), (windowSize.width * 0.7), 1280);
  const height = Math.min((windowSize.width * 0.55), (windowSize.height * 0.82), 896);
  
  return { width, height } as ComponentSize;
};


export const ResponsiveText = ({type, size, className, children}:{
  type: number;
  size: number;
  className?: string;
  children?: React.ReactNode;
}) => {

  const windowSize: ComponentSize = useWindowSize();

  const textSize = size * (Math.min(
                          (windowSize.height * 0.024), 
                          (windowSize.width * 0.024), 
                           36 ));

  return (
    type === 0 ? 
      (<p  className={className} style={{ fontSize: `${textSize}px`}}>
        {children}
      </p>)  : type === 1 ?
      (<h1 className={className} style={{ fontSize: `${textSize}px`}}>
        {children}
      </h1>) : type === 2 ? 
      (<h2 className={className} style={{ fontSize: `${textSize}px`}}>
        {children}
      </h2>) : type === 3 ? 
      (<h3 className={className} style={{ fontSize: `${textSize}px`}}>
        {children}
      </h3>) :
      (<h4 className={className} style={{ fontSize: `${textSize}px`}}>
        {children}
      </h4>)

  )
};


export const useMedallionSize = () => {
  const windowSize: ComponentSize = useWindowSize();
  return (Math.min((windowSize.height / 980), (windowSize.width / 1440), 1));
}


export const useConstellationMultiplier = () => {
  const windowSize: ComponentSize = useWindowSize();
  return Math.min((windowSize.height  / 896), (windowSize.width / 1280));
}