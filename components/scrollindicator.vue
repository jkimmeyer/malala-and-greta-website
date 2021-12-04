<template>
  <div class="scroll-indicator">
    <div class="scroll-indicator--line dot" />
    <div class="scroll-indicator--line" />
    <p class="scroll-indicator--message">scroll to continue</p>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.scroll-indicator {
  display: flex;
  transform: translateX(-50%) rotate(-90deg) !important;
}
.scroll-indicator--message {
  align-self: center;
}

.scroll-indicator--line {
  width: 80px;
  height: 3px;
  margin-right: 15px;
  align-self: center;
  background-color: black;
  display: inline-block;
}
.dot {
  width: 3px;
  margin-right: 5px;
}
</style>
