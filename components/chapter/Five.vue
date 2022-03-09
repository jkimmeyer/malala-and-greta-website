<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-5"
          :chapter="5"
          :is-malala="true"
        />
        <ChapterMalalaFive />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-5"
          :chapter="5"
          :is-malala="false"
        />
        <ChapterMalalaFive />
      </template>
    </ChapterSwitcher>
  </div>
</template>
