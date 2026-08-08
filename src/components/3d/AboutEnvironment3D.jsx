import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function AboutEnvironment3D({ isMobile }) {
  const torusKnotRef = useRef();

  useFrame((state, delta) => {
    if (torusKnotRef.current) {
      torusKnotRef.current.rotation.y += delta * 0.15;
      torusKnotRef.current.rotation.x += delta * 0.08;
    }
  });

  return (
    <group position={[0, 0, -90]}>
      {/* Calm Torus Knot Core */}
      <Float speed={1.2} rotationIntensity={0.3} floatIntensity={0.8}>
        <mesh ref={torusKnotRef} position={[isMobile ? 0 : -4.5, 0, 0]}>
          <torusKnotGeometry args={[1.8, 0.4, 100, 16]} />
          <meshPhysicalMaterial
            color="#a855f7"
            emissive="#38bdf8"
            emissiveIntensity={0.3}
            roughness={0.2}
            transmission={0.8}
            thickness={1}
            wireframe={false}
          />
        </mesh>
        <mesh position={[isMobile ? 0 : -4.5, 0, 0]} scale={[1.05, 1.05, 1.05]}>
          <torusKnotGeometry args={[1.8, 0.4, 60, 12]} />
          <meshStandardMaterial
            color="#c084fc"
            wireframe
            emissive="#c084fc"
            emissiveIntensity={0.6}
          />
        </mesh>
      </Float>
    </group>
  );
}
