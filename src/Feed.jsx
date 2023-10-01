import { useEffect, useState } from 'react'
import { BannerSection } from './components/BannerSection'
import { Header } from './components/Header'
import { AboutMeSection } from './components/AboutMeSection'
import { TechSection } from './components/TechSection'
import { ProjectsSection } from './components/ProjectsSection'
import { Footer } from './components/Footer'

export const Feed = () => {
    const [useEnglish, setUseEnglish] = useState(false);
  
    useEffect(() => {
      const autoLanguage = () =>{
        const englishStatus = localStorage.getItem("SVNEnglish");
        englishStatus && setUseEnglish(true);
      };
      autoLanguage();
    },[])
    
    return (
        <>
          <Header useEnglish ={useEnglish} setUseEnglish={setUseEnglish}/>
          <BannerSection useEnglish ={useEnglish} />
          <AboutMeSection useEnglish ={useEnglish} />
          <TechSection useEnglish ={useEnglish} />
          <ProjectsSection useEnglish ={useEnglish} />
          <Footer useEnglish ={useEnglish} />
        </>
      )
}