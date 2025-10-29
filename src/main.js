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

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );


// const sphereGeometry = new THREE.SphereGeometry(1, 70, 70);
// const sphereMaterial = new THREE.MeshBasicMaterial();
// const earthStructure = new THREE.Mesh(sphereGeometry, sphereMaterial);
// scene.add( earthStructure );

// const sphereGeometry2 = new THREE.SphereGeometry(1.015, 70, 70);
// const sphereMaterial2 = new THREE.MeshBasicMaterial();
// const earthCloudsStructure = new THREE.Mesh(sphereGeometry2, sphereMaterial2);
// scene.add( earthCloudsStructure );


// //Textures
// let textureLoader = new THREE.TextureLoader();

// let earthTexture = textureLoader.load("../public/textures/earth_daymap.jpg");
// earthTexture.colorSpace = THREE.SRGBColorSpace;
// sphereMaterial.map = earthTexture;

// let earthCloudsTexture = textureLoader.load("../public/textures/earth_clouds_map.jpg");
// earthCloudsTexture.colorSpace = THREE.SRGBColorSpace;
// sphereMaterial2.map = earthCloudsTexture;
// sphereMaterial2.transparent = true;
// sphereMaterial2.opacity = 0.4;

// camera.position.z = 2;

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;

// const clock = new THREE.Clock();

// function animate() {
//   window.requestAnimationFrame(animate);
//   const elapsedTime = clock.getElapsedTime();

//   controls.update();

//   earthStructure.rotation.y = elapsedTime * 0.1;
//   earthCloudsStructure.rotation.y = elapsedTime * 0.15;

//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);



// ----------------------------------------------------------------------------------
// #7 Cuboid with Mouse Movements


// import * as THREE from "three";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const cuboidGeometry = new THREE.BoxGeometry(1, 3, 6);
// const cuboidMaterial = new THREE.MeshBasicMaterial({
//   color: "green",
//   wireframe: true,
// });
// const cuboid = new THREE.Mesh(cuboidGeometry, cuboidMaterial);
// scene.add(cuboid);

// const mouse = {
//   x:0,
//   y:0
// }

// window.addEventListener("mousemove", (e) => {
//   mouse.x = e.clientX/window.innerWidth;
//   mouse.y = e.clientY/innerHeight;
// })

// camera.position.z = 8;

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);


// function animate() {
//   window.requestAnimationFrame(animate);

//   cuboid.lookAt(new THREE.Vector3(mouse.x - 0.5, -mouse.y + 0.5, 1));

//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);



// ----------------------------------------------------------------------------------
// #8 Responsive Window

// window.addEventListener("resize", () => {
//   camera.aspect = window.innerWidth / window.innerHeight;
//   renderer.setSize(window.innerWidth, window.innerHeight);
//   camera.updateProjectionMatrix();
// })



// ----------------------------------------------------------------------------------
// #9 DPR -> Device Pixel Ratio

// const renderer = new THREE.WebGLRenderer({ canvas})
// renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));




// ----------------------------------------------------------------------------------
// #10 Orbit Controls (in Detail)

// import * as THREE from "three";
// import { OrbitControls } from "three/examples/jsm/Addons.js";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const cuboidGeometry = new THREE.BoxGeometry(1, 3, 6);
// const cuboidMaterial = new THREE.MeshBasicMaterial({
//   color: "green",
//   wireframe: true,
// });
// const cuboid = new THREE.Mesh(cuboidGeometry, cuboidMaterial);
// scene.add(cuboid);

// camera.position.z = 8;

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);

// const controls = new OrbitControls(camera, renderer.domElement);
// controls.enableDamping = true;
// controls.dampingFactor = 0.05;

// // Restricting the angles of rotation horizontally (left and right)
// // minAzimuthAngle -> Left Limit
// // maxAzimuthAngle -> Right Limit


// // #1 -Left (-45°) = Right (45°) (Opposite direction of left)
// controls.minAzimuthAngle = -Math.PI / 4;
// controls.maxAzimuthAngle = 0;

// // #2 Right (45°) = -Left (-45°) (Opposite direction of right) || Similar to #1
// controls.minAzimuthAngle = 0;
// controls.maxAzimuthAngle = Math.PI / 4;


// // #3 Left (45°) (Rotate from front 0° to Right until 45° or till 270° at the end on left) 
// controls.minAzimuthAngle = Math.PI / 4;
// controls.maxAzimuthAngle = 0;


// // #4 -Right (-45°) (Rotate from front 0° to Left until 45° or till 270° at the end on Right) || Similar to #3
// controls.minAzimuthAngle = 0;
// controls.maxAzimuthAngle = -Math.PI / 4;

// // #5 No Horizontal Rotation
// controls.minAzimuthAngle = 0;
// controls.maxAzimuthAngle = 0;


// // Restricting the angles of rotation vertically (up and down)
// minAzimuthAngle -> Left Limit
// maxAzimuthAngle -> Right Limit


// controls.minPolarAngle = Math.PI / 4;
// controls.maxPolarAngle = Math.PI / 1.25;


// // Mainly works on orthographic camera
// controls.minZoom= 6;
// controls.maxZoom = 20;


// controls.minDistance = 6; //zoom in limit
// controls.maxDistance = 20; // zoom out limit


// function animate() {
//   window.requestAnimationFrame(animate);

//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);






// ----------------------------------------------------------------------------------
// #11 LIL GUI

// import * as THREE from "three";
// import GUI from "lil-gui";

// const scene = new THREE.Scene();
// const camera = new THREE.PerspectiveCamera(
//   75,
//   window.innerWidth / window.innerHeight,
//   0.1,
//   1000
// );

// const cuboidGeometry = new THREE.BoxGeometry(1, 3, 6);
// const cuboidMaterial = new THREE.MeshBasicMaterial({
//   color: "#d80e54",
// });
// const cuboid = new THREE.Mesh(cuboidGeometry, cuboidMaterial);
// scene.add(cuboid);

// camera.position.z = 8;

// const canvas = document.querySelector(".world");
// const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
// renderer.setSize(window.innerWidth, window.innerHeight);

// const gui = new GUI();

// const params = {
//   width: 1,
//   height: 3,
//   depth: 6,
//   color: "##d80e54",
//   wireframe: false,
//   rotationX: 0,
//   rotationY: 0,
//   rotationZ: 0,
// }

// function updateCuboid(){
//   cuboid.geometry.dispose();
//   cuboid.geometry = new THREE.BoxGeometry(
//     params.width,
//     params.height,
//     params.depth
//   )
// }

// gui.add(params, "width", 1, 10).onChange(updateCuboid);
// gui.add(params, "height", 1, 10).onChange(updateCuboid);
// gui.add(params, "depth", 1, 10).onChange(updateCuboid);
// gui.addColor(params, "color").onChange(() => {
//   cuboid.material.color.set(params.color)
// })
// gui.add(params, "wireframe", true).onChange(() => {
//   cuboid.material.wireframe = params.wireframe;
// })
// gui.add(params, "rotationX", -Math.PI, Math.PI).onChange((value) => {
//   cuboid.rotation.x = value;
// })
// gui.add(params, "rotationY", -Math.PI, Math.PI).onChange((value) => {
//   cuboid.rotation.y = value;
// })
// gui.add(params, "rotationZ", -Math.PI, Math.PI).onChange((value) => {
//   cuboid.rotation.z = value;
// });



// function animate() {
//   window.requestAnimationFrame(animate);

//   renderer.render(scene, camera);
// }
// renderer.setAnimationLoop(animate);




// ----------------------------------------------------------------------------------
// #12 Lights

import GUI from "lil-gui";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);

const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
directionalLight.position.set(5,2,-10);
scene.add(directionalLight)

const pointLight = new THREE.PointLight(0xffffff, 10);
pointLight.position.set(-1, -2, -3);
scene.add(pointLight);

const pointLightHelper = new THREE.PointLightHelper(pointLight, 0.5);
scene.add(pointLightHelper);



const cuboidGeometry = new THREE.BoxGeometry(1, 3, 6);
const cuboidMaterial = new THREE.MeshPhysicalMaterial({
  color: "#d80e54",
  reflectivity: 0.5,
  roughness: 0.2,
  metalness: 0.7,
});
const cuboid = new THREE.Mesh(cuboidGeometry, cuboidMaterial);
scene.add(cuboid);

camera.position.z = 8;

const canvas = document.querySelector(".world");
const renderer = new THREE.WebGLRenderer({ canvas: canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;

const gui = new GUI();

const params = {
  lightX: pointLight.position.x,
  lightY: pointLight.position.y,
  lightZ: pointLight.position.z,
  lightIntensity: pointLight.intensity,
}

gui.add(params, "lightX", -10, 10).onChange((value) => {
  pointLight.position.x = value;
})
gui.add(params, "lightY", -10, 10).onChange((value) => {
  pointLight.position.y = value;
})
gui.add(params, "lightZ", -10, 10).onChange((value) => {
  pointLight.position.z = value;
})
gui.add(params, "lightIntensity", 0, 20).onChange((value) => {
  pointLight.intensity = value;
})


function animate() {
  window.requestAnimationFrame(animate);

  renderer.render(scene, camera);
}
renderer.setAnimationLoop(animate);