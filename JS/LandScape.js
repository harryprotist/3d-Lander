function LandScape() {
    this.geometry = new THREE.PlaneGeometry( 100, 100);
    this.material = new THREE.MeshLambertMaterial("#888888");
    this.plane = new THREE.Mesh( this.geometry, this.material );
    this.plane.rotateOnAxis( new THREE.Vector3(1,0,0), Math.PI/2 );
}

LandScape.prototype.getHeightInArea = function ( x, z ) {
    return 0;
}
