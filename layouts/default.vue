<template>
  <div class="page">
    <slot />
    <Navigation :audio-on="audioOn" :current-story="currentStory" />
  </div>
</template>

<script>
const GRETA = 'GRETA'
const MALALA = 'MALALA'

export default {
  // ToDo: Make both attributes available via store
  data () {
    return {
      audioOn: false,
      currentStory: GRETA
    }
  },
  methods: {
    switchStories () {
      this.currentStory = this.currentStory === MALALA ? GRETA : MALALA
    }
  }
}
</script>

<style scoped>
  .page {
    min-height: 100vh;
    background-color: var(--color-background-greta);
  }
</style>
