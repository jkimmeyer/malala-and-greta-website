<template>
  <nav class="navigation">
    <h2 class="navigation--title visually-hidden">
      Navigation
    </h2>

    <ul class="navigation--list">
      <li class="navigation--list-item">
        <NarratorControls />
        <transition name="fade">
          <Hint v-if="audioHintVisible" class="hint-audio" text="Klicke auf den Lautsprecher um Audio zu aktivieren" point-to="top-right" :duration="0" />
        </transition>
      </li>
      <!--<li class="navigation--list-item is-separator" />-->
      <li v-for="(chapter, index) in chapters" :key="chapter.id" class="navigation--list-item is-page">
        <a class="navigation--link" :href="chapter.id" :class="{current: index + 1 === getCurrentChapter}">
          <span class="navigation--link-text">{{ index + 1 }} - {{ chapter.title }}</span>
        </a>
      </li>
      <!--<li class="navigation--list-item is-separator" />-->
      <li class="navigation--list-item">
        <ToggleSwitch :pressed="toggleSwitchPressed" :enabled="!inEnd" @toggle-button-switched="onToggleButtonSwitched()" />
        <transition name="fade">
          <Hint v-if="switchHintVisible" class="hint-switch" text="Wechsel hier die Geschichte" point-to="bottom-right" :duration="0" />
        </transition>
      </li>
    </ul>
  </nav>
</template>

<script>
import { chapters } from '@/assets/contents/chapters.ts'
import { switchTheme, getCurrentTheme } from '@/composables/theme'
import { Themes } from '@/enums/Themes.ts'
import { getCurrentControlTheme, getControlHintsEnabled } from '~/composables/controlTheme'
import { ControlThemes } from '~/enums/ControlThemes'
import { getAudioOn } from '@/composables/audioMute.ts'
import { pauseNarrator } from '@/composables/audioNarrator'
import { pauseSound } from '@/composables/audioSound'
import { getCurrentChapter } from '~/composables/navigation'

export default {
  setup () {
    return {
      switchTheme,
      getCurrentTheme,
      getCurrentControlTheme,
      getControlHintsEnabled,
      getAudioOn,
      getCurrentChapter,
      pauseNarrator,
      pauseSound
    }
  },
  data () {
    return {
      chapters,
      switchClickedAtLeastOnce: false
    }
  },
  computed: {
    toggleSwitchPressed () {
      return getCurrentTheme.value === Themes.Greta
    },
    inEnd () {
      return getCurrentControlTheme.value === ControlThemes.End
    },
    audioHintVisible () {
      return getControlHintsEnabled.value && !getAudioOn.value
    },
    switchHintVisible () {
      return getControlHintsEnabled.value && !this.switchClickedAtLeastOnce
    }
  },
  methods: {
    onToggleButtonSwitched () {
      this.switchClickedAtLeastOnce = true
      pauseNarrator()
      pauseSound()
      switchTheme()
    }
  }
}
</script>

<style lang="scss" scoped>
.hint-switch {
  position: absolute;
  bottom: 130px;
  right: 100px;
}
.hint-audio {
  position: absolute;
  top: 90px;
  right: 110px;
}
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
    gap: var(--space-4);
  }

  .navigation--list-item.is-page {
    padding: var(--space-4) var(--space-64) var(--space-4) var(--space-64);
    padding-right: calc(var(--space-64) - var(--space-2));
    transition: transform ease-in 0.1s;
    transform: translateX(0%);
    align-self: flex-end;
    white-space: nowrap;
    cursor: pointer;
    flex: 1;
  }

  .navigation--list-item:first-child {
    padding-bottom: 1rem;
  }

  .navigation--list-item.is-separator {
    height: var(--space-64);
    width: var(--space-1);
    background-color: var(--color-control);
    transition: all ease-in var(--theme-duration-1000);
  }

  .navigation--list-item.is-separator:last-child {
    margin-top: auto;
  }

  .navigation--list-item:last-child{
    min-height: 205px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }

  .navigation--link {
    display: flex;
    border-right: var(--space-4) solid var(--color-control);
    align-items: center;
    height: 100%;
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

  .navigation--link.current {
    border-color: var(--color-control-active);
    transition: border-color ease 0.5s;
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
  .fade-enter-active, .fade-leave-active {
  transition: opacity 1s;
}
.fade-enter, .fade-leave-to  {
  opacity: 0;
}
</style>
