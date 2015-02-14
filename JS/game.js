var WIDTH = 640;
var HEIGHT = 480;

var scene = new THREE.Scene();
var camera =  new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, .1, 1000);

var lander;
var landScape;

var renderer = new THREE.WebGLRenderer();
renderer.setSize( WIDTH, HEIGHT);

window.onload = function () {
    document.body.appendChild( renderer.domElement);
    render();
}

function main () {
    lander.update();
    render();
}

function init () {
    lander = new Lander( scene, camera );
    landScape = new LandScape(scene);
}

function render() {
    requestAnimationFrame( render );
	renderer.render( scene, camera );
}
