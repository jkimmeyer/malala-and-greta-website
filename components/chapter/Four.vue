<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-4"
          :chapter="4"
          :is-malala="true"
        />
        <ChapterMalalaFour />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-4"
          :chapter="4"
          :is-malala="false"
        />
        <ChapterMalalaFour />
      </template>
    </ChapterSwitcher>
  </div>
</template>
