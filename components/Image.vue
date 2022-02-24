<template>
  <div class="image">
    <img :src="path">
    <div class="corner" />
  </div>
</template>

<script>

export default {
  props: {
    path: {
      type: String,
      required: true
    }
  }
}
</script>
<style>
.corner {
  width: 10px;
  height: 10px;
  background-color: red;
}
</style>
