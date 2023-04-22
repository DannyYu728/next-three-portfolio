import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'
import { Vector3} from 'three';

  function Spaceship() {
    const groupRef = useRef();
    const { scene } = useGLTF('/models/toon_spaceship/scene.gltf');
  
    useFrame(({ clock }) => {
      if (groupRef.current) {
        const elapsedTime = clock.getElapsedTime();
        const radius = 12;
        const angle = elapsedTime * 0.5;
        const x = Math.sin(angle) * radius;
        const z = Math.cos(angle) * radius;
  
        groupRef.current.position.set(x, 6, z);
        groupRef.current.lookAt(new Vector3(0, 3, 0));
      }
    });

  return (
    <group ref={groupRef}>
      <primitive object={scene} scale={0.01} />
    </group>
  )
}

export default Spaceship
