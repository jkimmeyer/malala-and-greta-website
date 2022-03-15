<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-1"
          :chapter="1"
          :is-malala="true"
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 data-animate-reveal-left class="intro-heading">
              Wer bin ich?
            </h2>
            <img data-animate-reveal-right class="self-end" :src="require('~/assets/images/MalalaWhoAmI.png')" width="600">
          </div>
        </ChapterIntro>
        <ChapterMalalaOne />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-1"
          :chapter="1"
          :is-malala="false"
        >
          <div class="inline-flex flex-col" data-narrator-greta="Greta-Kap1.m4a">
            <h2 data-animate-reveal-left class="intro-heading">
              Wer bin ich?
            </h2>
            <img class="self-end" data-animate-reveal-right :src="require('~/assets/images/GretaWhoAmI.png')" width="600">
          </div>
        </ChapterIntro>

        <ChapterGretaOne />
      </template>
    </ChapterSwitcher>
  </div>
</template>

<style scoped>
.intro-heading {
  font-size: inherit;
}
</style>
