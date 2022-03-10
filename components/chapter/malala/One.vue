<template>
  <div>
    <ChapterOneWho
      first-name="Malala"
      last-name="Yousafzai"
      :image="require('~/assets/images/Malala-Face.png')"
      data-narrator-malala="Malala-Kap1-1"
    />

    <div class="p-32">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-4">
          <Video :path="require('~/assets/videos/malala/malala-kap1-1.mp4')" data-animate-reveal-left />
        </div>

        <div class="uppercase col-start-1 col-span-6 text is-white" data-animate-reveal-left>
          Ich habe die Bedeutung meiner Stimme entdeckt
        </div>

        <div class="col-start-10 col-span-2">
          <ChapterOneQuote quote="“I tell my story not because it is unique, but because it is the story of many girls.”" data-animate-parallax="600" />
        </div>

        <SvgsDownPath class="col-start-3 col-span-12" />

        <div class="uppercase text col-start-4 col-span-6" data-animate-reveal-right>
          Als ich zum Schweigen gebracht werden sollte
        </div>

        <div class="col-start-4 col-span-4">
          <Video :path="require('~/assets/videos/malala/malala-kap1-2.mp4')" data-animate-reveal-right />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.text {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-1);
  color: var(--color-text-malala-dark);
}

.text.is-white {
  color: var(--color-text-neutral-light);
}
</style>
