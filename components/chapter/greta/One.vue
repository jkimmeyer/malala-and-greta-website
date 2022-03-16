<template>
  <div>
    <ChapterOneWho
      first-name="Greta"
      last-name="Thunberg"
      :image="require('~/assets/images/Greta-Face.png')"
      data-narrator-greta="Greta-Kap1.m4a"
    />

    <div class="pt-16 pb-96 max-w-screen-2xl 2xl:mx-auto mx-40">
      <div class="grid grid-cols-12">
        <div class="col-start-8 col-span-2">
          <ChapterOneQuote quote="“I have learned, you are never too small to make a difference.”" data-animate-parallax="400" />
        </div>

        <div class="has-large-margin col-start-1 col-span-4">
          <Video :path="require('~/assets/videos/greta/greta-kap1-1.mp4')" data-animate-reveal-left />
        </div>

        <div class="uppercase col-start-1 col-span-5 text is-white mt-8" data-animate-reveal-left data-animate-pin-end>
          Ich habe früh gelernt
        </div>

        <SvgsDownPath class="path col-start-2 col-span-2" />

        <div class="uppercase is-white text col-start-3 col-span-6 text-right" data-animate-reveal-right>
          mit welchen Problemen die Menschheit zu kämpfen hat
        </div>

        <div class="col-start-6 col-span-5 text-right mt-8">
          <Video :path="require('~/assets/videos/greta/greta-kap1-2.mp4')" data-animate-reveal-right />
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
  color: var(--color-text-greta-dark);
  text-transform: uppercase;
}

.text {
  @include uppercaseStyle;
  font-size: var(--font-size-body-1);
  color: var(--color-text-greta-dark);
}

.text.is-white {
  color: var(--color-text-neutral-light);
}
.path {
  transform: scaleX(1)
}
.has-large-margin {
  margin-top: 500px;
}

</style>
