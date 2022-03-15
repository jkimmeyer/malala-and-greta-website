<template>
  <div>
    <ChapterSwitcher>
      <template #malala>
        <ChapterIntro
          id="chapter-6"
          :chapter="6"
          :is-malala="true"
        >
          <div class="inline-flex flex-col ml-auto">
            <h2 data-animate-reveal-left class="intro-heading">
              Wo stehe ich <span class="under under-malala">jetzt</span>?
            </h2>
          </div>
        </ChapterIntro>
        <ChapterMalalaSix />
      </template>

      <template #greta>
        <ChapterIntro
          id="chapter-6"
          :chapter="6"
          :is-malala="false"
        >
          <div class="inline-flex flex-col ml-auto" data-narrator-greta="Greta-Kap6-1.m4a">
            <h2 data-animate-reveal-left class="intro-heading">
              Wo stehe ich <span class="under under-greta">jetzt</span>?
            </h2>
          </div>
        </chapterintro>
        <ChapterGretaSix />
      </template>
    </ChapterSwitcher>
  </div>
</template>
<style scoped>
.under-malala{
  background: url('~@/assets/images/chapter/6/malala/malala-lines.png');
  background-repeat: no-repeat;
  background-size: contain;
}

.under-greta{
  background: url('~@/assets/images/chapter/6/greta/greta-lines.png');
  background-repeat: no-repeat;
  background-size: contain;
}
@media (max-width: 1024px) {
  .under {
    margin: -50px;
    padding: 50px;
    background-position: 0% 90%;
  }
}
@media (min-width: 1024px) and (max-width: 1280px) {
  .under {
    margin: -60px;
    padding: 60px;
    background-position: 0% 95%;
  }
}
@media (min-width: 1280px) {
  .under {
    margin: -80px;
    padding: 80px;
    background-position: 0% 95%;
  }
}
</style>
