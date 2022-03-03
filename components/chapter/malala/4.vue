<template>
  <div>
    <div class="mx-40 2xl:m-auto max-w-screen-xl">
      <div class="grid grid-cols-12">
        <div class="col-start-0 col-span-8" data-animate-parallax="100">
          <Video path="/videos/malala-kap4-1.mp4" class="video-1" />
        </div>
        <div class="text text-right col-start-9 col-span-4" data-narrator-malala="bullet-silence" data-animate-reveal-right>
          Der 9. Oktober 2012 fing an wie jeder andere
        </div>
      </div>

      <div class="grid grid-cols-12">
        <div class="image-bus-assassination col-start-7 col-span-4" data-animate-parallax="-100">
          <Image
            :decoration-top-left="true"
            :decoration-top-right="true"
            :decoration-bottom-left="true"
            :decoration-bottom-right="true"
            theme="malala"
            path="/images/chapter/4/malala/malala-kapt4-bus.jpeg"
          />
        </div>
      </div>
    </div>

    <div class="section mx-40 2xl:m-auto max-w-screen-xl" data-animate-fade-to-dark-malala>
      <div class="grid">
        <div class="text-small text-7 col-start-4 col-span-2" data-animate-reveal-right>
          Lorem ipsum bla bla bla
        </div>
        <div class="text-small text-8 col-start-7 col-span-2" data-animate-reveal-right>
          Hallo wie geht es dir?
        </div>
        <div class="image-human-shapes col-start-3 col-span-8">
          <Image class="pagesection-image" path="/images/chapter/4/malala/malala-kap4-human-shapes.png" :is-malala="true" />
        </div>
      </div>
    </div>

    <div class="section mx-40 2xl:m-auto max-w-screen-xl">
      <div class="grid grid-cols-12">
        <div class="text-small text-3 col-start-3 col-span-4" data-narrator-malala="forget-about-pain" data-animate-reveal-rigth>
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

.text-1 {
  z-index: 1;
  text-align: right;
}

.text-3 {
  margin-top: 5vw;
}

.text-7 {
  margin-top: -3vw;
}

.text-8 {
  margin-top: -6vw;
}

.video-1 {
  margin-top: -5vw;
}

.image-bus-assassination {
  z-index: var(--z-index-1);
  margin-top: 10vw;
}
</style>
