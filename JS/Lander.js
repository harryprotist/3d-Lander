var Lander = function(ground, scene, camera, keys) {

	this.GRAVITY = -0.1;

	this.geometry = new THREE.BoxGeometry(6, 5, 6);
	this.material = new THREE.MeshLambertMaterial({color: 0xffffff});
	this.object = new THREE.Mesh(this.geometry, this.material);
	scene.add(this.object);

	this.camera = camera;
	this.keys = keys;
	this.ground = ground;

	this.object.position.y = 10;
	this.camera.position.y = 20;
	this.camera.position.z = 10;
	this.camera.rotation.x = -Math.PI / 4;

	this.vx = 0.0;
	this.vy = 0.0;
	this.vz = 0.0;
	
	this.rx = 0.0;
	this.ry = 0.0;
	this.rz = 0.0;
}

Lander.prototype.applyForce = function(x, y, z) {
	
	this.vx += x;
	this.vy += y;
	this.vz += z;
}
Lander.prototype.applyRot = function(x, y, z) {
	
	this.rx += x;
	this.ry += y;
	this.rz += z;
}

Lander.prototype.move = function(dt) {
	
	var lander = this;
	[ lander.object, lander.camera ].forEach(function(elem, i, arr) {

		elem.position.x += lander.vx * dt;	
		elem.position.y += lander.vy * dt;	
		elem.position.z += lander.vz * dt;

	});
	this.object.rotation.x += this.rx * dt;	
	this.object.rotation.y += this.ry * dt;	
	this.object.rotation.z += this.rz * dt;	
}

/* keycodes */
var W = 87;
var A = 65;
var S = 83;
var D = 68;
var SPACE = 32;

Lander.prototype.update = function(dt) {

	if (isNaN(dt)) return;

	if (this.keys[W]) this.applyRot(0.1 * dt, 0, 0);	
	if (this.keys[A]) this.applyRot(0, 0, 0.1 * dt);	
	if (this.keys[S]) this.applyRot(-0.1 * dt, 0, 0);	
	if (this.keys[D]) this.applyRot(0, 0, -0.1 * dt);	

	if (this.object.position.y < this.ground.getHeightInArea(this.object.position.x, this.object.position.z)) return;
	
	this.applyForce(0, this.GRAVITY * dt, 0);
	this.move(dt);
}
