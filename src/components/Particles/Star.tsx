import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';


const StarVisual = ({symbolDeterminant, exists}:{
  symbolDeterminant: number;
  exists: boolean;
}) => {

  const symbolID = 
        symbolDeterminant >= 117 ? 12
      : symbolDeterminant >= 116 ? 11
      : symbolDeterminant >= 115 ? 10
      : symbolDeterminant >= 98  ? 9
      : symbolDeterminant >= 90  ? 8
      : symbolDeterminant >= 82  ? 7
      : symbolDeterminant >= 70  ? 6
      : symbolDeterminant >= 58  ? 5
      : symbolDeterminant >= 44  ? 4
      : symbolDeterminant >= 30  ? 3
      : symbolDeterminant >= 16  ? 2
      :                           1;


  

  const StarShine = ({className, children}:{
    className?: string;
    children: React.ReactNode;
  }) => { 
    if (exists) { return (
      <motion.div
        className={`${className} flex justify-center items-center bg-gradient-radial to-transparent`}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        initial={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
        }}
        transition={{
          duration: 4,
          ease: "easeInOut",
        }}
      >
        { children }
      </motion.div>
    )
  }
  else { return (
      <motion.div
        className={`${className} flex justify-center items-center bg-gradient-radial to-transparent`}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 0,
        }}
        initial={{
          opacity: 0,
          scale: 0.5,
          rotate: -90,
        }}
        exit={{
          opacity: 0,
          scale: 0.5,
          rotate: 90,
        }}
        transition={{
          duration: 1,
          ease: "easeInOut",
        }}
      >
        { children }
      </motion.div>
    )
  }
}


  return (
    <>
    {
      symbolID === 1 ? (
        <StarShine className='from-sky-100/5 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-white/15 to-white/10 h-2 w-2 rounded-sm rotate-[12deg]' />
        </StarShine>
      ) : symbolID === 2 ? (
        <StarShine className='from-sky-300/10 h-20 w-20 rounded-full'>
          <div className='bg-gradient-radial from-white/20 to-white/15 h-2.5 w-2.5 rounded-sm rotate-[52deg]' />
        </StarShine>
      ) : symbolID === 3 ? (
        <StarShine className='from-sky-300/5 h-20 w-20 rounded-full'>
          <div className='bg-white/15 h-2 w-2 rounded-full' />
        </StarShine>
      ) : symbolID === 4 ? (
        <StarShine className='from-white/5 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-white/15 to-white/10 h-2 w-2 rounded-sm rotate-[5deg]' />
        </StarShine>
      ) : symbolID === 5 ? (
        <StarShine className='from-white/5 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-white/15 to-white/10 h-2 w-2 rounded-sm rotate-[40deg]' />
        </StarShine>
      ) : symbolID === 6 ? (
        <StarShine className='from-white/5 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-white/15 to-white/10 h-2 w-2 rounded-sm rotate-[82deg]' />
        </StarShine>
      ) : symbolID === 7 ? (
        <StarShine className='from-sky-400/10 h-20 w-20 rounded-full'>
          <div className='bg-sky-400/20 h-2.5 w-2.5 rounded-full' />
        </StarShine>
      ) : symbolID === 8 ? (
        <StarShine className='from-white/5 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-white/15 to-white/10 h-2 w-2 rounded-sm rotate-[20deg]' />
        </StarShine>
      ) : symbolID === 9 ? (
        <StarShine className='from-sky-400/15 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-sky-400/25 to-sky-400/20 h-2 w-2 rounded-sm rotate-[75deg]' />
        </StarShine>
      ) : symbolID === 10 ? (
        <StarShine className='from-pink-200/5 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-pink-300/65 to-pink-300/60 h-2 w-2 rounded-sm rotate-[35deg]' />
        </StarShine>
      ) : symbolID === 11 ? (
        <StarShine className='from-amber-300/10 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-amber-200/65 to-amber-200/60 h-2 w-2 rounded-sm rotate-[20deg]' />
        </StarShine>
      ) : symbolID === 12 ? (
        <StarShine className='from-sky-400/10 h-16 w-16 rounded-full'>
          <div className='bg-gradient-radial from-sky-500/75 to-sky-500/70 h-2 w-2 rounded-sm rotate-[44deg]' />
        </StarShine>
      ) :
      (<></>)



    }
    </>
  )
}

export default StarVisual;