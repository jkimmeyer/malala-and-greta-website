<script>

export default {
  props: {
    mesh: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    animate () {
      // mesh.rotation.y += 0.005
      // mesh.rotation.x += 0.005
      // mesh.rotation.z += 0.005
    },
    getMeshPath () {
      return '/models/Pakistan.obj'
    },
    setInitialValues (mesh) {
      mesh.position.y = 2
      mesh.position.x = 0

      mesh.rotation.x = 1
      mesh.rotation.y = -0.1
      mesh.rotation.z = 0
      mesh.scale.set(0.7, 0.7, 0.7)
    }
  }
}
</script>
