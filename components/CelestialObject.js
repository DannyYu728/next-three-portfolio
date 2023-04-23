import * as THREE from 'three'
import { useLoader } from '@react-three/fiber'

const Planet = ({ textureUrl, size, position }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl);
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping;
  texture.repeat.set(1, 1);
  texture.anisotropy = 16;
  const planetMaterial = new THREE.MeshPhongMaterial({ map: texture });

  return (
    <mesh position={position} material={planetMaterial}>
      <sphereGeometry args={[size, 64, 64]} />
    </mesh>
  );
}

export default Planet