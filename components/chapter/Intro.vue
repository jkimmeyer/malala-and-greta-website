<template>
  <div class="intro" :class="[themeClass, controlClass]">
    <h2 class="intro--subheading">
      Kapitel {{ chapter }}
    </h2>
    <h1 class="intro--heading" data-animate-reveal-left>
      <slot>{{ chapters[chapter-1].title }}</slot>
    </h1>
  </div>
</template>

<script>
import { chapters } from '@/assets/contents/chapters.ts'

export default {
  props: {
    chapter: {
      type: Number,
      required: true
    },
    isMalala: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      chapters
    }
  },
  computed: {
    themeClass () {
      return this.isMalala ? 'malala' : 'greta'
    },
    controlClass () {
      return this.chapter === 1 || this.chapter === 5 ? 'has-dark-start' : null
    }
  }
}
</script>

<style scoped>
.intro {
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  width: 100vw;
  height: 100vh;
  padding: var(--space-128) var(--space-128);
  color: var(--color-text-neutral-light);
}

.intro.malala {
  background: linear-gradient(var(--color-background-malala) 0%, var(--color-background-malala-dark) 25%, var(--color-background-malala-dark) 50%, var(--color-background-malala) 100%);
}

.intro.greta {
  background: linear-gradient(var(--color-background-greta) 0%, var(--color-background-greta-dark) 25%, var(--color-background-greta-dark) 50%, var(--color-background-greta) 100%);
}

.intro.has-dark-start.malala {
  background: linear-gradient(var(--color-background-malala-dark) 0%, var(--color-background-malala-dark) 30%, var(--color-background-malala) 100%);
}

.intro.has-dark-start.greta {
  background: linear-gradient(var(--color-background-greta-dark) 0%, var(--color-background-greta-dark) 30%, var(--color-background-greta) 100%);
}

.intro--heading {
  font-family: var(--serif-font);
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: var(--line-1);
  color: inherit;
}

.intro--subheading {
  font-family: var(--sans-serif-font);
  font-weight: 200;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: inherit;
}
@media (max-width: 1024px) {
  .intro--heading {
    font-size: var(--font-96);
  }

  .intro--subheading {
    font-size: var(--font-32);
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .intro--heading {
    font-size: var(--font-128);
  }

  .intro--subheading {
    font-size: var(--font-64);
  }
}
@media (min-width: 1280px) {
  .intro--heading {
    font-size: var(--font-182);
  }

  .intro--subheading {
    font-size: var(--font-96);
  }
}
</style>
