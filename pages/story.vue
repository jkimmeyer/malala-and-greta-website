<template>
  <div class="chapters">
    <ChapterOne />
    <!-- <Chapter2 />
    <Chapter3 /> -->
    <ChapterFour />
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
