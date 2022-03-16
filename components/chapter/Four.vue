<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-4"
          :chapter="4"
          :is-malala="true"
          data-chapters-3-4
        />
        <ChapterMalalaFour />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-4"
          :chapter="4"
          :is-malala="false"
        />
        <ChapterGretaFour />
      </template>
    </ChapterSwitcher>
  </div>
</template>
