import { Canvas } from "@react-three/fiber";
import CameraController from "./CameraController";
import HeroFocalObject from "./HeroFocalObject";
import SkillOrbs3D from "./SkillOrbs3D";
import ExperienceTimeline3D from "./ExperienceTimeline3D";
import ProjectCards3D from "./ProjectCards3D";
import AboutEnvironment3D from "./AboutEnvironment3D";
import ConnectConclusion3D from "./ConnectConclusion3D";
import AmbientParticles from "./AmbientParticles";

export default function Scene3D({ scrollProgress, mousePosition, isMobile, prefersReducedMotion }) {
  // Normalize mouse position to [-1, 1]
  const normalizedMouse = {
    x: (mousePosition.x / window.innerWidth) * 2 - 1,
    y: -(mousePosition.y / window.innerHeight) * 2 + 1,
  };

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60, near: 0.1, far: 200 }}
        dpr={isMobile ? [1, 1.25] : [1, 2]}
        gl={{ powerPreference: "high-performance", antialias: !isMobile }}
      >
        <CameraController
          scrollProgress={scrollProgress}
          mouse={normalizedMouse}
          prefersReducedMotion={prefersReducedMotion}
        />

        {/* Ambient & Key Lighting */}
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 15, 10]} intensity={1.2} color="#ffffff" />
        <pointLight position={[-10, -10, -20]} intensity={1.5} color="#a855f7" />
        <pointLight position={[10, 10, -60]} intensity={1.8} color="#22d3ee" />
        <pointLight position={[0, 0, -110]} intensity={2.0} color="#f472b6" />

        {/* 3D Scene Stages */}
        <HeroFocalObject mouse={normalizedMouse} isMobile={isMobile} />
        <SkillOrbs3D isMobile={isMobile} />
        <ExperienceTimeline3D isMobile={isMobile} />
        <ProjectCards3D />
        <AboutEnvironment3D isMobile={isMobile} />
        <ConnectConclusion3D isMobile={isMobile} />
        <AmbientParticles count={1500} isMobile={isMobile} />
      </Canvas>
    </div>
  );
}
