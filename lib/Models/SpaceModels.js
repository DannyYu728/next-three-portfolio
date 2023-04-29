import { useRef, useEffect } from 'react'
import * as THREE from 'three'
import { useLoader, useFrame } from '@react-three/fiber'
import { distanceFromSun, calculatePlanetPosition } from '../helper'

export const Planet = ({ textureUrl, size, position, orbitTarget, orbitSpeed = 0.001  }) => {
  const texture = useLoader(THREE.TextureLoader, textureUrl)
  texture.wrapS = texture.wrapT = THREE.RepeatWrapping
  texture.repeat.set(1, 1)
  texture.anisotropy = 16
  const planetMaterial = new THREE.MeshPhongMaterial({ map: texture })

  const meshRef = useRef();

  useEffect(() => {
    if (meshRef.current && orbitTarget) {
      meshRef.current.position.set(...position);
      meshRef.current.position.sub(orbitTarget);
    }
  }, [orbitTarget, position]);

  useFrame(() => {
    if (meshRef.current && orbitTarget) {
      meshRef.current.position.applyAxisAngle(new THREE.Vector3(0, 1, 0), orbitSpeed);
      meshRef.current.position.add(orbitTarget);
    }
  });

  return (
    <mesh ref={meshRef} position={position} material={planetMaterial}>
      <sphereGeometry args={[size, 64, 64]} />
    </mesh>
  )
}

export const Sun = ({sunSize = 5 * 109.2, position=[5 * 50, 6 * 50, 20 * 50] }) => {
  // const sunSize = 5 * 109.2
  const texture = useLoader(THREE.TextureLoader, '/assets/sun.jpeg')
  const glowTexture = useLoader(THREE.TextureLoader, '/assets/glow.png');
  const glowMaterial = new THREE.MeshBasicMaterial({
    map: glowTexture,
    transparent: true,
    blending: THREE.AdditiveBlending,
    side: THREE.DoubleSide
  });
  const glowSizeMultiplier = 1.015;
  
  return (
    <>
      <mesh position={position}>
        <sphereGeometry args={[sunSize, 64, 64]} />
        <meshBasicMaterial map={texture} />
      </mesh>
      <mesh position={position}>
        <sphereGeometry args={[sunSize * glowSizeMultiplier, 64, 64]} />
        <meshBasicMaterial {...glowMaterial} />
      </mesh>
    </>
  )
}

export const Asteroid = ({ position, size, texture }) => {
  const material = new THREE.MeshBasicMaterial({ map: texture });

  const geometry = new THREE.IcosahedronGeometry(size, Math.floor(Math.random() * 2));

  return (
    <mesh position={position} geometry={geometry} material={material}>
      <meshBasicMaterial attach="material" map={texture}/>
    </mesh>
  );
};

export const AsteroidBelt = ({ count}) => {
  const texture = useLoader(THREE.TextureLoader, '/assets/moon.jpeg');
  const minDistance = distanceFromSun(2.75)
  const maxDistance = distanceFromSun(3.0)
  const asteroidBelt = [];

  for (let i = 0; i < count; i++) {
    const distanceFromSun = THREE.MathUtils.randFloat(minDistance, maxDistance);
    const angle = THREE.MathUtils.randFloat(0, Math.PI * 2);

    const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50);

    const position = new THREE.Vector3(
      sunPosition.x + distanceFromSun * Math.cos(angle),
      sunPosition.y + THREE.MathUtils.randFloat(-200, -450),
      sunPosition.z + distanceFromSun * Math.sin(angle)
    );

    const size = THREE.MathUtils.randFloat(0.5, 1.5);

    asteroidBelt.push(<Asteroid key={i} position={position.toArray()} size={size} texture={texture} />);
  }

  return <>{asteroidBelt}</>;
};

export const SaturnRing = () => {
  const texture = useLoader(THREE.TextureLoader, '/assets/saturn-ring.png');
  const position = calculatePlanetPosition(distanceFromSun(5.58), 18).toArray();
  const tilt = -70
  const ringSize = 64; 
  const ringGeometry = new THREE.RingGeometry(ringSize, ringSize * 1.5, 64);
  const ringMaterial = new THREE.MeshBasicMaterial({
    map: texture,
    side: THREE.DoubleSide,
    transparent: true,
  });
  const tiltInRadians = (tilt * Math.PI) / 180;

  return (
    <mesh position={position} geometry={ringGeometry} material={ringMaterial} rotation={[tiltInRadians, 0, 5]}>
      <meshBasicMaterial attach="material" map={texture} />
    </mesh>
  );
};