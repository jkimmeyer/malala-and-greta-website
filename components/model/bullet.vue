<script>
export default {
  name: 'Bullet',
  props: {
    mesh: {
      type: Object,
      default: null
    }
  },
  methods: {
    animate (mesh) {
      mesh.rotation.x += 0.005
      mesh.rotation.y = 0
      mesh.rotation.z = 0
    },
    getMeshPath () {
      return '/models/bullet.obj'
    },
    setInitialValues (mesh) {
      mesh.scale.set(1, 1, 1)
    }
  }
}
</script>
