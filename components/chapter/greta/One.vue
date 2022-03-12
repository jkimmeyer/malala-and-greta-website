<template>
  <div>
    <ChapterOneWho
      first-name="Greta"
      last-name="Thunberg"
      :image="require('~/assets/images/Greta-Face.png')"
    />

    <div class="py-64 max-w-screen-2xl 2xl:mx-auto">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-2">
          <ChapterOneQuote quote="“I have learned, you are never too small to make a difference.”" data-animate-parallax="400" />
        </div>

        <div class="col-start-8 col-span-4">
          <Video :path="require('~/assets/videos/greta/greta-kap1-1.mp4')" data-animate-reveal-left />
        </div>

        <div class="uppercase col-start-8 col-span-4 text is-white" data-animate-reveal-left>
          Ich habe früh gelernt
        </div>

        <SvgsDownPath class="col-start-6 col-span-2 test" />

        <div class="uppercase text col-start-6 col-span-6 text-right" data-animate-reveal-right>
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
