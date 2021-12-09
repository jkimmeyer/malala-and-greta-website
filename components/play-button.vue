<template>
  <div class="play-button-component">
    <div class="circular-progress" :class="isGreta ? 'greta' : 'malala'">
    <button class="play-button" @click="toggleProgress()">
      {{text}}
    </button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PlayButton',
  props: {
    isGreta: {
      type: Boolean,
      default: true
    },
    audioFile: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isPlaying: true,
      audioDuration: 200,
      text: 'Play',
      backgroundColor: '',
      hightlightColor: '',
      interval: null,
      progress: 0,
      audioPlayer: new Audio(this.audioFile)
    }
  },
  mounted () {
    if (isGreta) {
      this.backgroundColor = '#D4DFEB'
      this.hightlightColor = '#92BAE4'
    } else {
      this.backgroundColor = '#E9DCC7'
      this.hightlightColor = '#E1BC84'
    }
  },
  methods: {
    toggleProgress () {
      if (this.isPlaying) {
        if (typeof Audio !== 'undefined') {
          this.startProgress()
          this.audioPlayer.play()
          this.text = 'Pause'
          this.isPlaying = false
        }
      } else {
        this.text = 'Play'
        this.stopProgress()
        this.audioPlayer.pause()
        this.isPlaying = true
      }
    },

    startProgress () {
      const progressBar = document.querySelector('.circular-progress')
      this.audioDuration = this.audioPlayer.duration * 10
      const progressEndValue = this.audioDuration

      console.log(this.backgroundColor)

      this.interval = setInterval(() => {
        this.progress++
        progressBar.style.background = `conic-gradient( ${this.backgroundColor} ${this.progress * 3.6}deg, ${this.hightlightColor} ${this.progress * 3.6}deg)`
        if (this.progress === progressEndValue) {
          this.text = 'Play'
          clearInterval(this.interval)
        }
      }, this.audioDuration)
    },

    stopProgress () {
      clearInterval(this.interval)
    }
  }
}
</script>

<style>
.play-button-component {
  position: absolute;
  height: 150px;
  width: 150px;
  display: grid;
  place-items: center;
}

.circular-progress {
  position: relative;
  height: 100px;
  width: 100px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.circular-progress.greta {
  background-color: #D4DFEB;
}

.circular-progress.malala {
  background-color: #E9DCC7;
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
