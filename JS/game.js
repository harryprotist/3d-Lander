var WIDTH = 640;
var HEIGHT = 480;

var scene = new THREE.Scene();
var camera =  new THREE.PerspectiveCamera(75, WIDTH/HEIGHT, .1, 1000);

var renderer = new THREE.WebGLRenderer();
renderer.setSize( WIDTH, HEIGHT);

window.onload = function () {
    document.body.appendChild( renderer.domElement);
}