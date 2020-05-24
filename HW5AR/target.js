class Target {
	constructor (id, pos) {
		this.id = id;
		this.pos = pos.clone();
		this.mesh = new THREE.Mesh (new THREE.CylinderGeometry (0.008,0.008,0.003,20), 
		    new THREE.MeshBasicMaterial ({color:0xffc914}));
		this.found = false;  // default: not found yet
		this.mesh.position.copy (pos)

		var tmp = this.mesh;
		markerRoot.add (tmp);
	}
	setFound (agent) {
		this.found = true;
		this.mesh.material.visible = false;
		postMessage (agent, 'TARGET reached');		
		
		// remove from scene.targets
		for (let i = 0; i < scene.targets.length; i++) {
			if (scene.targets[i].id === this.id) scene.targets.splice (i, 1)
		}
		
	}
	
}
