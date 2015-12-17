/* Celine Wu
Creative Coding, Fall 2015
Homework 10 -- use THREE.js to import a 3D model (.obj, .stl, etc) and create a sketch
Interactive view:  http://codepen.io/cw1208/pen/XXdJdW/
*/

//based on CC class template, THREE.js doucumentation, and forums

//create a new scene
var scene = new THREE.Scene();
//create a new camera
var camera = new THREE.PerspectiveCamera( 60, window.innerWidth/window.innerHeight, 0.1, 1000 );
var mesh;

//create a new renderer
var renderer = new THREE.WebGLRenderer();
renderer.setClearColor(0xffffff);
renderer.setSize( window.innerWidth, window.innerHeight );
//add the renderer dom Element to our document body
document.body.appendChild( renderer.domElement );
//set the z position of our camera
camera.position.z = 50;


// prepare STL loader and load the model
var loader = new THREE.STLLoader();
var geometry;
loader.load( "D6_Hollow_1CM.STL", function ( geometry ) {
  mesh = new THREE.Mesh( geometry, material );
  scene.add( mesh );
});
var material = new THREE.MeshLambertMaterial({
  color: 0xFF66EE
  });
var directionalLight = new THREE.DirectionalLight( 0xffffff, 0.5 );
directionalLight.position.set( 0, 0, 1 );
scene.add( directionalLight );

//write your setup code here...


//this function gets called once per draw frame
//a la the draw() function in p5.js
var render = function() {
  requestAnimationFrame( render );
  renderer.render(scene, camera);
  mesh.rotation.x += 0.01;
  mesh.rotation.y += 0.01;
};

render();