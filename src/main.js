import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const axesHelper = new THREE.AxesHelper(5); // Creates axes of size 5
scene.add(axesHelper);

const sphereGeometry = new THREE.SphereGeometry(1, 70, 70);
const sphereMaterial = new THREE.MeshBasicMaterial();
const earthStructure = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add( earthStructure );

const sphereGeometry2 = new THREE.SphereGeometry(1.015, 70, 70);
const sphereMaterial2 = new THREE.MeshBasicMaterial();
const earthCloudsStructure = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
// scene.add( earthCloudsStructure );


//Textures
let textureLoader = new THREE.TextureLoader();

let earthTexture = textureLoader.load("../public/textures/earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace;
sphereMaterial.map = earthTexture;

let earthCloudsTexture = textureLoader.load(
  "../public/textures/earth_clouds_map.jpg"
);
earthCloudsTexture.colorSpace = THREE.SRGBColorSpace;
sphereMaterial2.map = earthCloudsTexture;
sphereMaterial2.transparent = true;
sphereMaterial2.opacity = 0.4;



// Cuboid practice
const cuboidGeometry2 = new THREE.BoxGeometry(1, 3, 6);
const cuboidMaterial2 = new THREE.MeshBasicMaterial({
  color: "green",
  wireframe: true,
});
const cuboid = new THREE.Mesh(cuboidGeometry2, cuboidMaterial2);
scene.add(cuboid);

const mouse = {
  x:0,
  y:0
}

window.addEventListener("mousemove", (e) => {
  mouse.x = e.clientX/window.innerWidth;
  mouse.y = e.clientY/innerHeight;
})



camera.position.z = 8;

const canvas = document.querySelector(".world");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const clock = new THREE.Clock();

function animate() {
  window.requestAnimationFrame(animate);
  const elapsedTime = clock.getElapsedTime();

  cuboid.lookAt(new THREE.Vector3(mouse.x - 0.5, -mouse.y + 0.5, 1))
  controls.update();

  // earthStructure.rotation.y = elapsedTime * 0.1;
  // earthCloudsStructure.rotation.y = elapsedTime * 0.15;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);
