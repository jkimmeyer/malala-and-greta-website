<template>
  <div class="video-wrapper" :class="isGreta ? 'greta' : 'malala'">
    <video :width="videoWidth" :height="videoHeight" autoplay muted loop>
      <source :src="videoUrl" type="video/mp4" />
    </video>
  </div>
</template>

<script>
export default {
  name: "VideoPlayer",
  props: {
    isGreta: {
      type: Boolean,
      default: true
    },
    videoUrl: {
      type: String,
      default: ""
    },
    videoWidth: {
      type: Number,
      default: 200
    },
    videoHeight: {
      type: Number,
      default: 200
    }
  },
  mounted() {
    document.querySelector(
      ".video-wrapper"
    ).style.width = `${this.videoWidth}px`
    document.querySelector(
      ".video-wrapper"
    ).style.height = `${this.videoHeight}px`
  }
}
</script>

<style>
.video-wrapper {
  display: grid;
  margin: 10px;
  border-radius: 10%;
  place-items: center;
}

.video-wrapper.greta {
  background-color: lightblue;
}

.video-wrapper.malala {
  background-color: beige;
}

video {
  border-radius: 15%;
  padding: 15px;
}
</style>
