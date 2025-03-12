"use client"

import { useMedallionSize } from "@/utils/getSize";
import { usePageContext } from "../Context/PageContext";
import { getAccent, getSize } from "../Globals";



const ContentTile = ({accentID, content, sizeType, orientation, clickable, activatable}:{
    accentID: number;
    content?: {front: React.ReactNode, back?: React.ReactNode};
    sizeType?: number;
    orientation?: number;
    clickable?: number;
    activatable?: number;
    
}) => {
    
    const { activeReader, activeTile, setActiveTile } = usePageContext();
    const medallionSize = useMedallionSize();
    
    const size = sizeType ? getSize(sizeType) : ['row-span-1','col-span-1', null];
    
    const accent = `${getAccent(accentID, 'bg')} bg-opacity-40 backdrop-blur-md`

    const transformStyle =
        orientation === 1 ? `hover:-translate-y-[3vw]` :
        orientation === 2 ? `hover:translate-x-[3vw]` :
        orientation === 3 ? `hover:translate-y-[3vw]` :
        orientation === 4 ? `hover:-translate-x-[3vw]` :
        '';

    const activatedTransformStyle =
        orientation === 1 ? '-translate-y-[3vw]' :
        orientation === 2 ? 'translate-x-[3vw]' :
        orientation === 3 ? 'translate-y-[3vw]' :
        orientation === 4 ? '-translate-x-[3vw]' :
        '';

    const flippedTransformStyle = 
        orientation === 1 ? '-translate-y-[8vw]' :
        orientation === 2 ? 'translate-x-[8vw]' :
        orientation === 3 ? 'translate-y-[8vw]' :
        orientation === 4 ? '-translate-x-[8vw]' :
        '';

    const handleClick = () => {
        if (activatable) {
            setActiveTile(activeTile === activatable ? 0 : activatable);
        }
    };

    if (clickable && content !== undefined) { content = { front: content.front, back: content.back }}
    else if (content !== undefined) { content = { front: content.front }}
    else { content = { front: (<></>)} }

    return (
        clickable ? (
            <FlipTile className={`h-full transition-transform duration-500 
                ${activeReader === clickable ? flippedTransformStyle : transformStyle}
                ${size[0]} ${size[1]}`} readerID={clickable} orientation={orientation}
                front={
                <div className={`${accent} lg:rounded-xl rounded-md w-full h-full overflow-hidden`}>
                    { content.front }
                </div>}
                back={
                    <div className={`${accent} lg:rounded-xl rounded-md w-full h-full overflow-hidden`}>
                        { content.back }
                    </div>}
            />
        ) : (
            <div 
                className={`h-full transition-transform duration-500 cursor-pointer
                    ${activatable && activeTile === activatable ? activatedTransformStyle : transformStyle}
                    ${size[0]} ${size[1]}`}
                onClick={handleClick}>
                <div className={`${accent} lg:rounded-xl rounded-md w-full h-full overflow-hidden`}>
                    { content.front }
                </div>
            </div>
        )
    )
}




const FlipTile = ({ front, back, readerID, orientation, className }: {
    front: React.ReactNode;
    back: React.ReactNode;
    readerID: number;
    orientation?: number;
    className?: string;
  }) => {
const { activeReader } = usePageContext();

return (
    <div 
    className={`relative w-full h-full [perspective:1000px] ${className ?? ''}`}
    >
    <div 
        className={`relative w-full h-full transition-transform duration-500
        [transform-style:preserve-3d]
        ${activeReader === readerID ? 
            orientation === 2 || orientation === 4 ? '[transform:rotateX(180deg)]' : '[transform:rotateY(180deg)]'
            : ''}`}
    >
        {/* Front side */}
        <div className="absolute w-full h-full backface-hidden bg-opacity-40 backdrop-blur-md">
          {front}
        </div>

        {/* Back side */}
        <div className="absolute w-full h-full backface-hidden [transform:rotateX(180deg)] bg-opacity-40 backdrop-blur-md">
          {back}
        </div>
      </div>
    </div>
  );
};
  

export default ContentTile
