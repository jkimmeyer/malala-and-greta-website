<template>
  <div>
    <CircularProgressBar :progress="audioNarratorProgress">
      <button
        :aria-label="audioNarratorIsPlaying ? 'Audio playing' : 'Audio paused'"
        class="navigation--button"
        @click="audioNarratorIsPlaying? pauseNarrator(): resumeNarrator()"
      >
        <Icon
          class="navigation--icon"
          :class="audioNarratorIsPlaying ? null : 'hidden'"
          icon="fluent:pause-24-regular"
          height="32px"
        />
        <Icon
          class="navigation--icon"
          :class="audioNarratorIsPlaying ? 'hidden' : null "
          icon="fluent:play-24-regular"
          height="32px"
        />
      </button>
    </CircularProgressBar>
    <div class="button-group">
      <button
        :aria-label="getAudioOn ? 'Audio ausschalten' : 'Audio einschalten'"
        class="navigation--button"
        @click="onMuteClicked()"
      >
        <Icon
          class="navigation--icon"
          :class="getAudioOn ? 'hidden' : null "
          icon="fluent:speaker-2-24-regular"
          height="24px"
        />
        <Icon
          class="navigation--icon"
          :class="getAudioOn ? null : 'hidden'"
          icon="fluent:speaker-off-24-regular"
          height="24px"
        />
      </button>
      <button
        :aria-label="getAudioOn ? 'Audio ausschalten' : 'Audio einschalten'"
        class="navigation--button"
        @click="playNarrator()"
      >
        <Icon
          class="navigation--icon"
          icon="fluent:arrow-reset-20-regular"
          height="24px"
        />
      </button>
    </div>
  </div>
</template>
<script>
import { getAudioOn, toggleAudio } from '@/composables/audioMute'
import { audioNarratorIsPlaying, audioNarratorProgress, playNarrator, pauseNarrator, resumeNarrator } from '@/composables/audioNarrator'
import { updateMusicSource, playMusic } from '@/composables/audioMusic'
export default {
  setup () {
    const onMuteClicked = () => {
      toggleAudio()
      if (getAudioOn.value) {
        updateMusicSource('/sound/background-music.mp3')
        playMusic()
      }
    }
    return {
      getAudioOn,
      toggleAudio,
      audioNarratorIsPlaying,
      audioNarratorProgress,
      playNarrator,
      pauseNarrator,
      resumeNarrator,
      onMuteClicked
    }
  }
}
</script>
<style scoped>
.button-group{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navigation--button {
  display: flex;
  align-items: center;
  margin: 0 4px;
  border: none;
  padding: 4px;
  background: none;
}

.navigation--icon {
  color: var(--color-control);
  transition: all ease-in var(--theme-duration-1000);
}

.navigation--icon:hover {
  color: var(--color-control-hover);
  transition: none;
}

.navigation--icon:focus {
  color: var(--color-control-focus);
  transition: none;
}

.navigation--icon:active {
  color: var(--color-control-active);
  transition: all ease 0.1s;
}

.navigation--icon.hidden {
  display: none;
}
</style>
