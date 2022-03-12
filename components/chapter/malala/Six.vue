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
        <div class="text mt-5 col-start-3 col-span-9" data-animate-reveal-right>
          Meine Rede vor der UN
        </div>
        <div class="text-small pt-16 col-start-6 col-span-4" data-animate-reveal-right>
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

<style lang="scss" scoped>
@mixin uppercaseStyle{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-malala-dark);
  text-transform: uppercase;
}

@mixin body2 {
  font-family: Lato, sans-serif;
  font-size: 30px;
  font-style: italic;
  color: var(--color-text-malala-dark);
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
  color: var(--color-text-malala-dark);
}

.text-small {
  @include body2;
  line-height: 1;
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
}
</style>
