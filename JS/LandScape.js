function LandScape(scene) {
    var texture = THREE.ImageUtils.loadTexture('Img/Moon_Texture.jpg', {}, function() {
    renderer.render(scene);});
    
    this.material = new THREE.MeshLambertMaterial({map: texture});
    
    this.geometry = new THREE.PlaneGeometry( 300, 300, 100, 100);
    this.plane = new THREE.Mesh( this.geometry, this.material );
    this.plane.rotateOnAxis( new THREE.Vector3(1,0,0), -Math.PI/2 );
    this.plane.receiveShadow = true;
    scene.add(this.plane);

}

LandScape.prototype.getHeightInArea = function ( x, z ) {
    return 0;
}
