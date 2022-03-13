<template>
  <div class="four" data-background-malala>
    <div class="mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12" data-narrator-malala="Malala-Kap4-1.m4a">
        <Video
          class="col-start-0 col-span-8 pr-8"
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

    <div class="section mx-50 2xl:mx-auto max-w-screen-xl" data-animate-fade-to-dark-malala data-narrator-malala="Malala-Kap4-2.m4a">
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
        <Scene
          scene-id="bullet"
          :height="400"
          :width="750"
          :fov="10"
          :near="0.1"
          :far="1000"
          :cam-y="8"
          :cam-z="30"
          :models="bulletScene"
          data-animate-parallax="-150"
          class="row-start-1 row-span-1 col-start-1 col-span-12 bullet"
        />
        <div class="row-start-2 row-span-1 text-small is-light col-start-3 col-span-4" data-animate-reveal-rigth data-narrator-malala="Malala-Kap4-3.m4a">
          Dann hörte ich nur noch den Schuss. Alles wurde schwarz...
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import bullet from '~~/components/model/bullet.vue'

export default defineComponent({
  setup () {
    const bulletScene = [bullet]
    return {
      bulletScene
    }
  }
})
</script>

<style lang="scss" scoped>
@mixin uppercaseStyle{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-malala-dark);
}

.bullet{
  margin: auto;
}

.four {
  height: 100%;
  background-color: var(--color-background-greta);
}

.section {
  margin-top: 20vw;
}

.text {
  @include uppercaseStyle;
  font-size: 3rem;
}

.text-small {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-2);
  font-style: italic;
  color: var(--color-text-malala-dark);
  font-weight:300;
}

.image-bus-assassination {
  z-index: var(--z-index-1);
  margin-top: 10vw;
}

.is-light {
  color: var(--color-text-malala);
}

</style>
