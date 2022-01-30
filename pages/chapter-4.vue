<template>
  <div class="chapter ">
    <div class="section">
      <div class="container">
        <div class="text-1 col-8-6-s reveal-right ">
          Der 9. Oktober 2012 fing an wie jeder andere
        </div>
      </div>

      <div class="container">
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

      <div class="container">
        <div class="image-1 col-7-4-s parallax-fast">
          <img src="@/assets/images/malala-kapt4-bus.jpeg">
        </div>
      </div>
    </div>

    <div class="section">
      <div class="pagesection pin">
        <div class="container">
          <div class="image-2 col-3-8-s ">
            <div class="text-8 reveal-right">
              Lorem ipsum bla bla bla
            </div>
            <img class="pagesection-image" src="@/assets/images/malala-kap4-human-shapes.png">
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="changeme">
        <Scene
          scene-id="EINS"
          :height="1000"
          :width="1000"
          :fov="70"
          :near="0.1"
          :far="1000"
          :models="models"
        />
        <div class="text-3 reveal-right">
          Dann hörte ich nur noch den Schuss. Alles wurde schwarz
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useAnimation } from '~~/composables/useAnimation'
import nobel from '~~/components/nobel.vue'

export default defineComponent({
  setup () {
    const animation = useAnimation()
    onMounted(() => {
      setTimeout(() => {
        animation.animateAll()
        const style = getComputedStyle(document.body)
        const color = style.getPropertyValue('--cornflower')

        animation.animateBackgroundColor('.changeme', '#957C57')
        // animation.animateBackgroundColor('.section', 'red')
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

.section {
  margin-top: 20vw;
  margin-bottom: 20vw;
  margin: 0 12vw;
}
.pagesection {
  height: 100vh;
}
.pagesection-image {
  display: block;
}

.chapter {
  padding-top: 1000px;
  padding-bottom: 1000px;
}

.text-1 {
  z-index: 1;
  @include body1;
  text-align: right;
}
.changeme {
  height: 400px;
}

.text-2 {
  @include body2;
}

.text-3 {
  @include body2;
}

.video-1 {
  margin-top: -10vw;
  border-radius: 20px;
  overflow: hidden;
  background-color: rgb(117, 114, 114);
  object-fit:contain;
}
.video-1 video {
  object-fit:contain;
  display: block;
}

.image-1 {
  z-index: 1;
  margin-top: 10vw;
  background-color: rgb(172, 130, 130);
}
.image-2 {
  padding-top: 7vw;
}

.image-3, .image-4 {
  width: 240px;
  height: 200px;
  background-color: rgb(117, 114, 114);
}

@media only screen and (max-width: 1920px) {
  .body1 {
    font-size: 40px;
  }

  .body2 {
    font-size: 20px;
  }
}
@media only screen and (min-width: 1920px) {
  .section {
    width: 1460px;
    margin: 0 auto;
    background-color: transparent;/*todo remove*/
  }
}
</style>
