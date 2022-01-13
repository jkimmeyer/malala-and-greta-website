<script>

export default {
  props: {
    mesh: null
  },
  data () {
    return {
    }
  },
  methods: {
    animate (mesh) {
      mesh.rotation.y = 0
      mesh.rotation.x = 1.8
      mesh.rotation.z += 0.005
    },
    getMeshPath () {
      return '../assets/models/Nobel.obj'
    },
    setInitialValues (mesh) {
      mesh.position.y = -15
      mesh.position.x = -5
      mesh.scale.set(1, 1, 1)
    }
  }
}
</script>
