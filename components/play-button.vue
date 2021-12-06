<template>
  <div class="play-button-component">
    <div class="loader" />
    <button class="play-button">
      <!--<fa icon="play" />-->
    </button>
  </div>
</template>

<script>

export default {
  name: 'PlayButton',
  data () {
    return {
      isPlaying: false,
      audioDuration: 0
    }
  },
  methods: {
    animateProgress () {
      // TODO
    }
  }
}
</script>

<style>
.play-button-component {
  position: relative;
}

.play-button {
  background-color: var(--color-secondary);
  box-sizing: border-box;
  width: 100px;
  height: 100px;
  padding-top: 14px;
  padding-left: 8px;
  line-height: 20px;
  border: 6px solid #fff;
  border-radius: 50%;
  color: #f5f5f5;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
  transition: all 0.3s ease;
  position: absolute;
  z-index: 3;
}
.play-button:hover {
  background-color: var(--color-primary);
  box-shadow: 0px 0px 10px rgba(255, 255, 100, 1);
  text-shadow: 0px 0px 10px rgba(255, 255, 100, 1);
}
.triangle {
  width: 0px;
  height: 0px;
  -webkit-transform: rotate(360deg);
  border-style: solid;
  border-width: 30px 0 30px 66.6px;
  border-color: transparent transparent transparent #2f5e55;
  position: relative;
  top: 25%;
  width: 50%;
  height: 50%;
  margin: auto;
}

.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #3498db; /* Blue */
  border-radius: 50%;
  width: 120px;
  height: 120px;
  position: absolute;
  z-index: 0;
}

@-webkit-keyframes spin {
  0% {
    -webkit-transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
  }
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
