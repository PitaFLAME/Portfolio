import { useState } from "react";
import { usePageContext } from "./Context/PageContext";


const ContentSelector = () => {

    const liStyles = "relative flex items-center justify-center"
    
    return (
        <div className="w-80 h-12 mt-16 px-6 py-2 bg-slate-900 rounded-full backdrop-blur-sm bg-opacity-70" >
            
            <ul className="grid grid-rows-1 grid-cols-3 gap-2 h-full" >
                <li className={`${liStyles}`} >
                    <SelectorButton text={"Home"} id={0} />
                </li>
                <li className={`${liStyles}`} >
                    <SelectorButton text={"Projects"} id={1} />
                </li>
                <li className={`${liStyles}`} >
                    <SelectorButton text={"Contact"} id={2} />
                    
                </li>
            </ul>
            
        </div>
    )
}

const SelectorButton = ({text, id}:{
    text: string
    id: number
}) => {

    const [isHovered, setHovered] = useState(false);
    const { activePage, setActivePage, setActiveReader } = usePageContext()
    const active = activePage === id

    return (
        <>
            <p className={`text-white z-30 text-sm group cursor-pointer`}
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
                onClick={() => {setActivePage(id); setActiveReader(0)}}>
                    {text}
            </p>
            <div className={`absolute h-full w-full rounded-lg
                ${active ? "bg-gradient-to-br from-slate-600 to-slate-700" : 
                    isHovered ? "bg-slate-800" : "bg-gradient-to-br from-slate-900 to-slate-950"}`}
                onMouseEnter={() => {setHovered(true)}}
                onMouseLeave={() => {setHovered(false)}}
                onClick={() => {setActivePage(id)}} />
        </>
    )
}



export default ContentSelector