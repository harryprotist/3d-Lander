var Lander = function(scene, camera) {

	this.GRAVITY = -0.1;

	this.geometry = new THREE.BoxGeometry(6, 5, 6);
	this.material = new THREE.MeshLambertMaterial({"color": "#ffffff"});
	this.object = new THREE.Mesh(geometry, material);

	this.camera = camera;

	this.vx = 0;
	this.vy = 0;
	this.vz = 0;

	scene.add(this.object);
}

Lander.prototype.applyForce = function(x, y, z) {
	
	this.vx += x;
	this.vy += y;
	this.vz += z;
}
Lander.prototype.move = function(dt) {
	
	[ this.object.position, this.camera.position ].forEach(function(elem, i, arr) {
		elem.x += this.vx * dt;	
		elem.y += this.vy * dt;	
		elem.z += this.vz * dt;	
	});
}

Lander.prototype.update = function(dt) {
	
	this.applyForce(0, this.GRAVITY, 0);
}
