<template>
  <div class="circular-progress-bar">
    <svg
      width="100"
      height="100"
      viewport="0 0 100 100"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="circular-progress-bar--background"
        pathLength="100"
        r="45"
        cx="50"
        cy="50"
        fill="transparent"
        stroke-dasharray="100"
        stroke-dashoffset="0"
      />
      <circle
        class="circular-progress-bar--indicator"
        pathLength="100"
        r="45"
        cx="50"
        cy="50"
        fill="transparent"
        stroke-dasharray="100"
        stroke-dashoffset="0"
        transform="rotate(-90 50 50)"
        :style="progressStyle"
      />
    </svg>
    <div class="circular-progress-bar--center">
      <slot />
    </div>
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
        strokeDashoffset: 100 - this.progress
      }
    }
  }
}
</script>
<style scoped>
.circular-progress-bar {
  position: relative;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

.circular-progress-bar--background {
  stroke: var(--color-background-dark);
  stroke-width: 5px;
}

.circular-progress-bar--indicator {
  transition: stroke-dashoffset 0.5s ease-out;
  stroke: var(--color-text-highlight);
  stroke-width: 5px;
}

.circular-progress-bar--center {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  text-align: center;
}
</style>
