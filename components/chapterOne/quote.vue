<template>
  <p class="quote">
    {{ quote }}
  </p>
</template>

<script>
export default {
  props: {
    quote: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.quote {
  font-size: var(--font-32);
  font-style: italic;
  font-weight: 300;
  color: var(--color-text-neutral-light);
}
</style>
