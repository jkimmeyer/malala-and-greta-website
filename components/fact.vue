<template>
  <div :class="'fact-container '+postData.size+' '+postData.theme">
    <h3>{{postData.fact.headline}}</h3>
    <!-- eslint-disable vue/require-v-for-key -->
    <p v-for="paragraph in postData.fact.paragraphs">
      {{paragraph}}
    </p>
    <!-- eslint-enable -->
    <p>Quelle: {{postData.fact.source}}</p>
  </div>
</template>

<script>

export default{
  props: {
    postData: Object
  },
}
</script>

<style lang="scss" scoped>
.fact-container{
  min-width: 256px;

  &.sm{
    max-width: 256px;
  }

  &.lg{
    max-width: 512px;
  }

  &.greta{

  }
  &.malala{

  }
}
</style>
