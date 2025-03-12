import { useMainComponentSize } from "@/utils/getSize";
import Tile from "../Tiles/Tile"
import { useGetContent } from "./TileContent"
import TileGroup from "../Tiles/TileGroup";
import { usePageContext } from "../Context/PageContext";
import { getAccent } from "../Globals";
import Reader from "../Reader";
import { ResponsiveText } from "@/utils/getSize";
import { PhoneForwarded, SendHorizontal } from "lucide-react";
import Link from "next/link";

const ContactPage = () => {

  const { activeReader, setActiveReader, activeTile } = usePageContext();
  const mainSize = useMainComponentSize();
  if (!mainSize) { return null; }

    return (
      <div className="grid grid-cols-1">
        <div className="grid grid-cols-12 grid-rows-12 md:gap-2 gap-1 col-start-1 row-start-1"
        style={{ width: `${mainSize.width}px`, height: `${mainSize.height}px` }}>
            
            <div className="col-span-2 row-span-4" />
            <Tile sizeType={6} accentID={8} orientation={4} content={useGetContent(0)} />
            <Tile sizeType={13} accentID={7} orientation={1} content={useGetContent(1)} clickable={8} />
            <div className="col-span-1 row-span-4" />

            <div className="col-span-1 row-span-2" />
            <Tile sizeType={4} accentID={8} orientation={3} content={useGetContent(2)} />
            <Tile sizeType={4} accentID={8} orientation={3} content={useGetContent(3)} />
            <Tile sizeType={4} accentID={7} orientation={3} content={useGetContent(4)} />
            <Tile sizeType={4} accentID={7} orientation={3} content={useGetContent(5)} activatable={1} />
            <Tile sizeType={4} accentID={8} orientation={3} content={useGetContent(6)} activatable={2} />
            <div className="col-span-1 row-span-2" />
            <div className="col-span-2 row-span-2" />
            <div className="col-span-8 row-span-1" />
            <div className="col-span-2 row-span-2" />
            <div className={`col-span-8 row-span-1 flex items-center justify-center rounded-xl ${getAccent(7, 'bg')}
                ${activeTile === 0 ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}>
                {activeTile === 1 && (
                    <div className="relative flex flex-row items-center justify-center w-full">
                        <ResponsiveText type={0} size={0.6} className={`${getAccent(4, 'text')}`}>
                            pita.sherwood@protonmail.com
                        </ResponsiveText>
                        <Link href="mailto:pita.sherwood@protonmail.com" className=" absolute cursor-pointer z-40 right-4">
                            <SendHorizontal className={`${getAccent(4, 'text')} ml-[2%] cursor-pointer`} />
                        </Link>
                    </div>
                )}
                {activeTile === 2 && (
                    <div className="relative flex flex-row items-center justify-center w-full">
                        <ResponsiveText type={0} size={0.6} className={`${getAccent(4, 'text')}`}>
                            +1 (916) 600-1192
                        </ResponsiveText>
                        <Link href="tel:+19166001192" className=" absolute cursor-pointer z-40 right-4">
                          <PhoneForwarded className={`${getAccent(4, 'text')} ml-[2%] cursor-pointer`} />
                        </Link>
                    </div>
                )}
            </div>

            <div className="col-span-1 row-span-4" />
            <Tile sizeType={6} accentID={8} orientation={4} content={useGetContent(7)} clickable={9} />
            <Tile sizeType={11} accentID={7} orientation={2} content={useGetContent(8)} />
            <div className="col-span-2 row-span-2" />
            <TileGroup sizeType={9} orientation={2} tiles={[
              (<Tile key={9} sizeType={3} accentID={7} content={useGetContent(9)} />),
              (<Tile key={10} sizeType={11} accentID={8} />) ]} />
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

export default ContactPage