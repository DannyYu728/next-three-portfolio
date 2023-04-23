import { Canvas } from '@react-three/fiber'
import {
  OrbitControls,
  Stars,
  PerspectiveCamera,
  useGLTF
} from '@react-three/drei'
import { Suspense, useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useThree } from '@react-three/fiber'
import CelestialObject from '../components/CelestialObject'
import Spaceship from '../components/Ship'
import SpeechBubble from '../components/SpeechBubble'
import {Celestials} from '../components/objectArray'

function Sun() {
  const texture = useLoader(THREE.TextureLoader, '/assets/sun.jpeg');
  const sunSize = 5 * 109.2
  return (
    <mesh position={[5 * 50, 6 * 50, 20 * 50]}>
      <sphereGeometry args={[sunSize, 32, 32]} />
      <meshBasicMaterial map={texture} />
    </mesh>
  );
}

// function Mercury() {
//   const texture = useLoader(THREE.TextureLoader, '/assets/mercury.jpeg');
//   const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50);
//   const earthPosition = new THREE.Vector3(0, 0, 0);
//   const sunToEarth = new THREE.Vector3().subVectors(earthPosition, sunPosition);
//   const sunToEarthNormalized = sunToEarth.clone().normalize();
//   const sunRadius = 5 * 109.2;
//   const mercurySize = 5 * 0.38; // Mercury's size
//   const mercuryDistanceFromSun = sunRadius + mercurySize * 50; // Adjust the multiplier (1.5) to set the distance
//   const mercuryPosition = sunPosition
//     .clone()
//     .add(sunToEarthNormalized.multiplyScalar(mercuryDistanceFromSun));

//   return (
//     <mesh position={mercuryPosition.toArray()}>
//       <sphereGeometry args={[mercurySize, 64, 64]} />
//       <meshBasicMaterial map={texture} />
//     </mesh>
//   );
// }

// function calculatePlanetPosition(distanceFromSun, angleInDegrees) {
//   const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50);
//   const earthPosition = new THREE.Vector3(0, 0, 0);
//   const angleInRadians = (angleInDegrees * Math.PI) / 180;
//   const sunToEarth = new THREE.Vector3().subVectors(earthPosition, sunPosition);
//   const sunToEarthNormalized = sunToEarth.clone().normalize();
//   const rotationAxis = new THREE.Vector3(0, 1, 0); // Assuming planets lie in the XZ plane
//   sunToEarthNormalized.applyAxisAngle(rotationAxis, angleInRadians);
//   const planetPosition = sunPosition.clone().add(sunToEarthNormalized.multiplyScalar(distanceFromSun));
//   return planetPosition;
// }




function House() {
  const houseRef = useRef()
  const gltf = useGLTF('/models/cartoon_house/scene.gltf')

  return (
    <primitive
      ref={houseRef}
      object={gltf.scene}
      scale={0.5}
      position={[-0.5, 4.85, 0]}
      rotation={[0, Math.PI / 0.9, 0]}
    />
  )
}

function CustomOrbitControls() {
  const { camera, gl } = useThree()
  const controls = useRef()

  useEffect(() => {
    if (controls.current) {
      controls.current.target.set(-0.5, 4.85, 0)
      controls.current.update()

      controls.current.minDistance = 8
      controls.current.maxDistance = 400
    }
  }, [controls, camera, gl.domElement])

  return <OrbitControls ref={controls} args={[camera, gl.domElement]} />
}

function Home() {
  const earthSize = 5
  const sunRadius = 5 * 109.2;
  const distanceFromSun = sunRadius + earthSize * 0.39 * 50;
  const mercuryAngle = 30
  const mercuryPosition = calculatePlanetPosition(distanceFromSun, 30);

  return (
    <Canvas style={{ width: '100vw', height: '85vh' }} gl={{ antialias: true }}>
      <PerspectiveCamera makeDefault fov={90} position={[15, 15, 15]} />
      <Stars  radius={250} depth={500} count={5000} factor={20} fade speed={1}/>
      <CustomOrbitControls />
      <ambientLight intensity={0.1} />
      <directionalLight intensity={2} position={[5, 6, 20]} />
      <Suspense fallback={null}>
        <CelestialObject textureUrl='/assets/earth.jpeg' position={[0, 0, 0]} size={earthSize} />
        <CelestialObject textureUrl='/assets/moon.jpeg' position={[-5, -6, -20]} size={earthSize * 0.27} />
        <CelestialObject textureUrl='/assets/mercury.jpeg' position={mercuryPosition.toArray()} size={earthSize * 0.38} />
        <Sun />
        <House />
        <Spaceship />
        <SpeechBubble msg="Hi, Click me to see more!"/>
      </Suspense>
    </Canvas>
  )
}

export default Home


