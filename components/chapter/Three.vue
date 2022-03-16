<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-3"
          :chapter="3"
          :is-malala="true"
          data-chapters-2-3
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 data-animate-reveal-left class="intro-heading">
              Wofür setze ich mich ein?
              <img class="inline-block" :src="require('~/assets/images/chapter/3/malala/malala-speech-bubble.png')" width="120">
            </h2>
          </div>
        </ChapterIntro>
        <ChapterMalalaThree />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-3"
          :chapter="3"
          :is-malala="false"
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 data-animate-reveal-left class="intro-heading">
              Wofür setze ich mich ein?
              <img class="inline-block" :src="require('~/assets/images/chapter/3/greta/greta-speech-bubble.png')" width="120">
            </h2>
          </div>
        </ChapterIntro>
        <ChapterGretaThree />
      </template>
    </ChapterSwitcher>
  </div>
</template>
