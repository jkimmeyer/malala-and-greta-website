<template>
  <div class="intro" :class="themeClass">
    <h2 class="intro--subheading">
      Kapitel {{ chapter }}
    </h2>
    <h1 class="intro--heading">
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
  background: linear-gradient(var(--color-background-malala-dark) 30%, var(--color-background-malala) 100%);
}

.intro.greta {
  background: linear-gradient(var(--color-background-greta-dark) 30%, var(--color-background-greta) 100%);
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
    font-size: var(--font-128);
  }

  .intro--subheading {
    font-size: var(--font-64);
  }
}
@media (min-width: 1024px) {
  .intro--heading {
    font-size: var(--font-182);
  }

  .intro--subheading {
    font-size: var(--font-96);
  }
}
</style>
