<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-6"
          :chapter="6"
          :is-malala="true"
        />
        <ChapterMalalaSix />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-6"
          :chapter="6"
          :is-malala="false"
        />
        <ChapterMalalaSix />
      </template>
    </ChapterSwitcher>
  </div>
</template>
