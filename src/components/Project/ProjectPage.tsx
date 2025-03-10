import { useMainComponentSize } from "@/utils/getSize"
import Tile from "../Tiles/Tile"
import TileGroup from "../Tiles/TileGroup"
import { getContent } from "./TileContent"



const ProjectPage = () => {

  const size = useMainComponentSize();
  if (!size) { return null; }

    return (
        <div className="grid grid-cols-12 grid-rows-12 md:gap-2 gap-1"
          style={{ width: `${size.width}px`, height: `${size.height}px` }}>
          
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
    )
}

export default ProjectPage