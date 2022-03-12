<template>
  <div>
    <!-- images -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl" data-narrator-malala="Malala-Kap6-1">
      <div class="grid grid-cols-12">
        <DecoratedImage
          class="col-start-2 col-span-6"
          data-animate-parallax="50"
          :decoration-top-left="true"
          theme="malala"
          :path="require('~/assets/images/chapter/6/malala/malala-kap6-marriage.jpeg')"
        />
      </div>
      <div class="grid grid-cols-12">
        <DecoratedImage
          class="col-start-7 col-span-4"
          data-animate-parallax="-50"
          :decoration-top-right="true"
          theme="malala"
          :path="require('~/assets/images/chapter/6/malala/malala-kap6-degree.jpeg')"
        />
      </div>
    </div>
    <!-- -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section" data-narrator-malala="Malala-Kap6-2">
      <div class="grid grid-cols-12" section>
        <div class="text col-start-2 col-span-4">
          <VideoPlayer
            class="video-player"
            title="Meine Rede vor der UN"
            url="https://www.youtube-nocookie.com/embed/3rNhZu3ttIU"
            theme="malala"
            :preview-image-path="require('~/assets/images/chapter/6/malala/malala-kap6-speech.png')"
          />
        </div>
        <div class="text mt-5 col-start-3 col-span-7" data-animate-reveal-right>
          Meine Rede vor der UN
        </div>
        <div class="text-small mt-5 col-start-6 col-span-4" data-animate-reveal-right>
          Ich hatte immer nur einen Herzenswunsch: den Menschen zu helfen. Die Preise, das Geld, all das bedeuten mir nichts.
        </div>
      </div>
    </div>
    <!-- -->
    <div class="mx-40 2xl:mx-auto max-w-screen-xl section" data-narrator-malala="Malala-Kap6-3">
      <div class="grid grid-cols-12">
        <Scene
          class="col-start-1 col-span-4"
          data-animate-reveal-rigth
          scene-id="nobel"
          :height="526"
          :width="428"
          :fov="10"
          :near="0.1"
          :far="1000"
          :cam-z="80"
          :models="nobelScene"
          :points-material="true"
        />
        <FactsContainer
          class="col-start-7 col-span-4"
          data-animate-reveal-right
          theme="malala"
          size="sm"
          :facts="require('~/assets/contents/facts-malala-kap6.json')"
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
          theme="malala"
          :path="require('~/assets/images/chapter/6/malala/malala-kap6-portrait.jpg')"
        />
        <div class="text-small light col-start-7 col-span-4" data-animate-reveal-right data-narrator-malala="Malala-Kap6-4">
          “One child, one teacher, one pen and one book can change the world.”
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
  color: var(--color-text-malala-dark);
}

.text-small {
  font-family: var(--sans-serif-font);
  font-size: var(--font-size-body-2);
  font-style: italic;
  color: var(--color-text-malala-dark);
}
</style>
