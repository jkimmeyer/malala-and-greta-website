<template>
  <div class="play-button-component">
    <div class="circular-progress">
    <button class="play-button" @click="toggleProgress()">
      {{text}}
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayButton',
  data () {
    return {
      isPlaying: true,
      audioDuration: 200,
      text: 'Play'
    }
  },
  methods: {
    toggleProgress () {
      if (this.isPlaying) {
        this.startProgress()
        this.text = 'Pause'
        this.isPlaying = false
      } else {
        this.text = 'Play'
        this.stopProgress()
        this.isPlaying = true
      }
    },

    startProgress () {
      const progressBar = document.querySelector('.circular-progress')
      let progressStartValue = 0
      const progressEndValue = this.audioDuration

      let progress = setInterval(() => {
        progressStartValue++
        progressBar.style.background = `conic-gradient( #4d5bf9 ${progressStartValue * 3.6}deg, #cadcff ${progressStartValue * 3.6}deg)`
        if (progressStartValue === progressEndValue) {
          clearInterval(progress)
        }
      }, this.audioDuration)
    },

    stopProgress () {
      // TODO
    }
  }
}
</script>

<style>
.play-button-component {
  position: absolute;
  height: 400px;
  width: 400px;
  background-color:coral;
  display: grid;
  place-items: center;
}

.circular-progress {
  position: relative;
  height: 250px;
  width: 250px;
  background-color: orange;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.circular-progress:before {
  content: "";
  position: absolute;
  height: 84%;
  width: 84%;
  background-color: coral;
  border-radius: 50%;
}

.play-button {
  position: relative;
  color:black;
}

</style>
