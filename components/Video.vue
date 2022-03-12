<template>
  <div class="video">
    <video class="video--element" loop autoplay muted>
      <source
        :src="path"
        type="video/mp4"
      >
      Sorry, your browser doesn't support embedded videos.
    </video>
    <img v-if="decoration" class="video-corner-image" :src="decoration">
  </div>
</template>
<script>
export default {
  props: {
    path: {
      type: String,
      required: true
    },
    decoration: {
      type: String,
      required: false,
      default: ''
    }
  }
}
</script>
<style scoped>
.video {
  position: relative;
}

.video--element {
  display: block;
  overflow: hidden;
  width: 100%;
  height: 100%;
  border-radius: 20px;
  object-fit: contain;
}

.video-corner-image {
  position: absolute;
  top: 0;
  right: 0;
  width: 100px;
  height: 100px;
  transform: translateX(50%) translateY(-50%) rotate(20deg);
}
</style>
