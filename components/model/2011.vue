<script>
export default {
  name: '2011',
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
      return '/models/2011_lettering.obj'
    },
    setInitialValues (mesh) {
      mesh.scale.set(1, 1, 1)
    }
  }
}
</script>
