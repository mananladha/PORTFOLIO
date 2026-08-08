import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, Text, Line, useTexture } from "@react-three/drei";
import * as THREE from "three";

const FACE_LABELS = [
  { text: "brain.exe", color: "#22d3ee", targetPos: [0.0, 0.9, 0.2], tagPos: [1.6, 1.7, 0.4] },
  { text: "vision.dll", color: "#c084fc", targetPos: [-0.35, 0.35, 0.2], tagPos: [-1.8, 1.1, 0.4] },
  { text: "creative.exe", color: "#f472b6", targetPos: [0.85, 0.2, 0.2], tagPos: [2.0, 0.3, 0.4] },
  { text: "passion.dat", color: "#38bdf8", targetPos: [-0.6, -0.25, 0.2], tagPos: [-1.9, -0.6, 0.4] },
  { text: "focus.sys", color: "#a855f7", targetPos: [0.35, 0.35, 0.2], tagPos: [1.7, -1.0, 0.4] },
  { text: "smile.txt", color: "#4ade80", targetPos: [0.0, -0.65, 0.2], tagPos: [-1.5, -1.5, 0.4] },
];

function FaceLabelTag({ label }) {
  return (
    <group>
      {/* 3D Connector Line */}
      <Line
        points={[label.targetPos, label.tagPos]}
        color={label.color}
        lineWidth={1.5}
        transparent
        opacity={0.7}
      />

      {/* Target Node Point */}
      <mesh position={label.targetPos}>
        <sphereGeometry args={[0.04, 16, 16]} />
        <meshBasicMaterial color={label.color} />
      </mesh>

      {/* Tag Backdrop Card */}
      <group position={label.tagPos}>
        <mesh>
          <planeGeometry args={[1.3, 0.38]} />
          <meshPhysicalMaterial
            color="#090d16"
            emissive={label.color}
            emissiveIntensity={0.3}
            roughness={0.2}
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh scale={[1.04, 1.04, 1]}>
          <planeGeometry args={[1.3, 0.38]} />
          <meshBasicMaterial color={label.color} wireframe />
        </mesh>
        <Text
          position={[0, 0, 0.02]}
          fontSize={0.16}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
          fontWeight="bold"
        >
          {label.text}
        </Text>
      </group>
    </group>
  );
}

export default function HeroFace3D({ mouse, isMobile }) {
  const groupRef = useRef();
  const faceTexture = useTexture("/mananimage.jpg");

  useFrame((state, delta) => {
    if (!groupRef.current) return;
    if (mouse) {
      const targetRotY = mouse.x * 0.35;
      const targetRotX = -mouse.y * 0.25;

      groupRef.current.rotation.y = THREE.MathUtils.lerp(
        groupRef.current.rotation.y,
        targetRotY,
        0.06
      );
      groupRef.current.rotation.x = THREE.MathUtils.lerp(
        groupRef.current.rotation.x,
        targetRotX,
        0.06
      );
    }
  });

  const screenWidth = typeof window !== "undefined" ? window.innerWidth : 1200;
  const isTablet = screenWidth >= 640 && screenWidth < 1024;
  const isSmallMobile = screenWidth < 640;

  const position = isSmallMobile
    ? [0, 0.3, -2.5]
    : isTablet
    ? [1.8, 0, -2.2]
    : [2.5, 0, -2];

  const scale = isSmallMobile ? 0.65 : isTablet ? 0.85 : 1.05;

  return (
    <group ref={groupRef} position={position} scale={scale}>
      <Float speed={1.8} rotationIntensity={0.2} floatIntensity={0.8}>
        {/* Main 3D Glass Face Mesh */}
        <group>
          {/* Photo Plane */}
          <mesh position={[0, 0, 0.05]}>
            <planeGeometry args={[2.2, 2.6]} />
            <meshStandardMaterial
              map={faceTexture}
              roughness={0.2}
              metalness={0.1}
            />
          </mesh>

          {/* Outer Glass Bevel Frame */}
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[2.4, 2.8, 0.15]} />
            <meshPhysicalMaterial
              color="#0f172a"
              emissive="#c084fc"
              emissiveIntensity={0.25}
              roughness={0.1}
              transmission={0.85}
              thickness={0.5}
              transparent
              opacity={0.9}
            />
          </mesh>

          {/* Glowing Wireframe Border */}
          <mesh position={[0, 0, 0]} scale={[1.02, 1.02, 1.02]}>
            <boxGeometry args={[2.4, 2.8, 0.15]} />
            <meshStandardMaterial
              color="#22d3ee"
              wireframe
              emissive="#22d3ee"
              emissiveIntensity={0.9}
            />
          </mesh>

          {/* Orbiting Glass Halo Ring */}
          <mesh rotation={[Math.PI / 3, 0, 0]}>
            <torusGeometry args={[2.1, 0.02, 16, 100]} />
            <meshStandardMaterial
              color="#c084fc"
              emissive="#a855f7"
              emissiveIntensity={1.5}
            />
          </mesh>
        </group>

        {/* Floating Futuristic Labels Connected with Thin Lines */}
        {!isMobile && (
          <group>
            {FACE_LABELS.map((label, idx) => (
              <FaceLabelTag key={idx} label={label} />
            ))}
          </group>
        )}
      </Float>
    </group>
  );
}
