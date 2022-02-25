<template>
  <div>
    <!-- <model-loader modelName="nobel" :height=500 :width=500 :animation=animationFunction /> -->
    <Scene
      scene-id="EINS"
      :height="1000"
      :width="1000"
      :fov="70"
      :near="0.1"
      :far="1000"
      :models="models"
    />
  </div>
</template>

<script>
import Nobel from '@/components/Nobel.vue'

export default {
  data () {
    return {
      models: [Nobel]
    }
  }
}
</script>
