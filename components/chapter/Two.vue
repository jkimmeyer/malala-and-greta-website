<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="true"
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 class="intro-heading">
              Wo bin ich aufgewachsen?
              <img class="inline-block" :src="require('~/assets/images/chapter/2/malala/malala-intro-house.png')" width="120">
            </h2>
          </div>
        </ChapterIntro>
        <ChapterMalalaTwo />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="false"
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 class="intro-heading">
              Wo bin ich aufgewachsen?
              <img class="inline-block" :src="require('~/assets/images/chapter/2/greta/greta-intro-house.png')" width="120">
            </h2>
          </div>
        </ChapterIntro>
        <ChapterGretaTwo />
      </template>
    </ChapterSwitcher>
  </div>
</template>
<style scoped>
.intro-heading {
  font-size: inherit;
}
</style>
