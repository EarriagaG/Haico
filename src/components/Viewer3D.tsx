'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { useRef, useEffect, Suspense, useState } from 'react';
import * as THREE from 'three';

type Props = {
  path: string;
  height?: number;
};

function GLBModel({ path }: { path: string }) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path) as any;

  // Autoescalado del modelo
  useEffect(() => {
    if (ref.current && scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scaleFactor = 3 / maxDim;
      ref.current.scale.setScalar(scaleFactor);
    }
  }, [scene]);

  // Rotación continua
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.002;
    }
  });

  return <primitive ref={ref} object={scene} />;
}

export default function Viewer3D({ path, height = 500 }: Props) {
  const [error, setError] = useState(false);

  return (
    <div className="w-full" style={{ height }}>
      {error ? (
        <p className="text-red-500 text-center mt-4">
          No se pudo cargar el modelo.
        </p>
      ) : (
        <Canvas camera={{ position: [0, 1.5, 8], fov: 35 }} gl={{ alpha: true }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[5, 5, 5]} intensity={1} />
          <Suspense fallback={null}>
            <GLBModel path={path} />
          </Suspense>
          <OrbitControls enableZoom target={[0, 1.5, 0]} />
        </Canvas>
      )}
    </div>
  );
}
