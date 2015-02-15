function LandScape(scene) {
    this.geometry = new THREE.PlaneGeometry( 50, 50, 100, 100);
    this.material = new THREE.MeshLambertMaterial({color: 0xff0000, wireframe: false});
    this.plane = new THREE.Mesh( this.geometry, this.material );
    this.plane.rotateOnAxis( new THREE.Vector3(1,0,0), -Math.PI/2 );
    this.plane.receiveShadow = true;
    scene.add(this.plane);
    
}

LandScape.prototype.getHeightInArea = function ( x, z ) {
    return 0;
}
