import * as THREE from 'three'

const earthSize = 5

export const distanceFromSun = distanceinAU => {
  const sunRadius = 5 * 109.2
  return sunRadius + earthSize * distanceinAU * 50
}

function calculatePlanetPosition(distanceFromSun, angleInDegrees) {
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

export const CelestialsObject = [
  {
    name: 'Mercury',
    size: earthSize * 0.38,
    position: calculatePlanetPosition(distanceFromSun(0.39), 0).toArray(),
    textureUrl: '/assets/mercury.jpeg'
  },
  {
    name: 'Venus',
    size: earthSize * 0.95,
    position: calculatePlanetPosition(distanceFromSun(0.72), 5).toArray(),
    textureUrl: '/assets/venus.jpeg'
  },
  {
    name: 'Earth',
    size: earthSize,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: 'Moon',
    size: earthSize * 0.27,
    position: [-5, -6, -20],
    textureUrl: '/assets/moon.jpeg'
  },
  {
    name: 'Mars',
    size: earthSize * 0.53,
    position: calculatePlanetPosition(distanceFromSun(1.52), -8).toArray(),
    textureUrl: '/assets/mars.jpeg'
  },
  {
    name: 'Jupiter',
    size: earthSize * 11.21,
    position: calculatePlanetPosition(distanceFromSun(4.2), 0).toArray(),
    textureUrl: '/assets/jupiter.jpeg'
  },
  {
    name: 'Saturn',
    size: earthSize * 9.45,
    position: calculatePlanetPosition(distanceFromSun(5.58), 18).toArray(),
    textureUrl: '/assets/saturn.jpeg'
  },
  {
    name: 'Uranus',
    size: earthSize * 4.01,
    position: calculatePlanetPosition(distanceFromSun(7.5), -15).toArray(),
    textureUrl: '/assets/uranus.jpeg'
  },
  {
    name: 'Neptune',
    size: earthSize * 3.88,
    position: calculatePlanetPosition(distanceFromSun(8.5), 10).toArray(),
    textureUrl: '/assets/neptune.jpeg'
  }
]
