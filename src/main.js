// #1 Basic Cube in Three.js
// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth/window.innerHeight,
//   0.1,
//   1000
// )

// const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// camera.position.z = 5

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({canvas});
// renderer.setSize(window.innerWidth, window.innerHeight);

// renderer.render(scene,camera);






// ----------------------------------------------------------------------------------
// #2 Animation Loop
// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth/window.innerHeight,
//   0.1,
//   1000
// )

// const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// camera.position.z = 5

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

// function animate(){
//   requestAnimationFrame(animate);
//   cube.rotation.y += 0.01;
//   renderer.render(scene,camera);
// }

// animate();






// ----------------------------------------------------------------------------------
// #3 Animation with Clock

// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth/window.innerHeight,
//   0.1,
//   1000
// )

// const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// camera.position.z = 5

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

// const clock = new THREE.Clock();

// function animate(){
//   requestAnimationFrame(animate);
//   cube.rotation.y = clock.getElapsedTime();
//   renderer.render(scene,camera);
// }

// animate();



// ----------------------------------------------------------------------------------
// #4 Orbit Controls
// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth/window.innerHeight,
//   0.1,
//   1000
// )

// const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// camera.position.z = 5

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enablingDamping = true;
// controls.dampingFactor = 0.05;

// const clock = new THREE.Clock();

// function animate(){
//   requestAnimationFrame(animate);
//   cube.rotation.y = clock.getElapsedTime();
//   controls.update();
//   renderer.render(scene,camera);
// }

// animate();





// ----------------------------------------------------------------------------------
// #5 Axis Helpers

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth/window.innerHeight,
//   0.1,
//   1000
// )

// const axesHelper = new THREE.AxesHelper(5); // Creates axes of size 5
// scene.add(axesHelper);

// const cubeGeometry = new THREE.BoxGeometry(1,1,1);
// const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
// const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
// scene.add(cube);

// camera.position.z = 5

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
// renderer.setSize(window.innerWidth, window.innerHeight);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enablingDamping = true;
// controls.dampingFactor = 0.05;

// const clock = new THREE.Clock();

// function animate(){
//   requestAnimationFrame(animate);
//   cube.rotation.y = clock.getElapsedTime();
//   controls.update();
//   renderer.render(scene,camera);
// }

// animate();




// ----------------------------------------------------------------------------------
// #6 Earth Animation with Textures

import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);


const sphereGeometry = new THREE.SphereGeometry(1, 70, 70);
const sphereMaterial = new THREE.MeshBasicMaterial();
const earthStructure = new THREE.Mesh(sphereGeometry, sphereMaterial);
scene.add( earthStructure );

const sphereGeometry2 = new THREE.SphereGeometry(1.015, 70, 70);
const sphereMaterial2 = new THREE.MeshBasicMaterial();
const earthCloudsStructure = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
scene.add( earthCloudsStructure );


//Textures
let textureLoader = new THREE.TextureLoader();

let earthTexture = textureLoader.load("../public/textures/earth_daymap.jpg");
earthTexture.colorSpace = THREE.SRGBColorSpace;
sphereMaterial.map = earthTexture;

let earthCloudsTexture = textureLoader.load("../public/textures/earth_clouds_map.jpg");
earthCloudsTexture.colorSpace = THREE.SRGBColorSpace;
sphereMaterial2.map = earthCloudsTexture;
sphereMaterial2.transparent = true;
sphereMaterial2.opacity = 0.4;

camera.position.z = 2;

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

  controls.update();

  earthStructure.rotation.y = elapsedTime * 0.1;
  earthCloudsStructure.rotation.y = elapsedTime * 0.15;

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);








