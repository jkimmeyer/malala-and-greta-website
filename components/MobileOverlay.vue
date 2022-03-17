<template>
  <div class="mobile-overlay" :class="showPage ? 'hidden' : null">
    Diese Seite funktioniert aktuell nicht auf Mobilgeräten, sondern erst ab einer Breite von 1024px.
    <button class="mobile-overlay--button" type="button" @click="showPage = !showPage">
      Seite trotzdem anzeigen.
    </button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showPage: false
    }
  }

}
</script>

<style scoped lang="scss">
.mobile-overlay {
  display: none;

  @media (max-width: 1024px) {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 32px;
    left: 0;
    right: 0;
    font-family: var(--serif-font);
    font-size: var(--font-32);
    color: var(--color-text-neutral);
    background-color: var(--color-background-neutral);
    top: 0;
    bottom: 0;
    z-index: 10000;

    &.hidden {
      display: none;
    }
  }
}

.mobile-overlay--button {
  appearance: none;
  background-color: var(--color-background-greta);
  padding: var(--space-8) var(--space-16);
  color: var(--color-text-neutral);
  margin: var(--space-32) auto 0px auto;
  border: none;
  border-radius: var(--space-8);
  transition: transform ease-in-out 1.5s, filter ease-in-out 1.5s;
  cursor: pointer;
  font-size: var(--font-16);

  &:focus,
  &:hover,
  &:active {
    transition: transform ease-in-out 1.5s, filter ease-in-out 1.5s;
    transform-origin: center center;
    transform: scale(1.15);
    filter: drop-shadow(0 0 8px var(--color-shadow-greta));
  }
}
</style>
