<template>
  <div class="stories-page">
    <div
      class="stories-page--first"
      :class="malalaClasses"
    >
      <slot name="malala" />
    </div>

    <div
      class="stories-page--second"
      :class="gretaClasses"
    >
      <slot name="greta" />
    </div>
  </div>
</template>

<script>
import { Themes } from '@/enums/Themes'
import { getCurrentTheme } from '@/composables/theme'
export default {
  setup () {
    return {
      getCurrentTheme
    }
  },
  computed: {
    gretaClasses () {
      return getCurrentTheme.value === Themes.Greta ? null : 'inactive'
    },
    malalaClasses () {
      return getCurrentTheme.value === Themes.Malala ? null : 'inactive'
    }
  }
}
</script>

<style scoped>
.chapter-background {
  background-color: var(--color-background-malala);
}

.stories-page {
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  position: relative;
  width: 200vw;
}

.stories-page--first {
  will-change: transform;
  flex-basis: 100vw;
  transform: translateX(0);
  background-color: var(--color-background-malala);
  transition: transform ease-in var(--theme-duration-1000);
}

.stories-page--second {
  will-change: transform;
  flex-basis: 100vw;
  transform: translateX(-100%);
  background-color: var(--color-background-greta);
  transition: transform ease-in var(--theme-duration-1000);
}

.stories-page--first.inactive {
  transform: translateX(-100%);
}

.stories-page--second.inactive {
  transform: translateX(0%);
}
</style>
