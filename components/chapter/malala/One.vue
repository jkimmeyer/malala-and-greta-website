<template>
  <div>
    <ChapterOneWho
      first-name="Malala"
      last-name="Yousafzai"
      :image="require('~/assets/images/Malala-Face.png')"
      data-narrator-malala="Malala-Kap1-1.m4a"
    />

    <div class="pt-16 pb-96 max-w-screen-2xl 2xl:mx-auto mx-40" data-controls-disable-hints>
      <div class="grid grid-cols-12">
        <div class="col-start-8 col-span-2">
          <ChapterOneQuote quote="“I tell my story not because it is unique, but because it is the story of many girls.”" data-animate-parallax="600" />
        </div>

        <div class="has-large-margin col-start-1 col-span-4">
          <Video :path="require('~/assets/videos/malala/malala-kap1-1.mp4')" data-animate-reveal-left />
        </div>

        <div class="uppercase col-start-1 col-span-5 text is-white mt-8" data-animate-reveal-left data-animate-pin-end>
          Ich habe die Bedeutung meiner Stimme entdeckt
        </div>

        <SvgsDownPath class="path col-start-2 col-span-2" />

        <div class="uppercase is-white text col-start-3 col-span-6" data-animate-reveal-right>
          Als ich zum Schweigen gebracht werden sollte
        </div>

        <div class="col-start-6 col-span-5 text-right mt-8">
          <Video :path="require('~/assets/videos/malala/malala-kap1-2.mp4')" data-animate-reveal-right />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@mixin uppercaseStyle{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-malala-dark);
  text-transform: uppercase;
}

.text {
  @include uppercaseStyle;
  font-size: var(--font-size-body-1);
  color: var(--color-text-malala-dark);
}

.text.is-white {
  color: var(--color-text-neutral-light);
}
.has-large-margin {
  margin-top: 500px;
}
.path {
  transform: scaleX(1)
}
</style>
