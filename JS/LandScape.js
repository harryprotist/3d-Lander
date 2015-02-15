function LandScape(scene) {
    this.loader = new THREE.TextureLoader();
    this.loader.load(
        encodeURI('Img/Moon_Texture.jpg'), 
        function (texture){
            this.material = new THREE.MeshBasicMaterial({
                map: texture
            });},
        function ( xhr ) {
		  console.log( (xhr.loaded / xhr.total * 100) + '% loaded' );},
        function ( xhr ) {
		  console.log( 'An error happened' );
        }
    );
    
    
    this.geometry = new THREE.PlaneGeometry( 300, 300, 100, 100);
    this.plane = new THREE.Mesh( this.geometry, this.material );
    this.plane.rotateOnAxis( new THREE.Vector3(1,0,0), -Math.PI/2 );
    this.plane.receiveShadow = true;
    scene.add(this.plane);

}

LandScape.prototype.getHeightInArea = function ( x, z ) {
    return 0;
}
