<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60.29 180.92">
    <g id="Ebene_2" data-name="Ebene 2">
      <g id="Ebene_1-2" data-name="Ebene 1">
        <rect class="cls-1" x="23.15" y="0.5" width="13.99" height="175.52" />
        <circle id="my-circle" class="cls-1" cx="30.15" cy="150" r="29.65" />
        <animate
          ref="animation-forward"
          xlink:href="#my-circle"
          attributeName="cy"
          from="150"
          to="30"
          dur="1s"
          begin="indefinite"
          fill="freeze"
        />

        <animate
          ref="animation-backward"
          xlink:href="#my-circle"
          attributeName="cy"
          from="30"
          to="150"
          dur="1s"
          begin="indefinite"
          fill="freeze"
        />
      </g>
    </g>
  </svg>
</template>
<script>
export default {
  data () {
    return {
      forward: true
    }
  },
  methods: {
    toggleAnimation () {
      if (this.forward) {
        this.$refs['animation-forward'].beginElement()
        this.forward = !this.forward
      } else {
        this.$refs['animation-backward'].beginElement()
        this.forward = !this.forward
      }
    }
  }
}
</script>

<style>
.cls-1 {
  fill: var(--color-background-dark);
  stroke: var(--color-background-dark);
  stroke-miterlimit: 10;
  transition: fill ease-in var(--theme-duration-1000), stroke ease-in var(--theme-duration-1000);
}
</style>
