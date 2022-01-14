<template>
  <div :id="`scene-${sceneId}`" :style="`height:${height}px; width:${width}px;`" />
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default {
  props: {
    sceneId: {
      type: String,
      required: true
    },
    height: {
      type: Number,
      default: 400
    },
    width: {
      type: Number,
      default: 400
    },
    fov: {
      type: Number,
      default: 70
    },
    near: {
      type: Number,
      default: 0.1
    },
    far: {
      type: Number,
      default: 1000
    },
    camX: {
      type: Number,
      default: 0
    },
    camY: {
      type: Number,
      default: -13
    },
    camZ: {
      type: Number,
      default: 25
    },
    models: {
      type: Array,
      required: true
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.init()
  },
  methods: {
    async loadMeshes () {
      const loadedMeshes = []
      for (const model of this.models) {
        const obj = await this.OBJ_LOADER.loadAsync(
          model.methods.getMeshPath(),
          function (object) {
            return object
          },
          // called when loading is in progresses
          function (xhr) {
            // eslint-disable-next-line no-console
            console.log((xhr.loaded / xhr.total * 100) + '% loaded')
          },
          // called when loading has errors
          function (error) {
            // eslint-disable-next-line no-console
            console.log('An error happened: ' + error)
          })

        const mesh = new THREE.Points(obj.children[0].geometry, this.POINTS_MATERIAL)
        loadedMeshes.push(mesh)
      }

      return loadedMeshes
    },
    async init () {
      this.SCENE = new THREE.Scene()
      this.OBJ_LOADER = new OBJLoader()
      this.RENDERER = new THREE.WebGLRenderer({ antialias: true })
      this.POINTS_MATERIAL = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.05 })
      this.CAMERA = new THREE.PerspectiveCamera(
        this.fov,
        (this.width) / (this.height),
        this.near,
        this.far
      )

      this.meshes = await this.loadMeshes()

      // container
      const container = document.getElementById(`scene-${this.sceneId}`)

      // camera position
      this.CAMERA.position.setX(this.camX)
      this.CAMERA.position.setY(this.camY)
      this.CAMERA.position.setZ(this.camZ)

      // materials setzen + three.js mesh erstellen
      for (let i = 0; i < this.models.length; i++) {
        const model = this.models[i]
        const mesh = this.meshes[i]

        model.methods.setInitialValues(mesh)
        this.SCENE.add(mesh)
      }

      // render einstellungen
      this.RENDERER.setPixelRatio(window.devicePixelRatio)
      this.RENDERER.setSize(container.clientWidth, container.clientHeight)

      // container appenden
      container.appendChild(this.RENDERER.domElement)

      this.animate()
    },
    animate () {
      requestAnimationFrame(this.animate)

      if (this.meshes) {
        for (let i = 0; i < this.models.length; i++) {
          const model = this.models[i]
          const mesh = this.meshes[i]

          if (mesh) {
            model.methods.animate(mesh)
            this.RENDERER.render(this.SCENE, this.CAMERA)
          }
        }
      }
    }
  }
}
</script>
