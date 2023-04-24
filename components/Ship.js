import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Spaceship() {
  const groupRef = useRef();
  const { scene } = useGLTF('/models/toon_spaceship/scene.gltf');

  useFrame(({ clock }) => {
    if (groupRef.current) {
      const elapsedTime = clock.getElapsedTime();
      const radius = 10;
      const angle = elapsedTime * 0.75;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;

      groupRef.current.position.set(x, 5, z);

      const tangent = new THREE.Vector3(Math.cos(angle), 0, -Math.sin(angle));
      const target = new THREE.Vector3().addVectors(groupRef.current.position, tangent);

      groupRef.current.lookAt(target);
    }
  });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.01} />
    </group>
  );
}

export default Spaceship;

