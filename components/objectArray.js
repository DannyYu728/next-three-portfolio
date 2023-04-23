const earthSize = 5
const sunRadius = 5 * 109.2;

export const distanceFromSun = (distanceinAU) => {
  sunRadius + earthSize * distanceinAU * 50
}

function calculatePlanetPosition(distanceFromSun, angleInDegrees) {
  const sunPosition = new THREE.Vector3(5 * 50, 6 * 50, 20 * 50);
  const earthPosition = new THREE.Vector3(0, 0, 0);
  const angleInRadians = (angleInDegrees * Math.PI) / 180;
  const sunToEarth = new THREE.Vector3().subVectors(earthPosition, sunPosition);
  const sunToEarthNormalized = sunToEarth.clone().normalize();
  const rotationAxis = new THREE.Vector3(0, 1, 0); // Assuming planets lie in the XZ plane
  sunToEarthNormalized.applyAxisAngle(rotationAxis, angleInRadians);
  const planetPosition = sunPosition.clone().add(sunToEarthNormalized.multiplyScalar(distanceFromSun));
  return planetPosition;
}
  
export const Celestials = [
  {
    name: "Mercury",
    size: earthSize * 0.38,
    position: calculatePlanetPosition(distanceFromSun(0.39), 30),
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Venus",
    size: earthSize * 0.95,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Earth",
    size: earthSize,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Moon",
    size: earthSize * 0.27,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Mars",
    size: earthSize * 0.53,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Jupiter",
    size: earthSize * 11.21,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Saturn",
    size: earthSize * 9.45,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Uranus",
    size: earthSize * 4.01,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  },
  {
    name: "Neptune",
    size: earthSize * 3.88,
    position: [0, 0, 0],
    textureUrl: '/assets/earth.jpeg'
  }
]