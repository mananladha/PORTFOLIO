import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text } from "@react-three/drei";
import * as THREE from "three";

const PROJECTS_3D_DATA = [
  {
    title: "360 Campus Tour",
    tech: "360° • Pendulum • JS",
    color: "#a855f7",
    pos: [-4.0, 1.5, -62],
  },
  {
    title: "Expense Tracker",
    tech: "MERN Stack • Analytics",
    color: "#22d3ee",
    pos: [0, -1.0, -68],
  },
  {
    title: "Infinite Runner 2D",
    tech: "Unity • C# • Game Dev",
    color: "#ec4899",
    pos: [4.0, 1.5, -74],
  },
];

function SingleProjectCard3D({ data }) {
  const cardGroup = useRef();
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (!cardGroup.current) return;
    const targetScale = hovered ? 1.12 : 1.0;
    cardGroup.current.scale.x = THREE.MathUtils.lerp(cardGroup.current.scale.x, targetScale, 0.1);
    cardGroup.current.scale.y = THREE.MathUtils.lerp(cardGroup.current.scale.y, targetScale, 0.1);
    cardGroup.current.scale.z = THREE.MathUtils.lerp(cardGroup.current.scale.z, targetScale, 0.1);

    const targetRotZ = hovered ? 0.05 : 0;
    cardGroup.current.rotation.z = THREE.MathUtils.lerp(cardGroup.current.rotation.z, targetRotZ, 0.1);
  });

  return (
    <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.6} position={data.pos}>
      <group
        ref={cardGroup}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        {/* Hologram Glass Backing */}
        <mesh>
          <boxGeometry args={[4.2, 2.6, 0.15]} />
          <meshPhysicalMaterial
            color="#090d16"
            emissive={data.color}
            emissiveIntensity={hovered ? 0.45 : 0.2}
            roughness={0.1}
            transmission={0.85}
            thickness={0.5}
            transparent
            opacity={0.9}
          />
        </mesh>

        {/* Outer Neon Wireframe Frame */}
        <mesh scale={[1.02, 1.02, 1.02]}>
          <boxGeometry args={[4.2, 2.6, 0.15]} />
          <meshStandardMaterial
            color={data.color}
            wireframe
            emissive={data.color}
            emissiveIntensity={hovered ? 1.8 : 0.8}
          />
        </mesh>

        {/* Title Text */}
        <Text
          position={[0, 0.4, 0.12]}
          fontSize={0.45}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {data.title}
        </Text>

        {/* Tech Stack Text */}
        <Text
          position={[0, -0.4, 0.12]}
          fontSize={0.24}
          color={data.color}
          anchorX="center"
          anchorY="middle"
        >
          {data.tech}
        </Text>
      </group>
    </Float>
  );
}

export default function ProjectCards3D() {
  return (
    <group>
      {PROJECTS_3D_DATA.map((proj, idx) => (
        <SingleProjectCard3D key={idx} data={proj} />
      ))}
    </group>
  );
}
