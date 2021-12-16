<template>
  <nobel
    v-if="modelName === 'nobel'"
    :settings="{
      height: canvasHeight,
      width: canvasWidth,
    }"
  />
</template>

<script>
import nobel from './nobel.vue'

export default {
  components: { nobel },
  props: {
    modelName: String,
    height: Number,
    width: Number,
  },
  data () {
    return {
      canvasHeight: this.height != null ? this.height : 200,
      canvasWidth: this.width != null ? this.width : 200,
      }
  }
}
</script>

<style scoped>

</style>
