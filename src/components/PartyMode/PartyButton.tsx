'use client'

import { PartyPopper } from "lucide-react"
import { useState } from "react";



const PartyTime = () => {
    const [isEngaged, setIsEngaged] = useState(false);

    const engagePartyMode = () => {
        setIsEngaged(!isEngaged);
        console.log("Party Mode Engaged.");
      };

    return (
        <div className={`absolute flex justify-center items-center bottom-12 right-8 w-12 h-12
              group hover:bg-zinc-200 rounded-full opacity-50 cursor-pointer
              ${isEngaged ? "bg-zinc-300" : ""}`}
              onClick={() => engagePartyMode()}>
          <PartyPopper className={`absolute h-8 w-8 opacity-5 z-40 group group-hover:text-zinc-700 group-hover:opacity-100
              ${isEngaged ? "opacity-100 text-zinc-700" : ""}`}/>
          
        </div>

    )
}

export default PartyTime