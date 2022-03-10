<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-3"
          :chapter="3"
          :is-malala="true"
        />
        <ChapterMalalaThree />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-3"
          :chapter="3"
          :is-malala="false"
        />
        <ChapterGretaThree />
      </template>
    </ChapterSwitcher>
  </div>
</template>
