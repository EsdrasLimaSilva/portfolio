import AboutMeSection from "@/components/AboutMeSection";
import HomeSection from "@/components/HomeSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import Head from "next/head";

const Home = () => {
   return (
      <>
         <Head>
            <title>Portfolio | Esdras Silva</title>
         </Head>
         <main>
            <HomeSection />
            <AboutMeSection />
            <SkillsSection />
            <ProjectsSection />
         </main>
      </>
   );
};

export default Home;