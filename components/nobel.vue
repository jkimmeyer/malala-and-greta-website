<template>
  <div id="nobel" :style="'height:'+settings.height+'px; width:'+settings.width+'px;'" />
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default {
  props: {
    settings: Object
  },
  data () {
    return {

    }
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
    this.init().then(this.animate())
  },
  methods: {
    async init () {
      const container = document.getElementById('nobel')

      this.camera = new THREE.PerspectiveCamera(70, this.settings.width / this.settings.height, 0.1, 1000)
      this.camera.position.setX(0)
      this.camera.position.setY(-13)
      this.camera.position.setZ(25)

      this.scene = new THREE.Scene()
      const loader = new OBJLoader()

      const obj = await loader.loadAsync(
        // resource URL
        '../assets/models/Nobel.obj',
        // called when resource is loaded
        function (object) {
          return object
        },
        // called when loading is in progresses
        function (xhr) {
          console.log((xhr.loaded / xhr.total * 100) + '% loaded')
        },
        // called when loading has errors
        function (error) {
          console.log('An error happened: ' + error)
        })
      const material = new THREE.PointsMaterial({ color: 0xFFFFFF, size: 0.05 })
      this.mesh = new THREE.Points(obj.children[0].geometry, material)
      this.mesh.position.y = -15
      this.mesh.position.x = -5
      this.mesh.scale.set(2, 2, 2)
      this.scene.add(this.mesh)

      this.renderer = new THREE.WebGLRenderer({ antialias: true })
      this.renderer.setPixelRatio(window.devicePixelRatio)
      this.renderer.setSize(container.clientWidth, container.clientHeight)
      container.appendChild(this.renderer.domElement)
    },
    animate () {
      requestAnimationFrame(this.animate)
      if (this.mesh) {
        this.mesh.rotation.y = 0
        this.mesh.rotation.x = 1.8
        this.mesh.rotation.z += 0.005
        this.renderer.render(this.scene, this.camera)
      }
    },
    handleScroll () {
      const h = document.documentElement
      const b = document.body
      const st = 'scrollTop'
      const sh = 'scrollHeight'

      const percent = (h[st] || b[st]) / ((h[sh] || b[sh]) - h.clientHeight) * 100
      this.mesh.position.x = 0.1 * percent
    }
  }
}
</script>

<style scoped>

</style>
