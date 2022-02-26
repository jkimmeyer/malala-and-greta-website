<template>
  <div>
    <div class="m-auto max-w-screen-xl">
      <div class="grid">
        <div data-animate-parallax="100">
          <Video path="/videos/malala-kap4-1.mp4" class="video-1" />
        </div>
        <div class="text text-right" data-narrator-malala="bullet-silence" data-animate-reveal-right>
          Der 9. Oktober 2012 fing an wie jeder andere
        </div>
      </div>

      <div class="grid">
        <div class="image-bus-assassination col-7-4-s" data-animate-parallax="-100">
          <Image
            :decoration-top-left="true"
            :decoration-top-right="true"
            :decoration-bottom-left="true"
            :decoration-bottom-right="true"
            :is-malala="true"
            path="/images/chapter/4/malala/malala-kapt4-bus.jpeg"
          />
        </div>
      </div>
    </div>

    <div class="section" data-animate-page-color-fade>
      <div class="grid">
        <div class="text-7 col-4-2-s" data-animate-reveal-right>
          Lorem ipsum bla bla bla
        </div>
        <div class="text-8 col-7-2-s" data-animate-reveal-right>
          Hallo wie geht es dir?
        </div>
        <div class="image-human-shapes col-3-8-s">
          <Image class="pagesection-image" path="/images/chapter/4/malala/malala-kap4-human-shapes.png" :is-malala="true" />
        </div>
      </div>
    </div>

    <div class="section">
      <div class="grid">
        <div class="text-3 col-4-6-s" data-narrator-malala="forget-about-pain" data-animate-reveal-rigth>
          Dann hörte ich nur noch den Schuss. Alles wurde schwarz
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
.section {
  max-width: 1280px;
  margin: auto;
}

.text {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-1);
  color: var(--color-text-dark);
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
  overflow: hidden;
  margin-top: -10vw;
  border-radius: 20px;
}

.image-bus-assassination {
  z-index: var(--z-index-1);
  margin-top: 10vw;
}

</style>
