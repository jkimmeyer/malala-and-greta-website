<template>
  <div>
    <!-- images -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12" data-sound-greta-start="crowd-cheering.mp3">
        <DecoratedImage
          class="col-start-2 col-span-6"
          data-animate-parallax="50"
          :decoration-top-left="true"
          theme="greta"
          :path="require('~/assets/images/chapter/6/greta/greta-kap6-friday-for-future.webp')"
        />
      </div>
      <div class="grid grid-cols-12">
        <DecoratedImage
          class="col-start-7 col-span-4"
          data-animate-parallax="-50"
          :decoration-top-right="true"
          theme="greta"
          :path="require('~/assets/images/chapter/6/greta/greta-kap6-protest.jpeg')"
        />
      </div>
    </div>
    <!-- -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section" data-sound-greta-end="crowd-cheering.mp3">
      <div class="grid grid-cols-12" section>
        <div class="text col-start-2 col-span-4">
          <VideoPlayer
            class="video-player"
            title="Meine Rede vor dem UN-Klimagipfel"
            url="https://www.youtube.com/embed/SfCUcDAlSKk"
            theme="greta"
            :preview-image-path="require('~/assets/images/chapter/6/greta/greta-kap6-speech.jpeg')"
          />
        </div>
        <div class="text mt-5 col-start-3 col-span-7 flex flex-col" data-animate-reveal-right data-narrator-greta="Greta-Kap6-2.m4a">
          <span>Meine Rede vor dem</span>
          <span>UN-Klimagipfel</span>
        </div>
        <div class="text-small pt-16 col-start-6 col-span-4" data-animate-reveal-right>
          Wenn man die Größe des Klima-Problems begriffen hat, kriegt man es nicht mehr aus dem Kopf
        </div>
      </div>
    </div>
    <!-- -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section" data-narrator-greta="Greta-Kap6-3.m4a">
      <div class="grid grid-cols-12">
        <Scene
          class="col-start-1 col-span-4"
          data-animate-reveal-rigth
          scene-id="prix"
          :height="526"
          :width="428"
          :fov="10"
          :near="0.1"
          :far="1000"
          :cam-z="30"
          :models="prixScene"
        />
        <FactsContainer
          class="col-start-7 col-span-4"
          data-animate-reveal-right
          theme="greta"
          size="sm"
          :facts="require('~/assets/contents/facts-greta-kap6.json')"
          format="rect"
        />
      </div>
    </div>
    <!-- -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section mb-96">
      <div class="grid grid-cols-12 items-center">
        <DecoratedImage
          class="col-start-2 col-span-4"
          data-animate-reveal-rigth
          :decoration-top-right="true"
          theme="greta"
          :path="require('~/assets/images/chapter/6/greta/greta-kap6-portrait.jpeg')"
        />
        <div class="text-small light col-start-7 col-span-4" data-animate-reveal-right data-narrator-greta="Greta-Kap6-4.m4a">
          “I want you to panic. I want you to feel the fear I feel every day.”
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import prix from '~~/components/model/prix.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  components: { VideoPlayer },
  data () {
    return {
      prixScene: [prix]
    }
  }
}
</script>

<style lang="scss" scoped>
@mixin uppercaseStyle{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-greta-dark);
  text-transform: uppercase;
}

@mixin body2 {
  font-family: Lato, sans-serif;
  font-size: 30px;
  font-style: italic;
  color: var(--color-text-greta-dark);
}

.section {
  margin-top: 20vw;
}

.video-player {
  width: 400px;
  height: 270px;
}

.text {
  @include uppercaseStyle;
  line-height: 1;
  font-size: 3rem;
  color: var(--color-text-greta-dark);
}

.text-small {
  @include body2;
  line-height: 1;
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
}

</style>
