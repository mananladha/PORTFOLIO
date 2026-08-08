import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";

export default function CameraController({ scrollProgress, mouse, prefersReducedMotion }) {
  const { camera } = useThree();
  const currentZ = useRef(5);

  useFrame((state, delta) => {
    // Map scroll progress (0 to 1) to camera Z trajectory (5 to -105)
    const targetZ = THREE.MathUtils.lerp(5, -105, scrollProgress);

    // Smooth lerp for camera Z movement
    currentZ.current = THREE.MathUtils.lerp(currentZ.current, targetZ, 0.06);
    camera.position.z = currentZ.current;

    // Subtle scroll velocity / section vertical curve
    const targetY = Math.sin(scrollProgress * Math.PI * 5) * 0.8;
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, targetY, 0.05);

    // Mouse parallax (dampened if reduced motion)
    const parallaxFactor = prefersReducedMotion ? 0.05 : 0.4;
    const targetX = mouse.x * parallaxFactor;
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, targetX, 0.05);

    // Camera rotation subtle tilt
    const targetRotY = -mouse.x * 0.05 * parallaxFactor;
    const targetRotX = mouse.y * 0.05 * parallaxFactor;

    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, targetRotY, 0.05);
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, targetRotX, 0.05);
  });

  return null;
}
