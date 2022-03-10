<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-1"
          :chapter="1"
          :is-malala="true"
        />
        <ChapterMalalaOne />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-1"
          :chapter="1"
          :is-malala="false"
        />
        <ChapterGretaOne />
      </template>
    </ChapterSwitcher>
  </div>
</template>
