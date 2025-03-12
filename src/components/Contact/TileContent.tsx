import React from 'react';
import { usePageContext } from '../Context/PageContext';
import { ResponsiveText, useMedallionSize } from "@/utils/getSize";
import { Codepen, Mail, Phone, MessageCircle, ScrollText, ChevronDown, ChevronUp, Circle, ChevronRight } from 'lucide-react';
import { getAccent } from '../Globals';
import { getSvg } from '../SvgData';
import Image from 'next/image';
import Link from 'next/link';



const useContent = () => {
    const { setActiveReader } = usePageContext();
    const medallionSize = useMedallionSize();
    
    const getMedallionSize = (px: number) => ({
        width: `${medallionSize * px}px`,
        height: `${medallionSize * px}px`
    });

    return [
        { front: (  // Business Card
            <div key={0} className="relative flex flex-row justify-center items-center h-full w-full gap-4 group">
            
            <Image 
                src="https://avatars.githubusercontent.com/u/171903351?v=4"
                alt="GitHub Profile"
                width={medallionSize * 160}
                height={medallionSize * 160}
                className={`rounded-full border-4 mx-8 lg:border-[5px] ${getAccent(8, 'border')}
                transition-transform duration-500 ease-out transform group-hover:scale-105`}
            />

            <div className='w-full h-full mt-[20%] pr-[4%]'>
                <ResponsiveText type={2} size={0.75} className={`${getAccent(4, 'text')}`}>
                    Pita Sherwood
                </ResponsiveText>
                <div className={`h-0.5 w-[90%] rounded-lg my-2 ${getAccent(8, 'bg')}`} />
                <ResponsiveText type={0} size={0.45} className={`${getAccent(5, 'text')}`}>
                Versatile Software Engineer and Networking specialist with
                a passion for creating quality software.
                </ResponsiveText>
            </div>
        </div>



        )}, { front: ( // Send message 
            <div key={1} className='flex flex-col items-center justify-start w-full h-full'>
                <MessageCircle style={getMedallionSize(80)} className={`${getAccent(6, 'text')} mt-[30%]`} />
                <div className='absolute w-[80%] h-[70%] cursor-pointer'
                     onClick={() => setActiveReader(8)} />
            </div>

            ), back: (
                <div key={1} className="flex items-end justify-center w-full h-full cursor-pointer" 
                onClick={() => setActiveReader(0)}>
                <ChevronUp className={`${getAccent(7, 'text')}`}
                            style={getMedallionSize(110)} />
            </div>



        )}, { front: ( // LinkedIn
            <Link key={2} href="https://www.linkedin.com/in/pita/"
                  className='flex flex-col items-center justify-center w-full h-full cursor-pointer' 
                  target="_blank">
                <div style={getMedallionSize(64)}>
                    {getSvg(33, 6, "w-full h-full")}
                </div>
            </Link>

        )}, { front: ( // GitHub
            <Link key={3} href="https://github.com/PitaFLAME"
                  className='flex flex-col items-center justify-center w-full h-full'
                  target="_blank">
                <div style={getMedallionSize(64)}>
                    {getSvg(32, 6, "w-full h-full")}
                </div>
            </Link>



        )}, { front: ( // Codepen
            <div key={4} className='flex flex-col items-center justify-center w-full h-full'>
                <Codepen style={getMedallionSize(64)} className={`${getAccent(6, 'text')}`} />
            </div>



        )}, { front: ( // Email
            <div key={5} className='flex flex-col items-center justify-center w-full h-full'>
                <Mail style={getMedallionSize(64)} className={`${getAccent(6, 'text')}`} />
            </div>



        )}, { front: ( // Phone
            <div key={6} className='flex flex-col items-center justify-center w-full h-full'>
                <Phone style={getMedallionSize(64)} className={`${getAccent(6, 'text')}`} />
            </div>



        )}, { front: ( // Resume
            <div key={7} className='flex items-center justify-start w-full h-full'>
                <div className='grid grid-cols-1 grid-rows-1 ml-[20%]'>
                    <div className='flex justify-center items-center col-start-1 row-start-1'><ScrollText style={getMedallionSize(84)} className={`${getAccent(6, 'text')}`} /></div>
                    <div className='flex justify-center items-center col-start-1 row-start-1'><Circle style={getMedallionSize(132)} className={`${getAccent(6, 'text')}`} /></div>
                </div>
                <div className='absolute w-[80%] h-[70%] cursor-pointer'
                     onClick={() => setActiveReader(9)} />
            </div>

            ), back: (
                <div key={7} className='flex items-center justify-start w-full h-full cursor-pointer'
                     onClick={() => setActiveReader(0)}>
                    <ChevronRight className={`${getAccent(7, 'text')}`}
                                style={getMedallionSize(110)} />
                </div>


            
        )}, { front: (
            <div key={8} className='flex flex-col justify-center w-full h-full px-[10%]'>
                <ResponsiveText type={2} size={0.5} className={`${getAccent(4, 'text')} font-rubik`}>
                    Let&apos;s work together!
                </ResponsiveText>
            </div>



        )}, { front: (
            <div key={9} className="relative w-full h-full">
                { getSvg(1, 10, "lg:h-72 lg:w-72 h-32 w-32 object-cover") }
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