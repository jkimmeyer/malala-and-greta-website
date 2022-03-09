<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="true"
        >
          Wo bin ich aufgewachsen?
        </ChapterIntro>
        <ChapterMalalaTwo />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="false"
        >
          Wo bin ich aufgewachsen?
        </ChapterIntro>
        <ChapterGretaTwo />
      </template>
    </ChapterSwitcher>
  </div>
</template>
