<template>
  <div class="page">
    <Malala />
    <Greta />
  </div>
</template>

<script>
export default {
  props: {
    propertyName: String
  }
}
</script>

<style>
.page {
  position: relative;
  width: 100vh;
  height: 100vh;
}
</style>
