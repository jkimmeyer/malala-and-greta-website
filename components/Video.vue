<template>
  <div>
    <video class="video" loop autoplay muted>
      <source
        :src="path"
        type="video/mp4"
      >
      Sorry, your browser doesn't support embedded videos.
    </video>
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
<style scoped>
.video {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
}
</style>
