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
    agentblue = new Agent(new THREE.Vector3(-Math.random()*200, 0, Math.random()*200), size, "BLUE", 0x003d73);
    agentred = new Agent(new THREE.Vector3(Math.random()*200, 0, -Math.random()*200), size, "RED", 0x8b281f);

}


function animate() {

  agentblue.update(0.01);
  agentred.update(0.01);
  
  // check agent crossing obstacles ...
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agentblue)} );
  scene.obstacles.forEach ( function (obs) { obs.checkCollision (agentred)} );

  if (scene.targets.length > 0)
  	requestAnimationFrame(animate);
  else if(scene.targets.length == 0) {

    scene.targets.push (new Target (1, new THREE.Vector3 (Math.random()*400, 0, Math.random()*-400)));
    scene.targets.push (new Target (2, new THREE.Vector3 (Math.random()*-208, 0, Math.random()*247)));
    scene.targets.push (new Target (3, new THREE.Vector3 (Math.random()*408, 0, Math.random()*-374)));
    scene.targets.push (new Target (4, new THREE.Vector3 (Math.random()*-308, 0, Math.random()*176)));

    requestAnimationFrame(animate);
  }

  render();
}


function render() {
  renderer.render(scene, camera);
}

