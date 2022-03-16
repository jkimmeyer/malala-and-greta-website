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
      <span class="toggle-switch--button-option" :class="{abc: !enabled}">greta</span>
      <ToggleSwitchIcon v-if="enabled" ref="toggleSwitchIcon" class="toggle-switch--icon" />
      <div v-else class="toggle-switch--and">
        &amp;
      </div>
      <span class="toggle-switch--button-option" :class="{abc: !enabled}">malala</span>
    </button>
  </div>
</template>

<script>

export default {
  props: {
    pressed: {
      type: Boolean,
      default: false
    },
    enabled: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      toggleButtonPressed: this.pressed ? 'true' : 'false'
    }
  },
  watch: {
    pressed () {
      this.$refs.toggleSwitchIcon.toggleAnimation()
    }
  },
  methods: {
    toggleButton () {
      if (this.enabled) {
        this.toggleButtonPressed = this.toggleButtonPressed === 'true' ? 'false' : 'true'
        this.$emit('toggle-button-switched')
      }
    }
  }
}
</script>

<style scoped>
.toggle-switch--button {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  width: 60px;
  border: none;
  background: none;
}

.toggle-switch--button-option {
  display: block;
  font-family: var(--serif-font);
  font-size: var(--font-32);
  line-height: var(--line-1-5);
  color: var(--color-control);
  transition: font-size 1s ease-in, color ease-in var(--theme-duration-1000), transform ease-in var(--theme-duration-1000);
  writing-mode: vertical-rl;
}

.toggle-switch--button-option:first-child {
  padding: var(--space-16) 0 0 0;
  transform: scale(0.5) rotate(180deg) translateY(90%);
  transform-origin: bottom;
  text-align: start;
}

.toggle-switch--button-option:last-child {
  padding: 0 0  var(--space-16) 0;
  transform: scale(0.5) rotate(180deg) translateY(-90%);
  transform-origin: top;
  text-align: end;
}

.toggle-switch--button[aria-pressed='true'] .toggle-switch--button-option:first-child {
  transform: scale(1) rotate(180deg)  translateY(90%);
  transition: font-size 1s ease-in, color ease-in var(--theme-duration-1000), transform ease-in var(--theme-duration-1000);
}

.toggle-switch--button[aria-pressed='false'] .toggle-switch--button-option:last-child {
  transform: scale(1) rotate(180deg)  translateY(-90%);
  transition: font-size 1s ease-in, color ease-in var(--theme-duration-1000), transform ease-in var(--theme-duration-1000);
}

.toggle-switch--button[aria-pressed='false'] .toggle-switch--button-option:first-child.abc {
  transform: scale(1) rotate(180deg)  translateY(90%);
}

.toggle-switch--button[aria-pressed='true'] .toggle-switch--button-option:last-child.abc {
  transform: scale(1) rotate(180deg)  translateY(-90%);
}

.toggle-switch--icon {
  width: 16px;
  height: auto;
}

.toggle-switch--and{
  transform: rotate(180deg);
  font-family: var(--serif-font);
  writing-mode: vertical-rl;
  font-size: var(--font-32);
  color: var(--color-control);
}
</style>
