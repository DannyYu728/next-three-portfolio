import * as THREE from 'three'

export const distanceFromSun = distanceinAU => {
  const sunRadius = 5 * 109.2
  return sunRadius + 5 * distanceinAU * 50
}

export const calculatePlanetPosition =(distanceFromSun, angleInDegrees) => {
  const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50)
  const earthPosition = new THREE.Vector3(0, 0, 0)
  const angleInRadians = (angleInDegrees * Math.PI) / 180
  const sunToEarth = new THREE.Vector3().subVectors(earthPosition, sunPosition)
  const sunToEarthNormalized = sunToEarth.clone().normalize()
  const rotationAxis = new THREE.Vector3(0, 1, 0)
  sunToEarthNormalized.applyAxisAngle(rotationAxis, angleInRadians)
  const planetPosition = sunPosition
    .clone()
    .add(sunToEarthNormalized.multiplyScalar(distanceFromSun))
  return planetPosition
}

export const delay = (duration) => {
  return new Promise((res) => {
    setTimeout(res, duration);
  });
};
