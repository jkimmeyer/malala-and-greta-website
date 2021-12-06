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
      text: 'Play',
      backgroundColor: '#4d5bf9',
      hightlightColor: '#cadcff'
    }
  },
  methods: {
    onLoad () {
      // set colors according to style theme
    },

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
        progressBar.style.background = `conic-gradient( ${this.backgroundColor} ${progressStartValue * 3.6}deg, ${this.hightlightColor} ${progressStartValue * 3.6}deg)`
        if (progressStartValue === progressEndValue) {
          clearInterval(progress)
        }
      }, this.audioDuration)
    },

    stopProgress () {
      // clearInterval(this.progress)
    }
  }
}
</script>

<style>
.play-button-component {
  position: absolute;
  height: 400px;
  width: 400px;
  display: grid;
  place-items: center;
}

.circular-progress {
  position: relative;
  height: 250px;
  width: 250px;
  background-color: #4d5bf9;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.circular-progress:before {
  content: "";
  position: absolute;
  height: 84%;
  width: 84%;
  background-color: white;
  border-radius: 50%;
}

.play-button {
  position: relative;
  color:black;
}

</style>
