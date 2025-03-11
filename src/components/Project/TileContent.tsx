import { ChevronRight } from 'lucide-react'
import { getAccent } from '../Globals'
import { getSvg } from '../SvgData'
import Link from 'next/link'

type TileContent = {
    front: React.ReactNode;
    back?: React.ReactNode;
}

const content: TileContent[] = [
    { front: (
        <div key={0} className="relative group w-full h-full">
            <div className="absolute flex opacity-0 group group-hover:opacity-95
                flex-col bottom-0 h-[90%] w-full
                transition-opacity duration-300">
                <div className={`absolute px-6 mt-[50%] ${getAccent(1, 'text')}`} >
                    <Link href="/cooldowns">
                    <h1 className={`flex flex-row font-poppins text-4xl cursor-pointer
                        hover:underline hover:underline-offset-2`}>
                        Cooldowns
                        <ChevronRight className="h-9 w-9 ml-2 mt-1" />
                    </h1>
                    </Link>
                    <p className="font-expletus_sans text-lg mt-4" >
                        An iOS Mobile app to help curb impulsivity.  A Dart/Flutter project, available in the iOS app store.
                    </p>
                </div>
                <div className={`h-[30%]
                    bg-gradient-to-b from-transparent ${getAccent(9, "to")}`} />
                <div className={`h-[70%] bg-gradient-to-b ${getAccent(9, 'from')} ${getAccent(10, 'to')}`} />
            </div>
            {getSvg(3, 8, "w=[110%] mt-8 p-2 mt-2")}
        </div>
    )}, 
    { front: (
        <div key={1} className="flex justify-center h-full w-full" >
            {getSvg(5, 8, "h-[100%] p-4")}
        </div>
    )}, 
    { front: (
        <div key={2} className="h-full" >
            {getSvg(4, 9, "h-[100%] py-3 ml-auto mr-8")}
        </div>
    )}, 
    { front: (
        <div key={3} className="relative group w-full h-full" >
            <div className="absolute flex opacity-0 group group-hover:opacity-95
                flex-row left-0 w-[100%] h-full
                transition-opacity duration-300">
                <div className={`flex flex-col justify-center px-6 w-[70%] bg-gradient-to-l ${getAccent(9, 'from')} ${getAccent(10, 'to')}`}>
                    <h1 className={`flex flex-row font-poppins text-4xl cursor-pointer
                        hover:underline hover:underline-offset-2`}>
                        CodeDevils Projects
                        <ChevronRight className="h-9 w-9 ml-2 mt-1" />
                    </h1>
                    <p className="font-system text-lg mt-4" >
                        As Technical Project Lead for CodeDevils, I managed and created several projects such as CodeDevils Academy, CodeDevils.org, and our Mobile app.
                    </p>
                </div>
                <div className={`w-[30%] bg-gradient-to-l from-transparent ${getAccent(9, "to")}`} />
            </div>
            {getSvg(6, 9, "h-[100%] py-2 ml-auto mr-12")}
        </div>
    )}
]

export const getContent = (contentID: number) => {
    return {
        front: content[contentID].front,
        ...(content[contentID].back && { back: content[contentID].back })
    };
}