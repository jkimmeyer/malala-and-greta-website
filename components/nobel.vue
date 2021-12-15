<template>
  <div class="nobelWrapper">
    <div id="nobel" class="nobel" />
  </div>
</template>

<script>
import * as THREE from 'three'
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'

export default {
  name: 'Nobel',
  data () {
    return {
      startPosY: -5
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

      this.camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.1, 1000)
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
      this.mesh.position.x = this.startPosY + 0.1 * percent
    }
  }
}
</script>

<style scoped>
.nobelWrapper{
  width: 100vw;
  height: 300vh;
}

.nobel{
  position: fixed;
  width: 100vw;
  height: 100vh;
}
</style>
