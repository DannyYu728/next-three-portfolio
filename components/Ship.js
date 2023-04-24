import { useRef, useMemo } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF } from '@react-three/drei';
import * as THREE from 'three';

function Spaceship({ position = [0, 0, 0], size = 1, orbit = false, rotation}) {
  const groupRef = useRef();
  const { scene } = useGLTF('/models/toon_spaceship/scene.gltf');

  useFrame(({ clock }) => {
    if (groupRef.current) {
      if (orbit) {
        const elapsedTime = clock.getElapsedTime();
        const radius = 10;
        const angle = elapsedTime * 0.45;
        const x = Math.sin(angle) * radius + position[0];
        const z = Math.cos(angle) * radius + position[2];

        groupRef.current.position.set(x, 5 + position[1], z);

        const tangent = new THREE.Vector3(Math.cos(angle), 0, -Math.sin(angle));
        const target = new THREE.Vector3().addVectors(groupRef.current.position, tangent);

        groupRef.current.lookAt(target);
      } else {
        groupRef.current.position.set(...position);
      }
      if (rotation) {
        groupRef.current.rotation.set(...rotation);
      }
    }
  });

  const scale = useMemo(() => [size * 0.01, size * 0.01, size * 0.01], [size]);

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={scale} />
    </group>
  );
}

export default Spaceship;


