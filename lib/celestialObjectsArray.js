import { distanceFromSun, calculatePlanetPosition } from './helper'
const earthSize = 5

export const CelestialsObject = [
  {
    name: 'Mercury',
    size: earthSize * 0.38,
    position: calculatePlanetPosition(distanceFromSun(0.5), 0).toArray(),
    textureUrl: '/assets/mercury.jpeg'
  },
  {
    name: 'Venus',
    size: earthSize * 0.95,
    position: calculatePlanetPosition(distanceFromSun(1.2), 5).toArray(),
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
    position: calculatePlanetPosition(distanceFromSun(2.5), -3).toArray(),
    textureUrl: '/assets/mars.jpeg'
  },
  {
    name: 'Jupiter',
    size: earthSize * 11.21,
    position: calculatePlanetPosition(distanceFromSun(4.5), 0).toArray(),
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
