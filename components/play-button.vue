<template>
  <div class="play-button-component">
    <div class="circular-progress" :class="isGreta ? 'greta' : 'malala'">
      <div class="inner-circular-progress">
        <Icon class="play-button" :class="isGreta ? 'greta' : 'malala'" :icon="iconName" @click="toggleProgress()" />
      </div>
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
      backgroundColor: '',
      hightlightColor: '',
      interval: null,
      progress: 0,
      audioPlayer: null,
      iconName: 'play'
    }
  },
  mounted () {
    if (this.isGreta) {
      this.backgroundColor = '#D4DFEB'
      this.hightlightColor = '#92BAE4'
    } else {
      this.backgroundColor = '#E9DCC7'
      this.hightlightColor = '#E1BC84'
    }
  },
  methods: {
    toggleProgress () {
      console.log('whatever')
      if (this.isPlaying) {
        if (typeof Audio !== 'undefined') {
          this.startProgress()
          this.audioPlayer.play()
          this.iconName = 'pause'
          this.isPlaying = false
        }
      } else {
        this.iconName = 'play'
        this.stopProgress()
        this.audioPlayer.pause()
        this.isPlaying = true
      }
    },

    startProgress () {
      this.audioPlayer = new Audio(this.audioFile)
      const progressBar = document.querySelector('.circular-progress')
      this.audioDuration = this.audioPlayer.duration * 10
      const progressEndValue = this.audioDuration

      console.log(this.backgroundColor)

      this.interval = setInterval(() => {
        this.progress++
        progressBar.style.background = `conic-gradient( ${
          this.backgroundColor
        } ${this.progress * 3.6}deg, ${this.hightlightColor} ${
          this.progress * 3.6
        }deg)`
        if (this.progress === progressEndValue) {
          this.iconName = 'play'
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
  display: grid;
  position: absolute;
  width: 150px;
  height: 150px;
  place-items: center;
}

.circular-progress {
  display: grid;
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  place-items: center;
}

.circular-progress.greta {
  background-color: #d4dfeb;
}

.circular-progress.malala {
  background-color: #e9dcc7;
}

.inner-circular-progress {
  display: grid;
  position: absolute;
  width: 84%;
  height: 84%;
  border-radius: 50%;
  background-color: white;
  place-items: center;
}

.play-button.greta {
  font-size: 30px;
  color: #d4dfeb;
}

.play-button.malala {
  font-size: 30px;
  color: #e9dcc7;
}
</style>
