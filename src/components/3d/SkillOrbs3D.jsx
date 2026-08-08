import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const SKILL_ITEMS = [
  { name: "React", color: "#61dafb", pos: [-4.5, 2.5, -18] },
  { name: "Node.js", color: "#68a063", pos: [4.5, 3.0, -20] },
  { name: "Python", color: "#3776ab", pos: [-5.2, -1.5, -22] },
  { name: "Java", color: "#f89820", pos: [5.0, -1.8, -19] },
  { name: "JavaScript", color: "#f7df1e", pos: [0, 3.8, -21] },
  { name: "C++", color: "#00599c", pos: [-2.5, -3.5, -23] },
  { name: "Unity", color: "#222222", pos: [2.5, -3.8, -22] },
  { name: "AI / ML", color: "#a855f7", pos: [0, -4.2, -20] },
  { name: "MongoDB", color: "#47a248", pos: [-4.0, 0.5, -25] },
  { name: "Git", color: "#f05032", pos: [4.0, 0.5, -24] },
];

function SkillCard({ skill }) {
  const meshRef = useRef();

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x += delta * 0.15;
    }
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1} position={skill.pos}>
      <group ref={meshRef}>
        {/* Glass Card Base */}
        <mesh>
          <boxGeometry args={[1.8, 1.8, 0.2]} />
          <meshPhysicalMaterial
            color="#0f172a"
            emissive={skill.color}
            emissiveIntensity={0.25}
            roughness={0.2}
            metalness={0.8}
            transparent
            opacity={0.85}
          />
        </mesh>
        {/* Wireframe Glowing Border */}
        <mesh scale={[1.04, 1.04, 1.04]}>
          <boxGeometry args={[1.8, 1.8, 0.2]} />
          <meshStandardMaterial
            color={skill.color}
            wireframe
            emissive={skill.color}
            emissiveIntensity={0.8}
          />
        </mesh>
        {/* 3D Label */}
        <Text
          position={[0, 0, 0.15]}
          fontSize={0.32}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {skill.name}
        </Text>
      </group>
    </Float>
  );
}

export default function SkillOrbs3D({ isMobile }) {
  if (isMobile) {
    // Show reduced set for mobile performance
    return (
      <group>
        {SKILL_ITEMS.slice(0, 5).map((skill, idx) => (
          <SkillCard key={idx} skill={skill} />
        ))}
      </group>
    );
  }

  return (
    <group>
      {SKILL_ITEMS.map((skill, idx) => (
        <SkillCard key={idx} skill={skill} />
      ))}
    </group>
  );
}
