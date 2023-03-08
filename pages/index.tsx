import AboutMeSection from "@/containers/AboutMeSection";
import Footer from "@/components/Footer";
import HomeSection from "@/containers/HomeSection";
import ProjectsSection from "@/containers/ProjectsSection";
import SkillsSection from "@/containers/SkillsSection";
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
         <Footer />
      </>
   );
};

export const getStaticProps = async () => {
   return {
      props: {},
   };
};

export default Home;
