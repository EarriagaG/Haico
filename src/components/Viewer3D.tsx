'use client';

import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { Suspense, useRef, useEffect } from 'react';
import * as THREE from 'three';

type Props = {
  path: string;
  height?: number;
};

function GLBModel({ path }: { path: string }) {
  const ref = useRef<THREE.Group>(null);
  const { scene } = useGLTF(path);

  // Autoescalado del modelo
  useEffect(() => {
    if (ref.current && scene) {
      const box = new THREE.Box3().setFromObject(scene);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scaleFactor = 100 / maxDim; // Ajusta si quieres que se vea más grande o pequeño
      ref.current.scale.setScalar(scaleFactor);

      const center = new THREE.Vector3();
      box.getCenter(center);
      ref.current.position.copy(center.multiplyScalar(-1)); // Centrado
    }
  }, [scene]);

  // Rotación continua
  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.003; // Velocidad de giro
    }
  });

  if (!scene) {
    return (
      <p className="text-red-500 text-center mt-4">
        No se pudo cargar el modelo.
      </p>
    );
  }

  return <primitive ref={ref} object={scene} />;
}

export default function Viewer3D({ path, height = 500 }: Props) {
  return (
    <div className="w-full" style={{ height }}>
      <Canvas camera={{ position: [0, 2, 6], fov: 45 }} gl={{ alpha: true }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 5, 5]} intensity={1} />

        <Suspense fallback={null}>
          <GLBModel path={path} />
        </Suspense>

        <OrbitControls enableZoom target={[0, 1, 0]} />
      </Canvas>
    </div>
  );
}
