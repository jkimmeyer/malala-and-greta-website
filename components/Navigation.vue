<template>
  <nav class="navigation">
    <h2 class="navigation--title visually-hidden">
      Navigation
    </h2>

    <ul class="navigation--list">
      <li class="navigation--list-item">
        <button
          :aria-label="getAudioOn ? 'Audio ausschalten' : 'Audio einschalten'"
          class="navigation--button"
          @click="toggleAudio()"
        >
          <Icon
            class="navigation--icon"
            :class="getAudioOn ? null : 'hidden'"
            icon="fluent:speaker-off-24-regular"
            height="48px"
          />
          <Icon
            class="navigation--icon"
            :class="getAudioOn ? 'hidden' : null "
            icon="fluent:speaker-2-24-regular"
            height="48px"
          />
        </button>
      </li>
      <li class="navigation--list-item is-separator" />
      <li v-for="chapter in chapters" :key="chapter" class="navigation--list-item is-page">
        <a class="navigation--link" href="#">
          <span class="navigation--link-text">{{ chapter }}</span>
        </a>
      </li>
      <li class="navigation--list-item is-separator" />
      <li class="navigation--list-item">
        <ToggleSwitch @toggle-button-switched="switchTheme()" />
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  setup () {
    return {
      getAudioOn,
      toggleAudio,
      switchTheme
    }
  },
  data () {
    return {
      chapters: ['1', '2', '3', '4', '5']
    }
  }
}
</script>

<style lang="scss" scoped>
  .navigation {
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .navigation--list {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;
    margin: 0;
    height: 100%;
    padding: var(--space-16);
  }

  .navigation--list-item.is-page {
    padding: var(--space-16) var(--space-64);
    transition: transform ease-in 0.5s;
    transform: translateX(0);
  }

  .navigation--list-item.is-page.is-current {
    height: var(--space-48);
  }

  .navigation--list-item.is-separator {
    height: var(--space-64);
    width: var(--space-4);
    background-color: var(--color-background-dark);
  }

  .navigation--list-item.is-separator:last-child {
    margin-top: auto;

  }

  .navigation--icon {
    color: var(--color-background-dark);
  }

  .navigation--icon.hidden {
    display: none;
  }

  .navigation--link {
    display: flex;
    border-left: var(--space-4) solid var(--color-background-dark);
    align-items: center;
    height: var(--space-32);
    padding-left: var(--space-4);
  }

  .navigation--link-text {
    opacity: 0;
  }

  .navigation--list-item.is-page:focus,
  .navigation--list-item.is-page:hover,
  .navigation--list-item.is-page:active {
    transform: translateX(-10px);
    transition: transform ease-in 0.5s;

    .navigation--link-text {
      opacity: 1;
      transition: opacity ease-in 0.5s;
    }
  }

  .navigation--button {
    background: none;
    border: none;
  }
</style>
