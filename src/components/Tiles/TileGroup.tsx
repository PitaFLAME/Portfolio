"use client"

import React, { useState } from "react";
import { getSize } from "../Globals";
import { TileGroupProvider, useHover } from '@/components/Tiles/TileGroupContext';


const TileGroupInContext = ({tiles, className, orientation, sizeType}:{
    tiles: [React.ReactElement, React.ReactElement]
    className?: string
    orientation?: number
    sizeType?: number
}) => {

    const { isHovered, startHover, stopHover } = useHover()

    const rows: { [key: number]: string } = {
        1: 'grid-rows-1',
        2: 'grid-rows-1',
        3: 'grid-rows-2',
        4: 'grid-rows-2',
        5: 'grid-rows-4',
        6: 'grid-rows-4',
        7: 'grid-rows-6',
        8: 'grid-rows-4',
        9: 'grid-rows-2',
        10: 'grid-rows-4',
        11: 'grid-rows-2',
    };
    
    const cols: { [key: number]: string } = {
        1: 'grid-cols-1',
        2: 'grid-cols-2',
        3: 'grid-cols-1',
        4: 'grid-cols-2',
        5: 'grid-cols-4',
        6: 'grid-cols-6',
        7: 'grid-cols-4',
        8: 'grid-cols-8',
        9: 'grid-cols-4',
        10: 'grid-cols-2',
        11: 'grid-cols-3',
    };
    
    /* 1=1x1 2=1x2 3=2x1 4=2x2 5=4x4 6=4x6 7=6x4
    8=8x4 9=2x4 10=4x2 11=2x3 12:*/

    const transformStyle =
            orientation === 1 ? 'hover:-translate-y-[3vw]' :
            orientation === 2 ? 'hover:translate-x-[3vw]' :
            orientation === 3 ? 'hover:translate-y-[3vw]' :
            orientation === 4 ? 'hover:-translate-x-[3vw]' :
            ''


    const size = sizeType ? getSize(sizeType) : ['row-span-1','col-span-1', null];
    const internalCols = sizeType ? cols[sizeType] : ''
    const internalRows = sizeType ? rows[sizeType] : ''

    const innerChild = 
        orientation === 1 || orientation === 3 ? React.cloneElement(tiles[0])
                                               : React.cloneElement(tiles[1])
    const outerChild =
        orientation === 1 || orientation === 3 ? React.cloneElement(tiles[1], { orientation: orientation})
                                               : React.cloneElement(tiles[0], { orientation: orientation})


    const innerChildSizeType = innerChild.props.sizeType
    const sizes = getSize(innerChildSizeType)


    return (
        <div className={`h-full grid md:gap-2 gap-1 transition-transform duration-500 ${internalCols} ${internalRows}
            ${className} ${orientation} ${size[0]} ${size[1]} ${isHovered ? transformStyle : ''}`}>
            {orientation === 1 || orientation === 3 ? 
            <div className={`${sizes[0]} ${sizes[1]} ${rows[innerChildSizeType]} ${cols[innerChildSizeType]}`} 
                onMouseEnter={ () => startHover() } onMouseLeave={ () => stopHover() }>
                { innerChild }
            </div>
            : outerChild}
            {orientation === 1 || orientation === 3 ? outerChild : 
            <div className={`${sizes[0]} ${sizes[1]} ${rows[innerChildSizeType]} ${cols[innerChildSizeType]}`} 
            onMouseEnter={ () => startHover() } onMouseLeave={ () => stopHover() }>
                { innerChild }
            </div> }
            

        </div>
    )
}

const TileGroup = ({tiles, className, orientation, sizeType}:{
    tiles: [React.ReactElement, React.ReactElement]
    className?: string
    orientation?: number
    sizeType?: number
    
}) => {

    return (
        <TileGroupProvider>
            <TileGroupInContext 
                tiles={tiles}
                className={className}
                orientation={orientation}
                sizeType={sizeType} />
        </TileGroupProvider>
    )
}

export default TileGroup