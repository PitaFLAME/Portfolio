import { ChevronLeft } from "lucide-react"
import Link from "next/link"


const content = [
    (<Link className="flex items-center h-full w-full group" href="/" >
        <ChevronLeft className="ml-auto mr-6 h-20 w-20 opacity-0 group-hover:opacity-100 duration-200" />
    </Link>), (
        <h2 className="flex justify-center items-center w-full h-full text-slate-950 font-poppins text-2xl cursor-default" >Features</h2>
    ), (
        <h2 className="flex justify-center items-center w-full h-full text-slate-950 font-poppins text-2xl cursor-default" >Future Updates</h2>
    )
]

export const getContent = (num: number) => {
    return content[num]
}