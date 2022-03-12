<template>
  <nav class="navigation">
    <h2 class="navigation--title visually-hidden">
      Navigation
    </h2>

    <ul class="navigation--list">
      <li class="navigation--list-item">
        <NarratorControls />
      </li>
      <li class="navigation--list-item is-separator" />
      <li v-for="(chapter, index) in chapters" :key="chapter.id" class="navigation--list-item is-page">
        <a class="navigation--link" :href="chapter.id">
          <span class="navigation--link-text">{{ index + 1 }} - {{ chapter.title }}</span>
        </a>
      </li>
      <li class="navigation--list-item is-separator" />
      <li class="navigation--list-item">
        <ToggleSwitch :pressed="toggleSwitchPressed" :enabled="!inEnd" @toggle-button-switched="switchTheme()" />
      </li>
    </ul>
  </nav>
</template>

<script>
import { chapters } from '@/assets/contents/chapters.ts'
import { switchTheme, getCurrentTheme } from '@/composables/theme'
import { Themes } from '@/enums/Themes.ts'
import { getCurrentControlTheme } from '~/composables/controlTheme'
import { ControlThemes } from '~/enums/ControlThemes'

export default {
  setup () {
    return {
      switchTheme,
      getCurrentTheme,
      getCurrentControlTheme
    }
  },
  data () {
    return {
      chapters
    }
  },
  computed: {
    toggleSwitchPressed () {
      return getCurrentTheme.value === Themes.Greta
    },
    inEnd () {
      return getCurrentControlTheme.value === ControlThemes.End
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
    width: 160px;
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
    padding: var(--space-4) var(--space-16) var(--space-4) var(--space-4);
    transition: transform ease-in 0.1s;
    transform: translateX(0%);
    align-self: flex-end;
    white-space: nowrap;
    margin-right: 46px;
  }

  .navigation--list-item.is-separator {
    height: var(--space-64);
    width: var(--space-4);
    background-color: var(--color-control);
    transition: all ease-in var(--theme-duration-1000);
  }

  .navigation--list-item.is-separator:last-child {
    margin-top: auto;
  }

  .navigation--link {
    display: flex;
    border-right: var(--space-4) solid var(--color-control);
    align-items: center;
    height: 40px;
    padding-left: var(--space-4);
    transition: all ease-in var(--theme-duration-1000);
    text-decoration: none;
    font-family: var(--serif-font);
    font-size: var(--font-32);
    color: var(--color-text-dark);
  }

  .navigation--link-text {
    opacity: 0;
    display: none;
  }

  .navigation--list-item.is-page:focus,
  .navigation--list-item.is-page:hover,
  .navigation--list-item.is-page:active {
    transform: translateX(-5px);

    .navigation--link {
      border-color: var(--color-control-active);
      transition: border-color ease 0.1s;
    }
    .navigation--link-text {
      color: var(--color-control-active);
      display: block;
      opacity: 1;
      transition: opacity ease-in var(--theme-duration-1000), transform ease-in var(--theme-duration-1000);
      transform: translateX(-10px);
    }
  }
</style>
