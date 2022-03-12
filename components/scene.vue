<template>
  <div class="relative w-full">
    <div :id="`scene-${sceneId}`" class="pointer" :style="`height:${height}px; width:${width}px; margin:auto;`" />
    <div class="preventInteraction absolute" />
  </div>
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

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
    orbitControls: {
      type: Boolean,
      default: true
    },
    camX: {
      type: Number,
      default: 0
    },
    camY: {
      type: Number,
      default: 0
    },
    camZ: {
      type: Number,
      default: 0
    },
    models: {
      type: Array,
      required: true
    },
    geometryThresholdAngle: {
      type: Number,
      default: 1
    },
    pointsMaterial: {
      type: Boolean,
      default: false
    },
    autoRotate: {
      type: Boolean,
      default: true
    },
    pointSize: {
      type: Number,
      default: 0.5
    }
  },
  data () {
    return {

    }
  },
  mounted () {
    this.init()
    this.addClickListener()
  },
  methods: {
    addClickListener () {
      document.querySelector(`#scene-${this.sceneId} ~ .preventInteraction`).addEventListener('click', (e) => {
        e.target.remove()
      })
    },
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

        const geometry = obj.children[0].geometry
        let mesh

        if (this.pointsMaterial) {
          mesh = new THREE.Points(geometry, this.POINTS_MATERIAL)
        } else {
          const edges = new THREE.EdgesGeometry(geometry, this.geometryThresholdAngle)
          mesh = new THREE.LineSegments(edges, this.MATERIAL)
        }

        const box = new THREE.Box3().setFromObject(mesh)
        box.getCenter(mesh.position)
        mesh.position.multiplyScalar(-1)

        const pivot = new THREE.Group()
        pivot.add(mesh)

        loadedMeshes.push(pivot)
      }

      return loadedMeshes
    },
    async init () {
      this.SCENE = new THREE.Scene()
      this.OBJ_LOADER = new OBJLoader()
      this.RENDERER = new THREE.WebGLRenderer({ antialias: true, alpha: true })
      this.POINTS_MATERIAL = new THREE.PointsMaterial({ color: 0xFFFFFF, size: this.pointSize })
      this.MATERIAL = new THREE.LineBasicMaterial({
        color: 0xFFFFFF
      })
      this.CAMERA = new THREE.PerspectiveCamera(
        this.fov,
        (this.width) / (this.height),
        this.near,
        this.far
      )

      this.meshes = await this.loadMeshes()

      // container
      const container = document.getElementById(`scene-${this.sceneId}`)

      this.CAMERA.position.setX(this.camX)
      this.CAMERA.position.setY(this.camY)
      this.CAMERA.position.setZ(this.camZ)

      // camera position
      if (this.orbitControls) {
        this.CAMERA.lookAt(0, 0, 0)
        this.CONTROLS = new OrbitControls(this.CAMERA, this.RENDERER.domElement)
        this.CONTROLS.minDistance = this.camZ
        this.CONTROLS.maxDistance = this.camZ
        this.CONTROLS.autoRotate = this.autoRotate
        this.CONTROLS.update()
      }

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
      if (this.orbitControls) {
        this.CONTROLS.update()
      }

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

<style lang="scss" scoped>
.pointer{
  cursor: pointer;
  z-index: -1;
}
.preventInteraction{
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}
</style>
