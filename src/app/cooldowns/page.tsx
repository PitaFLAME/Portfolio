import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Tile from "@/components/Tiles/Tile"
import { getContent } from "./TileContent"
import { getSvg } from "@/components/SvgData"
import Image from 'next/image'


const Home = () => {


    return (
        <main className="h-full w-full bg-gradient-to-b from-slate-600 to-slate-700 overflow-y-scroll scroll-smooth
                       text-slate-950 text-md lg:text-xl">

            <div className="fixed mt-12 w-64 h-48 -ml-32 z-20" >
                <Tile accentID={9} orientation={2} content={getContent(0)} />
            </div>

            <MaxWidthWrapper className="relative mb-24">
                
                {getSvg(3, 1, "absolute right-0 w-[40vw] h-[40vh] max-h-[512px] max-w-[512px] mr-24 mt-8")}

                <div className="grid grid-cols-12 grid-rows-12 
                    mt-24 px-8
                    h-[820px] w-full gap-2 bg-slate-100 opacity-90">

                    
                    <div className="row-span-2" />
                    <div className="flex items-center col-span-11 row-span-2">
                        <h1 className="text-zinc-950 font-poppins text-4xl" >Cooldowns App</h1>
                    </div>

                    <div className="row-span-3 col-span-8">
                        <p className="indent-12">
                        Welcome to my Cooldowns App project page. This Lifestyle app for mobile 
                        platforms was developed using Dart and is designed to help manage impulsivity 
                        and keep users accountable to the goals they want to set for themselves. Whether 
                        you want to keep yourself from eating out too often, manage breaks from your workout 
                        or study, this life-gamifying application seeks to aid you.
                        </p>
                    </div><div className="row-span-3 col-span-4" />
                    <div className="row-span-3 col-span-10">
                        <p className="indent-12">
                        In its current state, the app allows you to choose from a short list of icons to 
                        represent your Cooldown, and customize the recharge time, number of charges, and the 
                        recharge style for it. On the main Cooldowns view, your created Cooldowns will appear 
                        as either available, or with a &quot;dimmed&quot; overlay to indicate how long it will be until 
                        it is available again. The idea is to discourage the user from performing a specific 
                        action that they want to limit by treating that action as &quot;On Cooldown&quot;, or unavailable to them.
                        </p>
                    </div><div className="row-span-3 col-span-2" />
                    <div className="col-span-12" />
                    <Tile accentID={3} sizeType={2} orientation={2} content={getContent(1)} />
                    <div className="col-span-10" />
                    <div className="flex items-end row-span-2 col-span-11">
                        <p className="indent-12">
                            The app will be empty when you first download it, so the first thing you should do is create 
                            a new Cooldown. Creating new Cooldowns is fairly straightforward. You can specify the name of 
                            the Cooldown, its duration, and choose from a currently short list of icons to represent it on 
                            the main screen.</p>
                    </div><div className="row-span-2 col-span-2" />
                    


                </div>
                <div className="relative grid grid-cols-12 grid-rows-12 
                    px-8 z-10
                    h-[70vh] w-full gap-2 bg-slate-100 opacity-90">

                    <div className="flex items-center row-span-3 col-span-7">
                        <p className="indent-12">
                        You can also expand the &quot;Advanced&quot; menu to specify a number of charges the cooldown has, and how 
                        those charges recharge. For Parallel, each expended charge of the Cooldown will recharge independently 
                        from one another. In Series, however, only one charge will recharge at a time and once one charge is 
                        available, the next one will begin recharging.
                        </p>
                    </div>
                    <div className="row-span-3" />
                    <div className="col-span-4 row-span-9">
                        <Image 
                            src="/assets/cooldowns/Create_Cooldown_View.png"
                            alt="a screenshot of the create cooldown page"
                            width={400}
                            height={800}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="row-span-2 col-span-8" />
                    <div className="row-span-6" />

                    <div className="col-span-4 row-span-9 z-20">
                        <Image 
                            src="/assets/cooldowns/Cooldowns_Main_View.png"
                            alt="a screenshot of the main cooldowns view"
                            width={400}
                            height={800}
                            className="w-full h-full object-contain"
                        />
                    </div>
                    <div className="row-span-3 col-span-3" />
                    <div className="flex items-end row-span-3 col-span-7 pl-2">
                        <p className="indent-12">
                        The main Cooldowns view page displays all of the Cooldowns you&apos;ve created. The icon will appear 
                        normal if it is available. If the Cooldown has multiple charges available, it will have a small 
                        badge with a number to indicate how many charges are available. If a Cooldown is not available, 
                        it will appear with an animated &quot;dimmed&quot; overlay and a timer to indicate how long until it is 
                        available again.
                        </p>
                    </div>

                </div>
                
                <div className="relative grid grid-cols-12 grid-rows-12 
                    px-8 z-0
                    h-[70vh] w-full gap-2 bg-slate-100 opacity-90">
                    
                    <div className="row-span-4 col-span-12" />
                    <Tile accentID={3} sizeType={12} orientation={2} content={getContent(2)} />
                    <div className="col-span-9" />
                    <div className="row-span-4" />
                    <div className="col-span-8 row-span-4">
                        <p className="mt-2 mb-4">
                        Going forward, the following features are planned to be added:
                        </p>
                        <ul className="list-disc ml-8">
                            <li>
                            Custom Icons. Users will be able to upload photos from their device to create icons for their cooldowns.
                            </li>
                            <li>
                            Custom Themes. Users can customize the colors of the app and how it looks.
                            </li>
                            <li>
                            Integrated Home Screen Widgets. Users should be able to put select Cooldowns on their devices Home Screen via a widget.
                            </li>
                        </ul>
                    </div>
                </div>
            </MaxWidthWrapper>
        </main>
    )
}

export default Home