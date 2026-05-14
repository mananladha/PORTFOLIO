import Hero from "../components/Hero";
import SkillsPreview from "../components/SkillsPreview";
import ExperiencePreview from "../components/ExperiencePreview";
import ProjectsPreview from "../components/ProjectsPreview";
import AboutPreview from "../components/AboutPreview";
import ConnectPreview from "../components/ConnectPreview";

function Home() {
  return (
    <>
      <Hero />
      <SkillsPreview />
      <ExperiencePreview />
      <ProjectsPreview />
      <AboutPreview />
      <ConnectPreview />
    </>
  );
}

export default Home;