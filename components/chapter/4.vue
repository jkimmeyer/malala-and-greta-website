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
        <ChapterMalala4 />
      </template>

      <template #greta>
        <Intro
          id="chapter-4"
          :chapter="4"
          :is-malala="false"
        >
          Welche Greta habe ich erlitten?
        </Intro>
        <ChapterGreta4 />
      </template>
    </ChapterSwitcher>
  </div>
</template>
