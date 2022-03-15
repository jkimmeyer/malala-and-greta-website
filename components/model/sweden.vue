<script>
export default {
  name: 'Sweden',
  props: {
    mesh: {
      type: Object,
      default: null
    }
  },
  methods: {
    animate (mesh) {
      mesh.rotation.y = 0
      mesh.rotation.x = 0
      mesh.rotation.z = 0
    },
    getMeshPath () {
      return '/models/sweden_with_marker.obj'
    },
    setInitialValues (mesh) {
      mesh.scale.set(0.1, 0.1, 0.1)
    }
  }
}
</script>
