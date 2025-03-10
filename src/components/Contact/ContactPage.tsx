import { useMainComponentSize } from "@/utils/getSize";
import Tile from "../Tiles/Tile"
import { getContent } from "./TileContent"



const ContactPage = () => {

    const size = useMainComponentSize();
    if (!size) { return null; }

    return (
      <div className="grid grid-cols-12 grid-rows-12 md:gap-2 gap-1"
      style={{ width: `${size.width}px`, height: `${size.height}px` }}>
          
          <Tile sizeType={6} accentID={8} orientation={4} content={getContent(0)} />
          


          
        </div>
    )
}

export default ContactPage