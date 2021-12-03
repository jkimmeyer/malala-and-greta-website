<template>
    <div id="nobel"></div>
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default {
  name: 'Nobel',
  data() {
    return {
    }
  },
  methods: {
    init: async function() {
        let container = document.getElementById('nobel');

        this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
        this.camera.position.setX(0);
        this.camera.position.setY(-13);
        this.camera.position.setZ(25);

        this.scene = new THREE.Scene();
        const loader = new OBJLoader();

        const obj = await loader.loadAsync(
          // resource URL
          '../assets/models/Nobel.obj',
          // called when resource is loaded
          function ( object ) {
            return object;
          },
          // called when loading is in progresses
          function ( xhr ) {

            console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

          },
          // called when loading has errors
          function ( error ) {

            console.log( 'An error happened' );

        });
        let material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.005 });
        this.mesh = new THREE.Points(obj.children[0].geometry, material);
        this.mesh.position.y = -15;
        this.mesh.scale.set( 2, 2, 2 );
        this.scene.add(this.mesh);
        

        this.renderer = new THREE.WebGLRenderer({antialias: true});
        this.renderer.setSize(container.clientWidth, container.clientHeight);
        container.appendChild(this.renderer.domElement);

    },
    animate: function() {
      requestAnimationFrame(this.animate);
      if(this.mesh){
        this.mesh.rotation.y = 0;
        this.mesh.rotation.x = 1.8;
        this.mesh.rotation.z += 0.005;
        this.renderer.render(this.scene, this.camera);
      }
    }
  },
  mounted() {
      this.init().then(this.animate());
  }
}
</script>

<style scoped>
    #nobel{
      width: 100vw;
      height: 100vh;
    }
</style>