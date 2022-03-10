<template>
  <div>
    <!-- images -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl">
      <div class="grid grid-cols-12">
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
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section">
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
        <div class="text mt-5 col-start-3 col-span-8" data-animate-reveal-right>
          Meine Rede vor dem UN-Klimagipfel
        </div>
        <div class="text-small mt-5 col-start-6 col-span-4" data-animate-reveal-right>
          Wenn man die Größe des Klima-Problems begriffen hat, kriegt man es nicht mehr aus dem Kopf
        </div>
      </div>
    </div>
    <!-- -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section">
      <div class="grid grid-cols-12">
        <Scene
          v-if="false"
          class="col-start-1 col-span-4"
          data-animate-reveal-rigth
          scene-id="3d-lamp"
          :height="526"
          :width="428"
          :fov="80"
          :near="0.1"
          :far="1000"
          :cam-x="-5"
          :cam-y="-14"
          :cam-z="10"
          :models="nobelScene"
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
        <div class="text-small light col-start-7 col-span-4" data-animate-reveal-right>
          “I want you to panic. I want you to feel the fear I feel every day.”
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import nobel from '~~/components/model/nobel.vue'
import VideoPlayer from '~/components/VideoPlayer.vue'

export default {
  components: { VideoPlayer },
  data () {
    return {
      nobelScene: [nobel]
    }
  }
}
</script>

<style scoped>
.section {
  margin-top: 20vw;
}

.video-player {
  width: 400px;
  height: 270px;
}

.text {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-1);
  color: var(--color-text-greta-dark);
}

.text-small {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-2);
  font-style: italic;
  color: var(--color-text-greta-dark);
}
</style>
