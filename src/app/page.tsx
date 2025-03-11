"use client"

import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import PartyTime from '@/components/PartyMode/PartyButton';
import ContentSelector from '@/components/ContentSelector';
import HomePage from '@/components/Home/HomePage';
import { PageProvider, usePageContext } from '@/components/Context/PageContext';
import ProjectPage from '@/components/Project/ProjectPage';
import ContactPage from '@/components/Contact/ContactPage';
import StarAnimation from '@/components/Particles/StarCanvas';


const Page = () => {

  const { activePage } = usePageContext()

  return (
    <main className="bg-gradient-to-br from-slate-950 to-[#03091F]">

        <StarAnimation />

        <MaxWidthWrapper className='relative flex flex-col justify-center items-center h-screen'>
          { activePage === 1 ? <ProjectPage />
          : activePage === 2 ? <ContactPage />
          : <HomePage /> }
          
          <ContentSelector />
          <PartyTime />

        </MaxWidthWrapper>

      </main>
  )
}


export default function Home() {
  
  return (
    <PageProvider>
      <Page />
    </PageProvider>
  );
}
