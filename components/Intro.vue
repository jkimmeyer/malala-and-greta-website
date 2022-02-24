<template>
  <div class="intro">
    <h2 class="intro--subheading">
      Kapitel {{ chapter }}
    </h2>
    <h1 class="intro--heading">
      <slot />
    </h1>
  </div>
</template>

<script>
export default {
  props: {
    chapter: {
      type: Number,
      required: true
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
  scroll-snap-align: start;
  background: linear-gradient(var(--color-background-dark) 0%, var(--color-background) 100%);
}

.intro--heading {
  font-family: var(--serif-font);
  font-size: var(--font-182);
  font-weight: 300;
  letter-spacing: 0.1em;
  line-height: var(--line-1);
  color: var(--color-text-light);
}

.intro--subheading {
  font-family: var(--sans-serif-font);
  font-size: var(--font-96);
  font-weight: 200;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-light);
}

</style>
