import { useMainComponentSize } from "@/utils/getSize"
import Tile from "../Tiles/Tile"
import TileGroup from "../Tiles/TileGroup"
import { getContent } from "./TileContent"
import Reader from "../Reader"
import { usePageContext } from "../Context/PageContext"
import { getAccent } from "../Globals"


const ProjectPage = () => {

  const { activeReader, setActiveReader } = usePageContext();
  const mainSize = useMainComponentSize();
  if (!mainSize) { return null; }

    return (
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-12 grid-rows-12 md:gap-2 gap-1 col-start-1 row-start-1"
          style={{ width: `${mainSize.width}px`, height: `${mainSize.height}px` }}>
          
          <Tile sizeType={7} accentID={3} orientation={1} content={getContent(0)} />
          <Tile sizeType={8} accentID={3} orientation={2} content={getContent(3)} />
          <div className="col-span-2 row-span-2" />
          
          <TileGroup sizeType={7} orientation={3} tiles={[
            (<Tile key={0} sizeType={5} accentID={4} content={getContent(1)} />),
            (<Tile key={1} sizeType={4} accentID={6} />)
          ]}
          />
          
          <Tile sizeType={6} accentID={4} orientation={4} content={getContent(2)} />

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

export default ProjectPage