<template>
  <div class="toggle-switch">
    <button
      id="a11y-toggle-switch-default"
      :aria-pressed="toggleButtonPressed"
      aria-labelledby="a11y-toggle-switch-default"
      role="toggle-switch"
      type="button"
      class="toggle-switch--button"
      @click="toggleButton()"
    >
      <span class="toggle-switch--button-option">Greta</span>
      <ToggleSwitchIcon ref="toggleSwitchIcon" class="toggle-switch--icon" />
      <span class="toggle-switch--button-option">Malala</span>
    </button>
  </div>
</template>

<script>
export default {
  props: {
    pressed: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      toggleButtonPressed: this.pressed === 'true' ? 'true' : 'false'
    }
  },
  methods: {
    toggleButton () {
      this.$refs.toggleSwitchIcon.toggleAnimation()
      this.toggleButtonPressed = this.toggleButtonPressed === 'true' ? 'false' : 'true'
    }
  }
}
</script>

<style scoped>
.toggle-switch--button {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60px;
  border: none;
  background: none;
}

.toggle-switch--button-option {
  display: block;
  padding: var(--space-16) 0;
  transform: rotate(180deg);
  transition: font-size 1s linear;
  writing-mode: vertical-rl;
}

.toggle-switch--button[aria-pressed='true'] .toggle-switch--button-option:first-child {
  font-size: var(--font-32);
  line-height: var(--line-1-5);
  color: var(--color-background-greta-dark);
  transition: font-size 1s linear;
}

.toggle-switch--button[aria-pressed='false'] .toggle-switch--button-option:last-child {
  font-size: var(--font-32);
  line-height: var(--line-1-5);
  color: var(--color-background-greta-dark);
  transition: font-size 1s linear;
}

.toggle-switch--icon {
  width: 16px;
  height: auto;
}
</style>
