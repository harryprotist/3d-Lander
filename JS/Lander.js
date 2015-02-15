var Lander = function(ground, scene, camera, keys) {

	this.side = 4;
	this.height = 3;

	this.GRAVITY = -1;

	this.geometry = new THREE.BoxGeometry(this.side, this.height, this.side);
	this.material = new THREE.MeshLambertMaterial({color: 0xffffff, wireframe: false});
	this.object = new THREE.Mesh(this.geometry, this.material);
    this.object.castShadow = true;
	scene.add(this.object);

	this.camera = camera;
	this.keys = keys;
	this.ground = ground;

	this.object.position.y = 30;
	this.camera.position.y = 300;
	this.camera.position.z = 400;
    this.camera.position.x = 150;
    this.camera.lookAt(this.object.position);
    
	this.vx = 0.0;
	this.vy = 0.0;
	this.vz = 0.0;
	
	this.rx = 0.0;
	this.ry = 0.0;
	this.rz = 0.0;
	
	this.thrust = 0.0;
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

	if (this.keys[W]) this.applyRot(0.3 * dt, 0, 0);	
	if (this.keys[A]) this.applyRot(0, 0, 0.3 * dt);	
	if (this.keys[S]) this.applyRot(-0.3 * dt, 0, 0);	
	if (this.keys[D]) this.applyRot(0, 0, -0.3 * dt);	

	if (this.keys[SPACE]) this.thrust = 2;
	else this.thrust = 0;

	if (this.object.position.y < this.ground.getHeightInArea(this.object.position.x, this.object.position.z)) return;
	
	this.applyForce(0, this.GRAVITY * dt, 0);
	this.applyForce(
		-this.thrust * Math.sin(this.object.rotation.z) * dt, 
		 this.thrust * Math.cos(this.object.rotation.z) * dt,
		 this.thrust * Math.sin(this.object.rotation.x) * dt
	);
	this.move(dt);
}
