<template>
  <div v-if="hintIsVisible" class="hint" :class="classObject">
    <span v-if="hasTopArrow" class="hint-arrow-top" :class="classObject"><SvgsArrowLeft /></span>
    <div>{{ text }}</div>
    <span v-if="hasBottomArrow" class="hint-arrow-bottom" :class="classObject"><SvgsArrowRight /></span>
  </div>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      default: 'Wechsel hier etwas'
    },
    pointTo: {
      type: String,
      default: 'bottom-right'
    },
    duration: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      hintIsVisible: true
    }
  },
  computed: {
    classObject () {
      if (this.pointTo === 'bottom-left' || this.pointTo === 'top-left') {
        return 'left'
      }
      if (this.pointTo === 'bottom-right' || this.pointTo === 'top-right') {
        return 'right'
      }
      return null
    },
    hasBottomArrow () {
      return this.pointTo === 'bottom-left' || this.pointTo === 'bottom-right'
    },
    hasTopArrow () {
      return this.pointTo === 'top-left' || this.pointTo === 'top-right'
    }
  },
  mounted () {
    if (this.duration) {
      setTimeout(() => {
        this.hintIsVisible = false
      }, this.duration)
    }
  }
}
</script>
<style scoped>
.hint {
  display: flex;
  flex-direction: column;
  width: 200px;
  font-family: var(--serif-font);
  font-size: var(--font-32);
  color: var(--color-control);
  transition: color ease-in var(--theme-duration-1000);
}

.hint.left {
  align-items: flex-start;
  text-align: right;
}

.hint.right {
  align-items: flex-end;
  text-align: left;
}

.hint-arrow-top svg,
.hint-arrow-bottom svg  {
  stroke: var(--color-control);
  width: 180px;
  height: 70px;
  transition: stroke ease-in var(--theme-duration-1000);
}

.hint-arrow-bottom.left svg {
  transform: scale(-1, 1);
}

.hint-arrow-top.right svg {
  transform: scale(-1, 1);
}
</style>
