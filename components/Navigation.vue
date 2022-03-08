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
      <li v-for="chapter in chapters" :key="chapter.id" class="navigation--list-item is-page">
        <a :href="chapter.id" class="navigation--link">
          <span class="navigation--link-text">{{ chapter.title }}</span>
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
import { chapters } from '@/assets/contents/chapters.ts'
import { getAudioOn, toggleAudio } from '@/composables/audio'
import { switchTheme } from '@/composables/theme'
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
      chapters
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
    width: 180px;
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
    padding: var(--space-16) var(--space-4) var(--space-16) var(--space-4);
    transition: transform ease-in var(--theme-duration-1000);
    transform: translateX(50%);
    width: 250px;
  }

  .navigation--list-item.is-page.is-current {
    height: var(--space-48);
  }

  .navigation--list-item.is-separator {
    height: var(--space-64);
    width: var(--space-4);
    background-color: var(--color-background-dark);
    transition: all ease-in var(--theme-duration-1000);
  }

  .navigation--list-item.is-separator:last-child {
    margin-top: auto;
  }

  .navigation--icon {
    color: var(--color-background-dark);
    transition: all ease-in var(--theme-duration-1000);
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
    transition: all ease-in var(--theme-duration-1000);
  }

  .navigation--link-text {
    opacity: 0;
  }

  .navigation--list-item.is-page:focus,
  .navigation--list-item.is-page:hover,
  .navigation--list-item.is-page:active {
    transform: translateX(-20px);
    transition: transform ease-in var(--theme-duration-1000);

    .navigation--link-text {
      opacity: 1;
      transition: opacity ease-in var(--theme-duration-1000);
    }
  }

  .navigation--button {
    background: none;
    border: none;
  }
</style>
