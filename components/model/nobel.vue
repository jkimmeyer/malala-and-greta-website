<script>
export default {
  name: 'Nobel',
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
      return '/models/nobelprice-2.obj'
    },
    setInitialValues (mesh) {
      mesh.position.y = 0
      mesh.position.x = 0
      mesh.scale.set(1, 1, 1)
    }
  }
}
</script>
