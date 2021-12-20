<template>
  <div :id="`scene-${sceneId}`" :style="`height:${height}px; width:${width}px;`" />
</template>

<script>
import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

export default {
  props: {
    sceneId: String,
    height: Number,
    width: Number,
    fov: Number,
    near: Number,
    far: Number,
    camX: Number,
    camY: Number,
    camZ: Number,
    models: Array
  },
  data () {
    return {

    }
  },
  methods: {
    async loadMeshes() {
      var loadedMeshes = [];
      for(var model of this.models) {
        const obj = await this.OBJ_LOADER.loadAsync(
        model.methods.getMeshPath(),
        function (object) {
          return object;
        },
        // called when loading is in progresses
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded')
        },
        // called when loading has errors
        function (error) {
          console.log('An error happened: ' + error)
        })

        const mesh = new THREE.Points(obj.children[0].geometry, this.POINTS_MATERIAL)
        loadedMeshes.push(mesh);
      }

      return loadedMeshes;
    },
    async init() {
      this.SCENE = new THREE.Scene();
      this.OBJ_LOADER = new OBJLoader();
      this.RENDERER = new THREE.WebGLRenderer({ antialias: true });
      this.POINTS_MATERIAL = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.05 });
      this.CAMERA = new THREE.PerspectiveCamera(
        this.fov ?? 70,
        this.width ?? 200 / this.height ?? 200,
        this.near ?? 0.1,
        this.far ?? 1000
      );

      this.meshes = await this.loadMeshes();

      // container
      const container = document.getElementById(`scene-${this.sceneId}`)

      // camera position
      this.CAMERA.position.setX(this.camX ?? 0)
      this.CAMERA.position.setY(this.camY ?? -13)
      this.CAMERA.position.setZ(this.camZ ?? 25)

      // materials setzen + three.js mesh erstellen
      for(let i = 0; i < this.models.length; i++) {
        let model = this.models[i];
        let mesh = this.meshes[i];

        model.methods.setInitialValues(mesh);
        this.SCENE.add(mesh);
      }

      // render einstellungen
      this.RENDERER.setPixelRatio(window.devicePixelRatio)
      this.RENDERER.setSize(container.clientWidth, container.clientHeight)

      // container appenden
      container.appendChild(this.RENDERER.domElement)

      this.animate();
    },
    animate () {
      requestAnimationFrame(this.animate)

      if(this.meshes){

        for(let i = 0; i < this.models.length; i++) {
          let model = this.models[i];
          let mesh = this.meshes[i];

          if(mesh) {
            model.methods.animate(mesh);
            this.RENDERER.render(this.SCENE, this.CAMERA)
          }
        }
      }
    },
  },
  mounted () {
    this.init();
  }
}
</script>
