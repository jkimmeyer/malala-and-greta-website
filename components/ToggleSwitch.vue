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
      <span class="toggle-switch--button-option" :class="{abc: !enabled}">Greta</span>
      <ToggleSwitchIcon v-if="enabled" ref="toggleSwitchIcon" class="toggle-switch--icon" />
      <div v-else class="toggle-switch--and">
        &amp;
      </div>
      <span class="toggle-switch--button-option" :class="{abc: !enabled}">Malala</span>
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
  mounted () {
    if (this.pressed) {
      this.$refs.toggleSwitchIcon.toggleAnimation()
    }
  },
  methods: {
    toggleButton () {
      this.$refs.toggleSwitchIcon.toggleAnimation()
      this.toggleButtonPressed = this.toggleButtonPressed === 'true' ? 'false' : 'true'
      this.$emit('toggle-button-switched')
    }
  }
}
</script>

<style scoped>
.toggle-switch {
  height: 220px;
}

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
  font-family: var(--serif-font);
  transition: font-size 1s ease-in, color ease-in var(--theme-duration-1000);
  writing-mode: vertical-rl;
}

.toggle-switch--button-option:first-child {
  text-align: start;
  color: var(--color-control);
}

.toggle-switch--button-option:last-child {
  text-align: end;
  color: var(--color-control);
}

.toggle-switch--button[aria-pressed='true'] .toggle-switch--button-option:first-child {
  font-size: var(--font-32);
  line-height: var(--line-1-5);
  transition: font-size 1s ease-in, color ease-in var(--theme-duration-1000);
}

.toggle-switch--button[aria-pressed='false'] .toggle-switch--button-option:last-child {
  font-size: var(--font-32);
  line-height: var(--line-1-5);
  transition: font-size 1s ease-in, color ease-in var(--theme-duration-1000);
}

.toggle-switch--button[aria-pressed='false'] .toggle-switch--button-option:first-child.abc {
  font-size: var(--font-32);
  line-height: var(--line-1-5);
}

.toggle-switch--button[aria-pressed='true'] .toggle-switch--button-option:last-child.abc {
  font-size: var(--font-32);
  line-height: var(--line-1-5);
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
