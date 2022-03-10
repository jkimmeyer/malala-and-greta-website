<template>
  <div>
    <div class="mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12" data-narrator-malala="Malala-Kap4-1">
        <Video
          class="col-start-0 col-span-8"
          data-animate-parallax="100"
          :path="require('~/assets/videos/malala/malala-kap4-1.mp4')"
        />
        <div class="text text-right col-start-9 col-span-4" data-animate-reveal-right>
          Der 9. Oktober 2012 fing an wie jeder andere
        </div>
      </div>

      <div class="grid grid-cols-12">
        <DecoratedImage
          class="image-bus-assassination col-start-7 col-span-4"
          data-animate-parallax="-100"
          :decoration-top-right="true"
          :decoration-bottom-left="true"
          theme="malala"
          :path="require('~/assets/images/chapter/4/malala/malala-kap4-bus.jpeg')"
        />
      </div>
    </div>

    <div class="section mx-50 2xl:mx-auto max-w-screen-xl" data-animate-fade-to-dark-malala data-narrator-malala="Malala-Kap4-2">
      <div class="grid grid-cols-12">
        <div class="text-small col-start-4 col-span-2 mb-10" data-animate-reveal-right />
        <div class="text-small col-start-7 col-span-2 mb-10" data-animate-reveal-right>
          Wer von euch ist Malala?
        </div>
        <DecoratedImage class="col-start-3 col-span-8" :path="require('~/assets/images/chapter/4/malala/malala-kap4-human-shapes.png')" theme="malala" />
      </div>
    </div>

    <div class="section mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12">
        <div class="text-small col-start-3 col-span-4" data-animate-reveal-rigth data-narrator-malala="Malala-Kap4-3">
          Dann hörte ich nur noch den Schuss. Alles wurde schwarz
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.section {
  margin-top: 20vw;
}

.text {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-1);
  color: var(--color-text-malala-dark);
}

.text-small {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-2);
  font-style: italic;
  color: var(--color-text-malala-dark);
}

.image-bus-assassination {
  z-index: var(--z-index-1);
  margin-top: 10vw;
}

</style>
