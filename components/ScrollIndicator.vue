<template>
  <div class="scroll-indicator" data-scroll-indicator>
    <p class="scroll-indicator--text">
      scroll
    </p>
  </div>
</template>

<style scoped lang="scss">
.scroll-indicator {
  display: flex;
  align-items: center;
  transform: translateY(50%) rotate(-90deg);
  transform-origin: left center;
  transition: opacity 2s ease-in;

  &::before {
    content: '';
    display: block;
    width: 40px;
    height: 2px;
    background-color: var(--color-text-neutral);
    transition: width 2s;
  }

  &.hidden {
    opacity: 0;
    &::before {
      width: 80px;
    }
  }
}

.scroll-indicator--text {
  font-family: var(--serif-font);
  font-size: var(--font-32);
  justify-content: center;
  color: var(--color-text-neutral);
  transition: letter-spacing 3s ease-in;
  margin-left: 6px;

  .scroll-indicator.hidden & {
    letter-spacing: 3px;
  }
}
</style>
