import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

export default function ConnectConclusion3D({ isMobile }) {
  const portalRef = useRef();
  const ring1 = useRef();
  const ring2 = useRef();

  useFrame((state, delta) => {
    if (ring1.current) ring1.current.rotation.z += delta * 0.4;
    if (ring2.current) ring2.current.rotation.z -= delta * 0.6;
    if (portalRef.current) portalRef.current.rotation.y += delta * 0.1;
  });

  return (
    <group ref={portalRef} position={[0, 0, -115]}>
      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        {/* Converging Outer Portal Ring */}
        <mesh ref={ring1}>
          <torusGeometry args={[4.2, 0.04, 16, 100]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Counter-rotating Inner Energy Ring */}
        <mesh ref={ring2} rotation={[Math.PI / 4, 0, 0]}>
          <torusGeometry args={[3.6, 0.03, 16, 100]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={2}
          />
        </mesh>

        {/* Core Glowing Orb */}
        <mesh>
          <sphereGeometry args={[1.5, 32, 32]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#06b6d4"
            emissiveIntensity={1.2}
            roughness={0.1}
            wireframe
          />
        </mesh>
      </Float>
    </group>
  );
}
