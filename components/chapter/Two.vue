<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="true"
        />
        <ChapterMalalaTwo />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="false"
        />
        <ChapterGretaTwo />
      </template>
    </ChapterSwitcher>
  </div>
</template>
