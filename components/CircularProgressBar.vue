<template>
  <div class="circular-progress-bar">
    <svg
      width="80"
      height="80"
      viewport="0 0 80 80"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        class="circular-progress-bar--background"
        pathLength="100"
        r="35"
        cx="40"
        cy="40"
        fill="transparent"
        stroke-dasharray="100"
        stroke-dashoffset="0"
      />
      <circle
        class="circular-progress-bar--indicator"
        pathLength="100"
        r="35"
        cx="40"
        cy="40"
        fill="transparent"
        stroke-dasharray="100"
        stroke-dashoffset="0"
        transform="rotate(-90 40 40)"
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
  line-height: 0;
}

.circular-progress-bar--background {
  stroke: var(--color-control);
  stroke-width: 4px;
  transition: stroke ease-in var(--theme-duration-1000);
}

.circular-progress-bar--indicator {
  stroke: var(--color-control-active);
  stroke-width: 4px;
  transition: stroke-dashoffset 0.5s ease-out, stroke ease-in var(--theme-duration-1000);
}

.circular-progress-bar--center {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
