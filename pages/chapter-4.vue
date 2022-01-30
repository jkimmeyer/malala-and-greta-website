<template>
  <div class="chapter">
    <div class="section">
      <div class="grid">
        <div class="text-1 col-8-6-s reveal-right">
          Der 9. Oktober 2012 fing an wie jeder andere
        </div>
      </div>

      <div class="grid">
        <div class="video-1 col-1-7-s parallax">
          <video loop autoplay muted width="100%" height="100%">
            <source
              src="@/assets/videos/malala-kap4-1.mp4"
              type="video/mp4"
            >
            Sorry, your browser doesn't support embedded videos.
          </video>
        </div>
      </div>

      <div class="grid">
        <div class="image-1 col-7-4-s parallax-fast">
          <img src="@/assets/images/malala-kapt4-bus.jpeg">
        </div>
      </div>
    </div>

    <div class="section">
      <div class="grid">
        <div class="text-7 col-4-2-s reveal-right">
          Lorem ipsum bla bla bla
        </div>
        <div class="text-8 col-7-2-s reveal-right">
          Hallo wie geht es dir?
        </div>
        <div class="image-2 col-3-8-s">
          <img class="pagesection-image" src="@/assets/images/malala-kap4-human-shapes.png">
        </div>
      </div>
    </div>

    <div class="section colorfade">
      <Scene
        scene-id="EINS"
        :height="500"
        :width="1000"
        :fov="80"
        :near="0.1"
        :far="1000"
        :cam-x="-5"
        :cam-y="-14"
        :cam-z="10"
        :models="models"
      />
      <div class="grid">
        <div class="text-3 col-4-6-s reveal-right">
          Dann hörte ich nur noch den Schuss. Alles wurde schwarz
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useAnimation } from '~~/composables/useAnimation'
// import { useColor } from '~~/composables/useColor'
import nobel from '~~/components/nobel.vue'

export default defineComponent({
  setup () {
    const animation = useAnimation()
    onMounted(() => {
      setTimeout(() => {
        animation.animateAll()
        // const color = useColor(document)
        // animation.animateBackgroundColor('.colorfade', color.colorTextLight)
        animation.animateBackgroundColor('.colorfade', '#957C57')
      }, 50)
    })
    const models = [nobel]
    return {
      models
    }
  }
})
</script>
<style lang="scss" scoped>
@import "~/assets/stylesheets/globals/typography-styles.scss";
@import "~/assets/stylesheets/globals/customgrid.scss";

.chapter {
  padding-top: 500px;
  padding-bottom: 500px;
}

.section {
  margin: 20vw 12vw 10vw 12vw;
}

.text-1 {
  @include body1;
  z-index: 1;
  text-align: right;
}

.text-2 {
  @include body2;
}

.text-3 {
  @include body2;
  margin-top: 5vw;
}
.text-7 {
  @include body2;
  margin-top: -3vw;
}
.text-8 {
  @include body2;
  margin-top: -6vw;
}

.video-1 {
  margin-top: -10vw;
  border-radius: 20px;
  overflow: hidden;
  object-fit: contain;
}
.video-1 video {
  object-fit:contain;
  display: block;
}

.image-1 {
  z-index: 1;
  margin-top: 10vw;
}

@media only screen and (min-width: 1920px) {
  .section {
    width: 1460px;
    margin: 20vw auto 10vw auto;
  }
}
</style>
