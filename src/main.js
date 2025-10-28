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

import * as THREE from "three";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth/window.innerHeight,
  0.1,
  1000
)

const cubeGeometry = new THREE.BoxGeometry(1,1,1);
const cubeMaterial = new THREE.MeshBasicMaterial({color: "pink"});
const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
scene.add(cube);

camera.position.z = 5

const canvas = document.querySelector(".world");
const renderer = new THREE.WebGLRenderer({canvas, antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);

const clock = new THREE.Clock();

function animate(){
  requestAnimationFrame(animate);
  cube.rotation.y = clock.getElapsedTime();
  renderer.render(scene,camera);
}

animate();
