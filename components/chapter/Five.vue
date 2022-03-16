<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-5"
          :chapter="5"
          :is-malala="true"
          data-controls-light-dark
          data-chapters-4-5
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 data-animate-reveal-left class="intro-heading">
              Welche Reise hat mein Leben verändert?
              <img class="inline-block" :src="require('~/assets/images/chapter/5/malala/malala-compass.png')" width="120">
            </h2>
          </div>
        </ChapterIntro>
        <ChapterMalalaFive />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-5"
          :chapter="5"
          :is-malala="false"
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 data-animate-reveal-left class="intro-heading">
              Welche Reise hat mein Leben verändert?
              <img class="inline-block" :src="require('~/assets/images/chapter/5/greta/greta-compass.png')" width="120">
            </h2>
          </div>
        </ChapterIntro>
        <ChapterGretaFive />
      </template>
    </ChapterSwitcher>
  </div>
</template>
