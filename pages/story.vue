<template>
  <div class="chapters">
    <Chapter1 />
    <!-- <Chapter2 />
    <Chapter3 /> -->
    <Chapter4 />
    <Chapter1 />
    <!-- <Chapter5 /> -->
  </div>
</template>
<script>
export default {
  layout: 'chapter'
}
</script>

<style scoped>
.chapters {
  scroll-snap-type: y mandatory;
}
</style>
