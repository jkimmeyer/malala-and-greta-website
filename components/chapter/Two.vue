<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="true"
        >
          Wo bin ich aufgewachsen?
        </ChapterIntro>
        <ChapterMalala2 />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-2"
          :chapter="2"
          :is-malala="false"
        >
          Wo bin ich aufgewachsen?
        </ChapterIntro>
        <ChapterGreta2 />
      </template>
    </ChapterSwitcher>
  </div>
</template>
