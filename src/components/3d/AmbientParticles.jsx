import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

export default function AmbientParticles({ count = 1200, isMobile = false }) {
  const pointsRef = useRef();

  const particleCount = isMobile ? Math.floor(count / 3) : count;

  const [positions, colors, scales] = useMemo(() => {
    const pos = new Float32Array(particleCount * 3);
    const col = new Float32Array(particleCount * 3);
    const sca = new Float32Array(particleCount);

    const purpleColor = new THREE.Color("#c084fc");
    const cyanColor = new THREE.Color("#22d3ee");
    const pinkColor = new THREE.Color("#f472b6");

    for (let i = 0; i < particleCount; i++) {
      // Spread across 3D space
      pos[i * 3] = (Math.random() - 0.5) * 45;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 90; // depth through sections
      pos[i * 3 + 2] = (Math.random() - 0.5) * 45;

      // Color variation
      const rand = Math.random();
      let chosenColor = purpleColor;
      if (rand > 0.6) chosenColor = cyanColor;
      else if (rand > 0.35) chosenColor = pinkColor;

      col[i * 3] = chosenColor.r;
      col[i * 3 + 1] = chosenColor.g;
      col[i * 3 + 2] = chosenColor.b;

      sca[i] = Math.random() * 0.12 + 0.04;
    }

    return [pos, col, sca];
  }, [particleCount]);

  useFrame((state, delta) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y += delta * 0.03;
    pointsRef.current.rotation.x += delta * 0.015;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.15}
        vertexColors
        transparent
        opacity={0.65}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}
