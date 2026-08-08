import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Line } from "@react-three/drei";
import * as THREE from "three";

export default function ExperienceTimeline3D({ isMobile }) {
  const node1 = useRef();
  const node2 = useRef();
  const node3 = useRef();

  useFrame((state, delta) => {
    if (node1.current) node1.current.rotation.y += delta * 0.5;
    if (node2.current) node2.current.rotation.y += delta * 0.5;
    if (node3.current) node3.current.rotation.y += delta * 0.5;
  });

  // Timeline curve points in Z space
  const points = [
    [0, 2, -32],
    [-2, 0, -38],
    [2, -2, -44],
    [0, -4, -50],
  ];

  return (
    <group>
      {/* 3D Timeline Highway Beam */}
      <Line
        points={points}
        color="#a855f7"
        lineWidth={3}
        transparent
        opacity={0.6}
      />
      <Line
        points={points}
        color="#22d3ee"
        lineWidth={1}
        transparent
        opacity={0.8}
      />

      {/* Node 1 Beacon */}
      <Float position={[-2, 0, -38]} speed={2}>
        <mesh ref={node1}>
          <octahedronGeometry args={[0.7]} />
          <meshStandardMaterial
            color="#a855f7"
            emissive="#a855f7"
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshBasicMaterial color="#a855f7" transparent opacity={0.15} wireframe />
        </mesh>
      </Float>

      {/* Node 2 Beacon */}
      <Float position={[2, -2, -44]} speed={2.2}>
        <mesh ref={node2}>
          <icosahedronGeometry args={[0.7, 0]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshBasicMaterial color="#22d3ee" transparent opacity={0.15} wireframe />
        </mesh>
      </Float>

      {/* Node 3 Beacon */}
      <Float position={[0, -4, -50]} speed={1.9}>
        <mesh ref={node3}>
          <dodecahedronGeometry args={[0.7]} />
          <meshStandardMaterial
            color="#f472b6"
            emissive="#f472b6"
            emissiveIntensity={1.5}
            wireframe
          />
        </mesh>
        <mesh>
          <sphereGeometry args={[1.2, 16, 16]} />
          <meshBasicMaterial color="#f472b6" transparent opacity={0.15} wireframe />
        </mesh>
      </Float>
    </group>
  );
}
