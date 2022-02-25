<template>
  <div class="scroll-indicator" :class="{hidden: isHidden}">
    <p class="scroll-indicator--text">
      scroll
    </p>
  </div>
</template>

<script>
export default {
  props: {
    isHidden: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">
.scroll-indicator {
  display: flex;
  align-items: center;
  transform: translateY(50%) rotate(-90deg);
  transform-origin: left center;
  transition: opacity 3s ease-in;

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: var(--color-text-neutral);
    transition: width 3s;
  }

  &.hidden {
    opacity: 0;
    &::before {
      width: 80px;
    }
  }
}

.scroll-indicator--text {
  justify-content: center;
  color: var(--color-text-neutral);
  transition: letter-spacing 3s ease-in;
  margin-left: 6px;

  .scroll-indicator.hidden & {
    letter-spacing: 3px;
  }
}
</style>
