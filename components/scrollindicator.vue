<template>
  <div class="scroll-indicator" :class="{hidden: !isVisible}">
    <div class="scroll-indicator--line" :class="{hiddenline: !isVisible}" />
    <p class="scroll-indicator--message">
      scroll
    </p>
  </div>
</template>

<script>
export default {
  props: {
    isVisible: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-indicator {
  display: flex;
  /* stylelint-disable-next-line declaration-no-important */
  transform: translateY(50%) rotate(-90deg) !important;
  transform-origin: left center;
  transition-property: opacity, letter-spacing;
  transition-duration: 3s;
  &.hidden {
    opacity: 0;
    letter-spacing: 3px;
  }
}

.scroll-indicator--message {
  align-self: center;
}

.scroll-indicator--line {
  display: inline-block;
  align-self: center;
  width: 20px;
  height: 2px;
  margin-right: 12px;
  /* stylelint-disable-next-line color-named */
  background-color: black;
  transition: width 3s;
  &.hiddenline {
    width: 80px;
  }
}
</style>
