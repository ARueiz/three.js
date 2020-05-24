/*
function sceneDesign() {

  // add obstacles to the scene
  scene.obstacles = [];
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(150,0,150), 50) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(-100,0,200), 30) )
  scene.obstacles.push ( new Obstacle (new THREE.Vector3(0,0,-100), 60) )
    
  scene.targets = [];
  scene.targets.push (new Target (1, new THREE.Vector3 (300,0,300) ));
  scene.targets.push (new Target (2, new THREE.Vector3 (-200,0,150) ));
  scene.targets.push (new Target (3, new THREE.Vector3 (250,0,-200) ));
  scene.targets.push (new Target (4, new THREE.Vector3 (0,0,-200) ));

}
*/

function sceneFromJSON () {
  const JSONStr = 
  '{"obstacles":[{"center":{"x":0.20952434509802094,  "y":-0.01584297207979961e-14,  "z":0.0713504031550267},   "size":0.04},\
                 {"center":{"x":0.0039594796502145093,"y":0.0055165438176416846e-14, "z":0.26355695318495896},  "size":0.04},\
                 {"center":{"x":0.00542098955335508,  "y":0.0035646388308083605e-14, "z":-0.16053706110138933}, "size":0.04},\
                 {"center":{"x":-0.20814531121285557, "y":-0.001780298028666322e-14, "z":0.08017749538510077},  "size":0.04},\
                 {"center":{"x":0.006152290480954046, "y":-0.0016335404928678994e-14,"z":0.07356812354974488},  "size":0.04}],\
  "targets":[{"id":0,"pos":{"x":-0.17096098270075498,"y":0.0014072922348060594e-13, "z":-0.12178807842739616}},\
             {"id":1,"pos":{"x":0.1738093284377129,  "y":0.003632627064004123e-14,  "z":-0.1635989789182495}},\
             {"id":2,"pos":{"x":0.2481273914134486,  "y":0.005516543817640233e-14,  "z":0.2635569531850243}},\
             {"id":3,"pos":{"x":-0.23781629357811414,"y":0.0051244638502615395e-14, "z":0.28121466513488554}}]}';
  
  let myScene = JSON.parse (JSONStr);
  
  scene.obstacles = []
  myScene.obstacles.forEach (function (obs) {
  	scene.obstacles.push (new Obstacle (new THREE.Vector3 (obs.center.x, obs.center.y, obs.center.z), 30))
  })
  
  scene.targets = []
  myScene.targets.forEach (function (tt) {
  	scene.targets.push (new Target (tt.id, new THREE.Vector3 (tt.pos.x, tt.pos.y, tt.pos.z) ))
  })

}