function LandScape() {
    this.geometry = new THREE.PlaneGeometry( 100, 100);
    this.material = new THREE.MeshLambertMaterial("#888888");
    this.plane = new THREE.Mesh(geometry, material);
}

function getHeightInArea( x, z ){
    return 0;
}
