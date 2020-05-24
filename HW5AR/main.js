/////////////////////////////////////////////////////////
// global variables
var camera, renderer;
var agentblue;
var agentred;

// program starts here ...
init();
animate();

function init() {

  initThree();
  
  //scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 5000);
  camera.position.z = 500;
  camera.position.y = 400;

  renderer = new THREE.WebGLRenderer();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0xffffff);

  let controls = new THREE.OrbitControls(camera, renderer.domElement);

  document.body.appendChild(renderer.domElement);

  ///////////////////////////////////////////////////////////////////// 
  // scene grid [-400,400]x[-400,400]

  var gridXZ = new THREE.GridHelper(800, 80, 0xffc914, 0xd7d9ce);
  scene.add(gridXZ);

  

  // in scene.js
  sceneFromJSON ( );  // using LevelDesigner
  
  //////////////////////////////////////////////////////////////////////////	
  	let size = 10; // halfsize of agent
//  agent = new Agent(new THREE.Vector3(-400 + 400 * Math.random(), 0, -400 + 400 * Math.random()), mesh);
    agentblack = new Agent(new THREE.Vector3(-Math.random()*200, 0, Math.random()*200), size, "BLUE", 0x003d73);
    agentwhite = new Agent(new THREE.Vector3(Math.random()*200, 0, -Math.random()*200), size, "RED", 0x8b281f);

}


function animate() {

  agentblue.update(0.01);
  agentred.update(0.01);
  
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agentblack)} );
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agentwhite)} );

  if (scene.targets.length > 0)
  	requestAnimationFrame(animate);
  else
  	alert ('game over')

  render();
}

function render() {
  renderer.render(scene, camera);
}

