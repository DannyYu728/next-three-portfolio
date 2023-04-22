import { BoxBufferGeometry, MeshPhongMaterial } from 'three';
import { useLoader } from '@react-three/fiber';
import * as THREE from 'three';

const Landscape = () => {
  const grassTexture = useLoader(THREE.TextureLoader, '/assets/grass.jpg');
  const dirtTexture = useLoader(THREE.TextureLoader, '/assets/dirt.png');

  grassTexture.wrapS = grassTexture.wrapT = THREE.RepeatWrapping;
  grassTexture.repeat.set(1, 1);
  grassTexture.anisotropy = 16;

  dirtTexture.wrapS = dirtTexture.wrapT = THREE.RepeatWrapping;
  dirtTexture.repeat.set(1, 1);
  dirtTexture.anisotropy = 16;

  const grassMaterial = new MeshPhongMaterial({ map: grassTexture });
  const dirtMaterial = new MeshPhongMaterial({ map: dirtTexture });

  const materials = [dirtMaterial, dirtMaterial, grassMaterial, dirtMaterial, dirtMaterial, dirtMaterial];

  const geometry = new BoxBufferGeometry(500, 25, 500);

  const InvisiblePlane = () => {
    return (
      <mesh
        renderOrder={-1}
        receiveShadow
        rotation={[-Math.PI / 2, 0, 0]}
        position={[0, 0, 0]}
      >
        <planeBufferGeometry args={[500, 500]} />
        <meshBasicMaterial color={'white'} opacity={0} transparent />
      </mesh>
    );
  };

  return (
    <>
    <mesh name="landscapeMesh" geometry={geometry} material={materials} position={[0, -15, 0]} receiveShadow />
    <InvisiblePlane />
  </>
  );
};

export default Landscape;


