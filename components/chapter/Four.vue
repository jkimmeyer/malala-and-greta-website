<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <Intro
          id="chapter-4"
          :chapter="4"
          :is-malala="true"
        >
          Welche Rückschläge habe ich erlitten?
        </Intro>
        <ChapterMalalaFour />
      </template>

      <template #greta>
        <Intro
          id="chapter-4"
          :chapter="4"
          :is-malala="false"
        >
          Welche Greta habe ich erlitten?
        </Intro>
        <ChapterMalalaFour />
      </template>
    </ChapterSwitcher>
  </div>
</template>
