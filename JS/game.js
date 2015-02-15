var WIDTH = 640;
var HEIGHT = 480;

var scene;
var camera;

var lander;
var landScape;

var now;
var last;

var KEYS = new Array(256);
var pause = false;
var P = 80;
document.addEventListener("keydown", function (e) {
    KEYS[e.keyCode] = true;
    if (e.keyCode == P) pause = !pause;
});

document.addEventListener("keyup", function (e) {
    KEYS[e.keyCode] = false;
});

var renderer = new THREE.WebGLRenderer();
renderer.setSize( WIDTH, HEIGHT);


function init () {
    var light = new THREE.PointLight( 0xffffff, 1, 200);
    light.position.set( -50, 50, 50 );
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, .1, 1000);
    camera.position.z = 5;
    scene.add( light );
/*	var geometry = new THREE.BoxGeometry(6, 5, 6);
	var material = new THREE.MeshBasicMaterial({color: 0xffffff});
	var object = new THREE.Mesh(geometry, material);
	scene.add(object);*/
    landScape = new LandScape(scene);
    lander = new Lander( landScape, scene, camera, KEYS );
}

function main() {
    now = Date.now();
    dt = (now-last) / 1000;
    last = Date.now();



    if (pause === false) {

	    lander.update(dt);
    }

    requestAnimationFrame( main );
	renderer.render( scene, camera );
}

window.onload = function () {
    document.getElementById("CANVAS").appendChild( renderer.domElement);
    init();
    main();
}
