<template>
  <div class="four" data-background-greta data-narrator-greta="Greta-Kap4-1.m4a">
    <div class="mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12">
        <Video
          :path="require('~/assets/videos/greta/greta-kap4-1.mp4')"
          class="col-start-0 col-span-8 pr-8"
          data-animate-parallax="100"
        />
        <div class="text text-right col-start-9 col-span-4" data-animate-reveal-right>
          Bei mir wurde das Asperger-Syndrom diagnostiziert
        </div>
      </div>

      <div class="grid grid-cols-12">
        <FactsContainer
          class="image-bus-assassination col-start-6 col-span-6"
          data-animate-parallax="-100"
          theme="greta"
          size="sm"
          :facts="require('~/assets/contents/facts-greta-kap4.json')"
          format="rect"
        />
      </div>
    </div>

    <div class="mx-40 2xl:mx-auto max-w-screen-xl section" data-animate-fade-to-dark-greta data-controls-dark-light data-narrator-greta="Greta-Kap4-2.m4a">
      <div class="grid grid-cols-12 items-center">
        <div class="text-small col-start-4 col-span-2 mb-10" data-animate-reveal-right>
          Als Asperger-Autistin bräuchte sie Hilfe statt Aufmerksamkeit
        </div>
        <div class="text-small col-start-7 col-span-2 mb-10" data-animate-reveal-right>
          Sie geht nicht zur Schule und animiert andere Jugendliche zum Schwänzen
        </div>
        <DecoratedImage
          class="col-start-3 col-span-8"
          :path="require('~/assets/images/chapter/4/greta/greta-kap4-human-shapes.png')"
          theme="greta"
        />
      </div>
    </div>

    <div class="mx-40 2xl:mx-auto max-w-screen-xl mt-96 mb-96">
      <div class="grid grid-cols-12">
        <DecoratedImage
          class="col-start-1 col-span-4"
          data-animate-reveal-rigth
          :decoration-top-right="true"
          theme="greta"
          :path="require('~/assets/images/chapter/4/greta/greta-kap4-umbrella.png')"
        />
        <div class="text-small is-light col-start-6 col-span-5" data-animate-reveal-right data-narrator-greta="Greta-Kap4-3.m4a">
          “Is the microphone on? Did you hear me? Is my English ok?
          Because I am beginning to wonder.<br>

          You lied to us. During the last six month I have traveled around Europe for hundreds of hours repeating these life-changing words over and over again.
          But nothing has changed. In fact, the emissions are still rising.”
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

@mixin bigText{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  color: var(--color-text-greta-dark);
  font-style: italic;
}

.four {
  height: 100%;
  background-color: var(--color-background-greta);
}

.section {
  margin-top: 700px;
}

.text {
  @include bigText;
  font-size: 3rem;
}

.text-small {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-2);
  font-style: italic;
  color: var(--color-text-greta-dark);
  font-weight:300;
}

.image-bus-assassination {
  z-index: var(--z-index-1);
  margin-top: 10vw;
}

.is-light {
  color: var(--color-text-greta);
}
</style>
