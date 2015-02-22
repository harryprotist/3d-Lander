var WIDTH = 1280;
var HEIGHT = 720;

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
renderer.shadowMapEnabled = true;


function init () {
    var spotLight = new THREE.SpotLight( 0xffffff, 1, 1500);
    spotLight.position.set( 50, 150, 50 );
    spotLight.angle = 20 * Math.PI / 180;
	spotLight.exponent = 1;
    spotLight.castShadow = true;
    spotLight.shadowDarkness = 1;
    spotLight.onlyShadow = true;
    spotLight.target.position.set( 10, 10, 10 );
    
    spotLight.shadowMapWidth = 1024;
    spotLight.shadowMapHeight = 1024;

    spotLight.shadowCameraNear = 10;
    spotLight.shadowCameraFar = 4000;
    spotLight.shadowCameraFov = 120;
    
    var light = new THREE.PointLight( 0xffffff, 1.7, 500);
    light.position.set( 50, 150, 50);
    
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(30, WIDTH/HEIGHT, .1, 1500 );
    camera.position.z = 5;
    scene.add( light );
    scene.add( spotLight );
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
    document.getElementById("CANVAS").appendChild( renderer.domElement );
    init();
    main();
}
