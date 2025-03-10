import { ResponsiveText, useMedallionSize } from "@/utils/getSize";
import { getAccent } from "./Globals";
import { useState, useCallback, useMemo, memo } from "react";
import { getSvg } from "./SvgData";

interface StackImageProps {
  image: number;
  id: number;
  style: React.CSSProperties;
  override: number;
  onMouseEnter: () => void;
  onClick: () => void;
  onMouseLeave: () => void;
}

const StackImage = memo(({image, id, style, override, onMouseEnter, onClick, onMouseLeave}: StackImageProps) => {
  return (
    <div className={`flex justify-center w-full transform-gpu scale-100
                    transition-transform duration-200 ease-in-out transform-origin-center
                    hover:scale-125 ${override === id ? "!scale-125" : ""}`}
         style={style}
         onMouseEnter={onMouseEnter}
         onClick={onClick}
         onMouseLeave={onMouseLeave}>
      {getSvg(image, 5, "h-full")}
    </div>
  )
});

const Reader = ({readerID}:{
  readerID: number;
}) => {
  const [selector, setSelector] = useState<number>(0);
  const [override, setOverride] = useState<number>(0);
  const medallionSize = useMedallionSize();
  const height = useMemo(() => medallionSize * 80, [medallionSize]);
  const style = useMemo(() => ({ height }), [height]);

  const handleMouseEnter = useCallback((id: number) => setSelector(id), []);
  const handleClick = useCallback((id: number) => setOverride(id), []);
  const handleMouseLeave = useCallback(() => setSelector(0), []);

  const StackImageDescription = ({id, title, children}:{
    id: number;
    title: string;
    children?: React.ReactNode;
  }) => {
    return (
      <div className={`absolute flex flex-col items-center px-[4%] transition-transform duration-400 
           ${(selector === id && override === 0) || override === id ? "opacity-100" : "opacity-0"}`}>
        <ResponsiveText type={1} size={0.6}>{title}</ResponsiveText>
        <ResponsiveText type={1} size={0.5} className={`${getAccent(4, 'text')} text-center`}>
          {children}
        </ResponsiveText>
      </div>
    )
  }

  const readers = [
    (<></>),
    (<>
      <ResponsiveText type={1} size={1.2} className={`${getAccent(6, 'text')}`}>
        Education & Certifications
      </ResponsiveText>
      <div className="flex flex-row mt-[2%]">
        <div className={`${getAccent(7, 'bg')} w-[0.2%] rounded-lg mr-[5%] ml-[0.1%] `} />
        <div className="flex flex-col w-full">
          <div className="flex flex-row">
          
            <div>
              <ResponsiveText type={2} size={0.6} className="">
                Arizona State University&nbsp;
                <span className={getAccent(6, 'text')}>- GPA: 3.33</span>
              </ResponsiveText>
              <ResponsiveText type={0} size={0.5} className="indent-[4%]">
                Software Engineering&nbsp;<span className={getAccent(5, 'text')}>- Bachelor&apos;s</span>
              </ResponsiveText>
            </div>
          </div>
          <div className="flex flex-row w-full">
            {/*<div className={`${getAccent(7, 'bg')} w-[0.2%] rounded-lg mr-[2%] ml-[7%]`} />*/}
            <div className="w-full ml-[7%] mb-[1%]">
            <ResponsiveText type={2} size={0.5} className={getAccent(5,'text')}>
              Extracurriculars
            </ResponsiveText>
            <ResponsiveText type={0} size={0.5} className="ml-[2%]">
              CodeDevils&nbsp;<span className={getAccent(5, 'text')}>- Technical Project Manager</span>
            </ResponsiveText>
            <ResponsiveText type={0} size={0.5} className="ml-[2%]">
              ACM Student Chapter @ ASU&nbsp;<span className={getAccent(5, 'text')}>- Committee Chair, Engineering</span>
            </ResponsiveText>
            </div>
          </div>
          <div className="flex flex-row mt-[2%]">
            <div>
            <ResponsiveText type={2} size={0.6} className="">
              Cosumnes River College&nbsp; <span className={getAccent(6, 'text')}>- GPA: 3.00</span>
            </ResponsiveText>
            <ResponsiveText type={0} size={0.5} className="indent-[4%]">
              Computer Science&nbsp;<span className={getAccent(5, 'text')}>- Bachelor&apos;s</span>
            </ResponsiveText>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="flex flex-row mt-[8%]">
        <div className={`${getAccent(7, 'bg')} w-[0.2%] rounded-lg mr-[5%] ml-[0.1%] `} />
        <div>
        <ResponsiveText type={2} size={0.6} className="">
          CompTIA Network+ &nbsp;<span className={getAccent(6, 'text')}>(N10-008)</span>
        </ResponsiveText>
        <ResponsiveText type={0} size={0.5} className={`indent-[4%] ${getAccent(5, 'text')}`}>
          August 2022
        </ResponsiveText>
        <ResponsiveText type={2} size={0.6} className="mt-[1%]">
          fCC Responsive Web Design &nbsp;<span className={getAccent(6, 'text')}></span>
        </ResponsiveText>
        <ResponsiveText type={0} size={0.5} className={`indent-[4%] ${getAccent(5, 'text')}`}>
          June 2024
        </ResponsiveText>
        <ResponsiveText type={2} size={0.6} className="mt-[1%]">
          Google Certified IT Professional&nbsp;<span className={getAccent(6, 'text')}>(A+ equivalent)</span>
        </ResponsiveText>
        <ResponsiveText type={0} size={0.5} className={`indent-[4%] ${getAccent(5, 'text')}`}>
          November 2020
        </ResponsiveText>
        </div>
      </div>


    </>), (<>
      <ResponsiveText type={1} size={1.2} className={`${getAccent(6, 'text')}`}>
        My Technologies
      </ResponsiveText>
      <div className="grid grid-cols-6 w-full mt-[3%] gap-1 md:gap-2.5 lg:gap-4">

        <StackImage image={31} id={1} style={style} override={override} 
                   onMouseEnter={() => handleMouseEnter(1)} 
                   onClick={() => handleClick(1)} 
                   onMouseLeave={handleMouseLeave} />  {/* VS Code */}
        <StackImage image={18} id={2} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(2)} 
                   onClick={() => handleClick(2)} 
                   onMouseLeave={handleMouseLeave} />  {/* Git */}
        <StackImage image={21} id={3} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(3)} 
                   onClick={() => handleClick(3)} 
                   onMouseLeave={handleMouseLeave} />  {/* Java */}
        <StackImage image={10} id={4} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(4)} 
                   onClick={() => handleClick(4)} 
                   onMouseLeave={handleMouseLeave} />  {/* C++ */}
        <StackImage image={11} id={5} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(5)} 
                   onClick={() => handleClick(5)} 
                   onMouseLeave={handleMouseLeave} />  {/* C# */}
        <StackImage image={26} id={6} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(6)} 
                   onClick={() => handleClick(6)} 
                   onMouseLeave={handleMouseLeave} />  {/* Python */}

        <StackImage image={30} id={7} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(7)} 
                   onClick={() => handleClick(7)} 
                   onMouseLeave={handleMouseLeave} />  {/* TypeScript */}
        <StackImage image={24} id={8} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(8)} 
                   onClick={() => handleClick(8)} 
                   onMouseLeave={handleMouseLeave} />  {/* Next.js */}
        <StackImage image={27} id={9} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(9)} 
                   onClick={() => handleClick(9)} 
                   onMouseLeave={handleMouseLeave} />  {/* React */}
        <StackImage image={29} id={10} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(10)} 
                   onClick={() => handleClick(10)} 
                   onMouseLeave={handleMouseLeave} />  {/* TailwindCSS */}
        <StackImage image={22} id={11} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(11)} 
                   onClick={() => handleClick(11)} 
                   onMouseLeave={handleMouseLeave} />  {/* MongoDB */}
        <StackImage image={23} id={12} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(12)} 
                   onClick={() => handleClick(12)} 
                   onMouseLeave={handleMouseLeave} />  {/* MySQL */}

        <StackImage image={20} id={13} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(13)} 
                   onClick={() => handleClick(13)} 
                   onMouseLeave={handleMouseLeave} />  {/* JavaScript */}
        <StackImage image={19} id={14} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(14)} 
                   onClick={() => handleClick(14)} 
                   onMouseLeave={handleMouseLeave} />  {/* HTML */}
        <StackImage image={12} id={15} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(15)} 
                   onClick={() => handleClick(15)} 
                   onMouseLeave={handleMouseLeave} />  {/* CSS */}
        <StackImage image={13} id={16} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(16)} 
                   onClick={() => handleClick(16)} 
                   onMouseLeave={handleMouseLeave} />  {/* Dart */}
        <StackImage image={16} id={17} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(17)} 
                   onClick={() => handleClick(17)} 
                   onMouseLeave={handleMouseLeave} />  {/* Flutter */}
        <StackImage image={28} id={18} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(18)} 
                   onClick={() => handleClick(18)} 
                   onMouseLeave={handleMouseLeave} />  {/* Swift */}

        <StackImage image={14} id={19} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(19)} 
                   onClick={() => handleClick(19)} 
                   onMouseLeave={handleMouseLeave} />  {/* DigitalOcean */}
        <StackImage image={17} id={20} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(20)} 
                   onClick={() => handleClick(20)} 
                   onMouseLeave={handleMouseLeave} />  {/* Framer */}
        <StackImage image={15} id={21} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(21)} 
                   onClick={() => handleClick(21)} 
                   onMouseLeave={handleMouseLeave} />  {/* Figma */}
        <StackImage image={25} id={22} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(22)} 
                   onClick={() => handleClick(22)} 
                   onMouseLeave={handleMouseLeave} />  {/* Photoshop */}
        <StackImage image={9} id={23} style={style} override={override}
                   onMouseEnter={() => handleMouseEnter(23)} 
                   onClick={() => handleClick(23)} 
                   onMouseLeave={handleMouseLeave} />  {/* Illustrator */}

      </div>
      
      { /* Hit box to disable override once activated */}
      <div className={`absolute top-0 w-full h-[80%] ${override === 0 ? "hidden" : ""}`} 
           onClick={() => setOverride(0)}/>

      <div className={`absolute flex justify-center w-full h-[20%] bottom-[4%] py-[2%] rounded-2xl ${getAccent(10, 'bg')}`}>
        <StackImageDescription id={1} title="Visual Studio Code">
          This is where most of my work happens. Visual Studio Code is my go-to text editor for everything from front-end to back-end development. The vast array of extensions available makes it easy to customize and optimize for any task I&apos;m tackling.
        </StackImageDescription>
        <StackImageDescription id={2} title="Git">
          Git is the backbone of my workflow. I manage my projects and collaborate with teams using GitHub, and I&apos;m very comfortable with GitFlows for version control and deployment. I value its flexibility and reliability in tracking code changes across projects.
        </StackImageDescription>
        <StackImageDescription id={3} title="Java">
          My academic background is rooted in Java, making it my strongest object-oriented programming language. I enjoy its robustness, scalability, and extensive ecosystem, which makes it ideal for everything from small projects to large enterprise applications.
        </StackImageDescription>
        <StackImageDescription id={4} title="C++">
          One of my favorite languages.  Incredibly versatile and low level.
        </StackImageDescription>
        <StackImageDescription id={5} title="C#">
          I primarily used this in combination with the Unity engine.  
        </StackImageDescription>
        <StackImageDescription id={6} title="Python">
          The first language I ever learned.  I primarily used this with data science applications and scripting.
        </StackImageDescription>
        <StackImageDescription id={7} title="TypeScript">
          I enjoy type safety with JavaScript.  The extra effort to make a better program is always worth it.
        </StackImageDescription>
        <StackImageDescription id={8} title="Next.js">
          My framework of choice for React-based web apps.  I&apos;ve come to appreciate many of its features as I learned to work with it.
        </StackImageDescription>
        <StackImageDescription id={9} title="React">
          Component-based architecture and dynamic site generation were a game changer for me.  I feel like web development truly became progrogramming for me after I learned React.
        </StackImageDescription>
        <StackImageDescription id={10} title="TailwindCSS">
          Inline CSS is preferable for me.  The flexibility of Tailwind makes web development so much easier.
        </StackImageDescription>
        <StackImageDescription id={11} title="MongoDB">
          The first database technology that I fully learned.  I turn to it for most of my data needs.
        </StackImageDescription>
        <StackImageDescription id={12} title="MySQL">
          I hardly find myself needing relational applications, but it&apos;s come in handy in a few instances.
        </StackImageDescription>
        <StackImageDescription id={13} title="JavaScript">
          The foundation of modern web development.  Even with its quirks, I&apos;ve still enjoyed using it.
        </StackImageDescription>
        <StackImageDescription id={14} title="HTML">
          The starting point of my web development journey.  A simple structure system, but I&apos;ve enjoyed learning its expansiveness
        </StackImageDescription>
        <StackImageDescription id={15} title="CSS">
          Styling was one of the hardest things I had to learn, but I enjoyed learning about its different tools and capabilities.
        </StackImageDescription>
        <StackImageDescription id={16} title="Dart">
          Paired with the Flutter framework, it was my go-to for mobile development.  Its widget-based structure was interesting to learn.
        </StackImageDescription>
        <StackImageDescription id={17} title="Flutter">

        </StackImageDescription>
        <StackImageDescription id={18} title="Swift">

        </StackImageDescription>
        <StackImageDescription id={19} title="DigitalOcean">

        </StackImageDescription>
        <StackImageDescription id={20} title="Framer">

        </StackImageDescription>
        <StackImageDescription id={21} title="Figma">

        </StackImageDescription>
        <StackImageDescription id={22} title="Adobe Photoshop">

        </StackImageDescription>
        <StackImageDescription id={23} title="Adobe Illustrator">

        </StackImageDescription>

      </div>



    </>),

  ]


  return readers[readerID] 
}

export default Reader