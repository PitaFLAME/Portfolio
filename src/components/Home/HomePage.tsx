import Tile from "../Tiles/Tile"
import { getContent } from "./TileContent"
import TileGroup from "../Tiles/TileGroup"
import { useMainComponentSize } from "@/utils/getSize"
import { usePageContext } from "../Context/PageContext"
import Reader from "../Reader"
import { getAccent } from "../Globals"



const HomePage = () => {

  const { activeReader, setActiveReader } = usePageContext();
  const mainSize = useMainComponentSize();
  if (!mainSize) { return null; }
  

  return (
    <div className="grid grid-cols-1">
        
        <div className={`grid grid-cols-12 grid-rows-12 md:gap-2 gap-1 col-start-1 row-start-1`}
             style={{ width: `${mainSize.width}px`, height: `${mainSize.height}px` }}>
            
        

        <Tile sizeType={8} accentID={9} content={getContent(0)} orientation={4} />
        <Tile sizeType={7} accentID={8} content={getContent(4)} orientation={1} />
        <TileGroup sizeType={9} orientation={4} tiles={[
                (<Tile sizeType={11} accentID={9} key={0} />),
                (<Tile sizeType={3} accentID={8} content={getContent(5)} key={1} />) ]} />
        
        <Tile sizeType={5} accentID={9} content={getContent(3)} />

        <Tile sizeType={7} accentID={8} content={getContent(2)} orientation={3} clickable={2} />
        <Tile sizeType={9} accentID={7} orientation={2} />
        <Tile sizeType={8} accentID={9} content={getContent(1)} orientation={2} clickable={1} />
            
            
        </div>


        <div className="flex items-center justify-center col-start-1 row-start-1" 
             style={{ width: `${mainSize.width + 12}px`, height: `${mainSize.height + 12}px` }}>
            
                <div className={`h-full w-full bg-slate-900 border-[6px] border-slate-950/50 rounded-xl z-50 -ml-[6px] -mt-[6px]
                                 transition-transform duration-300 ${activeReader !== 0 ? `scale-100 delay-300` : `scale-0`}
                                 ${getAccent(3, 'text')} py-[2%] px-[5%] font-poppins`}>
                    <div className="relative w-full h-full">
                      <Reader readerID={activeReader} />
                    </div>
                </div>
        </div>
        
        
    </div>
  )
}

export default HomePage