<template>
  <div>
    <ChapterOneWho
      first-name="Malala"
      last-name="Yousafzai"
      :image="require('~/assets/images/Malala-Face.png')"
      data-narrator-malala="Malala-Kap1-1.m4a"
    />

    <div class="pt-8 pb-64 mx-40 2xl:mx-auto max-w-screen-xl" data-controls-disable-hints>
      <div class="grid grid-cols-12">
        <div class="pb-8 col-start-9 col-span-3">
          <ChapterOneQuote quote="“I tell my story not because it is unique, but because it is the story of many girls.”" data-animate-parallax="-200" />
        </div>

        <div class="col-start-1 col-span-5">
          <Video :path="require('~/assets/videos/malala/malala-kap1-1.mp4')" data-animate-reveal-left />
        </div>

        <div class="col-start-1 col-span-6 text is-white mt-4" data-animate-reveal-left>
          Ich habe die Bedeutung meiner Stimme entdeckt
        </div>

        <div class="col-start-3 col-span-12">
          <SvgsDownPath svg-id="2" />
        </div>

        <div class="text-right text col-start-4 col-span-6 mb-4" data-animate-reveal-right>
          Als ich zum Schweigen gebracht werden sollte
        </div>

        <div class="col-start-5 col-span-4">
          <Video :path="require('~/assets/videos/malala/malala-kap1-2.mp4')" data-animate-reveal-right />
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@mixin bigText{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  color: var(--color-text-malala-dark);
  font-style: italic;
}
.text {
  @include bigText;
  font-size: var(--font-size-body-1);
  color: var(--color-text-malala-dark);
}
.text.is-white {
  color: var(--color-text-neutral-light);
}
</style>
