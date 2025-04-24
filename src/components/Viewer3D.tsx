'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { useRef } from 'react';
import { Mesh } from 'three';

export default function Viewer3D() {
  const cubeRef = useRef<Mesh>(null);

  return (
    <div className="w-full h-[500px] bg-gray-900">
      <Canvas camera={{ position: [3, 3, 3], fov: 50 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[5, 5, 5]} />
        <mesh ref={cubeRef} rotation={[0.5, 0.5, 0]}>
          <boxGeometry args={[1.5, 1.5, 1.5]} />
          <meshStandardMaterial color="#3b82f6" />
        </mesh>
        <OrbitControls />
      </Canvas>
    </div>
  );
}
