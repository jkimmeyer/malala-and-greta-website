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
    isGreta: Boolean
  },
  data () {
    return {
      isPlaying: true,
      audioDuration: 200,
      text: 'Play',
      backgroundColor: '#4d5bf9',
      hightlightColor: '#cadcff',
      interval: null,
      progress: 0
    }
  },
  mounted () {
    if (isGreta) {
        // TODO
    } else {
        // TODO
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
      const progressEndValue = this.audioDuration

      this.interval = setInterval(() => {
        this.progress++
        progressBar.style.background = `conic-gradient( ${this.backgroundColor} ${this.progress * 3.6}deg, ${this.hightlightColor} ${this.progress * 3.6}deg)`
        if (this.progress === progressEndValue) {
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
  height: 400px;
  width: 400px;
  display: grid;
  place-items: center;
}

.circular-progress {
  position: relative;
  height: 250px;
  width: 250px;
  border-radius: 50%;
  display: grid;
  place-items: center;
}

.circular-progress.greta {
  background-color: blueviolet;
}

.circular-progress.malala {
  background-color: black;
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
