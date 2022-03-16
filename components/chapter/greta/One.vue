<template>
  <div>
    <ChapterOneWho
      first-name="Greta"
      last-name="Thunberg"
      :image="require('~/assets/images/Greta-Face.png')"
      data-narrator-greta="Greta-Kap1-1.m4a"
    />

    <div class="pt-8 pb-64 mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12">
        <div class="col-start-9 col-span-3">
          <ChapterOneQuote quote="“I have learned, you are never too small to make a difference.”" data-animate-parallax="-200" />
        </div>

        <div class="pb-8 col-start-1 col-span-5">
          <Video :path="require('~/assets/videos/greta/greta-kap1-1.mp4')" data-animate-reveal-left />
        </div>

        <div class="uppercase col-start-1 col-span-6 text is-white mt-4" data-animate-reveal-left>
          Ich habe früh gelernt
        </div>

        <div class="col-start-3 col-span-12">
          <SvgsDownPath />
        </div>

        <div class="uppercase text-right text col-start-4 col-span-6 mb-4" data-animate-reveal-right>
          mit welchen Problemen die Menschheit zu kämpfen hat
        </div>

        <div class="col-start-6 col-span-4 text-right">
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
.test {
  transform: scaleX(-1);
}
.text {
  @include uppercaseStyle;
  font-size: var(--font-size-body-1);
  color: var(--color-text-greta-dark);
}
.text.is-white {
  color: var(--color-text-neutral-light);
}
</style>
