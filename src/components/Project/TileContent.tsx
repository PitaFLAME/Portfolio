import { ChevronRight, Twitter } from 'lucide-react'
import { getAccent } from '../Globals'
import { getSvg } from '../SvgData'
import Link from 'next/link'
import { ResponsiveText, useMedallionSize } from '@/utils/getSize'
import { usePageContext } from '../Context/PageContext'

const useContent = () => {
    const { setActiveReader } = usePageContext();
    const medallionSize = useMedallionSize();
    
    const getMedallionSize = (px: number) => ({
        width: `${medallionSize * px}px`,
        height: `${medallionSize * px}px`
    });

    return [
        { front: (  // Cooldowns
            <div key={0} className="relative group w-full h-full">
                <div className="absolute flex opacity-0 group group-hover:opacity-95
                    flex-col bottom-0 h-[90%] w-full
                    transition-opacity duration-300">
                    <div className={`absolute px-6 mt-[50%] ${getAccent(1, 'text')}`}>
                        <div onClick={() => setActiveReader(4)}>
                            <h1 className={`flex flex-row font-poppins text-4xl cursor-pointer
                                hover:underline hover:underline-offset-2`}>
                                Cooldowns
                                <ChevronRight className="h-9 w-9 ml-2 mt-1" />
                            </h1>
                        </div>
                        <p className="font-expletus_sans text-lg mt-4" >
                            An iOS Mobile app to help curb impulsivity.  A Dart/Flutter project, available in the iOS app store.
                        </p>
                    </div>
                    <div className={`h-[30%]
                        bg-gradient-to-b from-transparent ${getAccent(9, "to")}`} />
                    <div className={`h-[70%] bg-gradient-to-b ${getAccent(9, 'from')} ${getAccent(10, 'to')}`} />
                </div>
                {getSvg(3, 9, "w=[110%] mt-8 p-2 mt-2")}
            </div>
        )}, 
        { front: (  // Twitter API
            <div key={1} className="relative group w-full h-full" >
                <div className="absolute flex opacity-0 group group-hover:opacity-95
                    flex-col bottom-0 h-[90%] w-full
                    transition-opacity duration-300">
                    <div className={`absolute px-6 mt-[50%] ${getAccent(1, 'text')}`}>
                        <div onClick={() => setActiveReader(6)}>
                            <h1 className={`flex flex-row font-poppins text-4xl cursor-pointer
                                hover:underline hover:underline-offset-2`}>
                                Twitter API
                                <ChevronRight className="h-9 w-9 ml-2 mt-1" />
                            </h1>
                        </div>
                    </div>
                    <div className={`h-[30%]
                        bg-gradient-to-b from-transparent ${getAccent(9, "to")}`} />
                    <div className={`h-[70%] bg-gradient-to-b ${getAccent(9, 'from')} ${getAccent(10, 'to')}`} />
                </div>
                <div className="flex justify-center items-center h-full w-full">
                    <div className="grid grid-cols-1 h-[80%] w-[80%]">
                        {getSvg(34, 9, 'col-start-1 row-start-1 h-full w-full')}
                        <ResponsiveText type={0} size={1.2} className={`col-start-1 row-start-1 mt-auto ml-auto ${getAccent(9, 'text')}`}>
                            API
                        </ResponsiveText>
                    </div>
                </div>
            </div>
        )}, 
        { front: (  // GoodBytes
            <div key={2} className="relative group w-full h-full" >
                <div className="absolute flex opacity-0 group group-hover:opacity-95
                    flex-row left-0 w-[100%] h-full
                    transition-opacity duration-300">
                    <div className={`flex flex-col justify-center px-6 w-[70%] bg-gradient-to-l ${getAccent(9, 'from')} ${getAccent(10, 'to')}`}>
                        <h1 className={`flex flex-row font-poppins text-4xl cursor-pointer
                            hover:underline hover:underline-offset-2`} 
                            onClick={() => setActiveReader(7)}>
                            GoodBytes
                            <ChevronRight className="h-9 w-9 ml-2 mt-1" />
                        </h1>
                        <p className="font-system text-lg mt-4" >
                            A ficticious e-commerce website built with Next.js and MongoDB, featuring dynamic product creation and organization.
                        </p>
                    </div>
                    <div className={`w-[30%] bg-gradient-to-l from-transparent ${getAccent(9, "to")}`} />
                </div>
                {getSvg(4, 9, "h-[100%] py-3 ml-auto mr-8")}
            </div>
        )},
        { front: (  // CodeDevils Projects
            <div key={3} className="relative group w-full h-full" >
                <div className="absolute flex opacity-0 group group-hover:opacity-95
                    flex-row left-0 w-[100%] h-full
                    transition-opacity duration-300">
                    <div className={`flex flex-col justify-center px-6 w-[70%] bg-gradient-to-l ${getAccent(9, 'from')} ${getAccent(10, 'to')}`}>
                        <h1 className={`flex flex-row font-poppins text-4xl cursor-pointer
                            hover:underline hover:underline-offset-2`} 
                            onClick={() => setActiveReader(5)}>
                            CodeDevils Projects
                            <ChevronRight className="h-9 w-9 ml-2 mt-1" onClick={() => setActiveReader(5)} />
                        </h1>
                        <p className="font-system text-lg mt-4" >
                            Technical Project Lead for CodeDevils. I managed and created several technical projects, managing contributions through GitHub.
                        </p>
                    </div>
                    <div className={`w-[30%] bg-gradient-to-l from-transparent ${getAccent(9, "to")}`} />
                </div>
                {getSvg(6, 9, "h-full py-2 ml-auto mr-12")}
            </div>
        )}
    ]
}

const TileContentComponent = ({contentID}: {contentID: number}) => {
    const content = useContent();
    return content[contentID].front;
}

TileContentComponent.displayName = 'TileContentComponent';

export const useGetContent = (contentID: number) => {
    const content = useContent();
    return content[contentID];
}