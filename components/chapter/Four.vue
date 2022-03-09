<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-4"
          :chapter="4"
          :is-malala="true"
        >
          Welche Rückschläge habe ich erlitten?
        </ChapterIntro>
        <ChapterMalalaFour />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-4"
          :chapter="4"
          :is-malala="false"
        >
          Welche Greta habe ich erlitten?
        </ChapterIntro>
        <ChapterMalalaFour />
      </template>
    </ChapterSwitcher>
  </div>
</template>
