<template>
  <div class="circular-button">
    {{ progress }}
    <svg
      id="svg"
      width="100"
      height="100"
      viewport="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        pathLength="100"
        r="45"
        cx="50"
        cy="50"
        fill="transparent"
        stroke-dasharray="100"
        stroke-dashoffset="0"
      />
      <circle
        id="bar"
        pathLength="100"
        r="45"
        cx="50"
        cy="50"
        fill="transparent"
        stroke-dasharray="100"
        stroke-dashoffset="90"
      />
    </svg>

    <!-- <div class="circular-button--inner">
      <div class="inner">
        <slot />
      </div>
    </div> -->
    <!-- :style="{strokeDashoffset: progressStyle}" -->
  </div>
</template>
<script>
export default {
  props: {
    progress: {
      type: Number,
      required: true
    }
  },
  computed: {
    progressStyle () {
      return {
        strokeDashoffset: this.progress
      }
    },
    progressDeg () {
      console.log('progressDeg' + this.progress)
      return this.progress * 360 + 'deg'
    },
    styleObject () {
      return {
        background: `conic-gradient(red ${this.progressDeg}, rgba(0, 0, 0, 0) ${this.progressDeg})`
      }
    }
  }
}
</script>
<style scoped>
#svg circle {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: #666;
  stroke-width: 5px;
}

#svg #bar {
  stroke: #ff9f1e;
}

.circular-button {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 100px;
  border-radius: 50%;
}

.inner {
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background-color: var(--color-background-malala);
}
</style>
