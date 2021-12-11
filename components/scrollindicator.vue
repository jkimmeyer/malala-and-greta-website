<template>
  <div class="scroll-indicator">
    <div class="scroll-indicator--line dot" />
    <div class="scroll-indicator--line" />
    <p class="scroll-indicator--message">
      scroll to continue
    </p>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.scroll-indicator {
  display: flex;
  /* stylelint-disable-next-line declaration-no-important */
  transform: translateX(-50%) rotate(-90deg) !important;
}

.scroll-indicator--message {
  align-self: center;
}

.scroll-indicator--line {
  display: inline-block;
  align-self: center;
  width: 80px;
  height: 3px;
  margin-right: 15px;
  /* stylelint-disable-next-line color-named */
  background-color: black;
}

.dot {
  width: 3px;
  margin-right: 5px;
}
</style>
