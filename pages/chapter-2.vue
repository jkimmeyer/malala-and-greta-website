<template>
  <div id="viewport">
    <div id="content">
      <div class="chapter">
        <div class="section page-color-fade">
          <!-- <div class="section">
            <div class="grid">
              <div class="text-1 col-6-8-s reveal-right">
                "Früher blieb ich nachts beim Lernen wach, weil ich die Beste sein wollte. Ich liebte es, mich mit anderen zu messen und erhielt viele Auszeichnungen für gute Noten."
              </div>
            </div>
            <div class="grid">
              <div class="image-2 col-3-8-s">
                <img class="pagesection-image" src="@/assets/images/malala-kap4-human-shapes.png">
              </div>
            </div>
          <div class="image-1 col-1-6-s parallax-fast">
            <img src="@/assets/images/malala-kapt2-childhood.jpg">
          </div>
        </div>
          <div class="section page-color-fade">
            -->
          <div class="grid">
            <div class="chapter-header col-1-6-s">
              KAPITEL 2
            </div>
            <div class="chapter-title col-1-9-s">
              Wo bin ich aufgewachsen?
            </div>
            <div class="chapter-img col-10-11-s">
              <img src="@/assets/images/kapt2/house.png">
            </div>
          </div>
        </div>

        <div class="section">
          <div class="grid">
            <div class="video-mingora col-8-10-s">
              <video loop autoplay muted>
                <source
                  src="@/assets/videos/kapt2/Mingora.mp4"
                  type="video/mp4"
                >
                Sorry, your browser doesn't support embedded videos.
              </video>
              <div class="text-mingora reveal-right">
                DIE STRAßEN PAKISTANS.
              </div>
            </div>
            <div class="scene-mingora col-1-7-s reveal">
              <Scene
                scene-id="EINS"
                :height="1000"
                :width="1000"
                :fov="70"
                :near="0.01"
                :far="1000"
                :models="models"
                :cam-z="6"
              />
            </div>
          </div>
        </div>

        <div class="section">
          <div class="grid">
            <div class="image-family-1 col-2-5-s">
              <img src="@/assets/images/kapt2/malala-vater.jpg">
            </div>
            <div class="text-family-1 col-1-4-s reveal-left">
              Mein Vater war entschlossen, mir jede Gelegenheit zu geben, die ein Junge haben würde.
            </div>
            <div class="image-family-2 col-5-5-s">
              <img src="@/assets/images/kapt2/malala-familie.jpg">
            </div>
            <div class="image-family-3 col-3-5-s">
              <img src="@/assets/images/kapt2/malala-schule-vater.jpg">
            </div>
          </div>

          <div class="grid">
            <div class="image-school col-8-3-s parallax">
              <img src="@/assets/images/kapt2/school-malala.png">
            </div>
            <div class="video-school col-4-6-s parallax">
              <video loop autoplay muted>
                <source
                  src="@/assets/videos/kapt2/malala-kapt2-1.mp4"
                  type="video/mp4"
                >
                Sorry, your browser doesn't support embedded videos.
              </video>
            </div>
          </div>

          <div class="section taliban-section">
            <div class="grid">
              <div class="text-taliban-1 col-1-6-s">
                UND DANN ÜBERNAHMEN DIE TALIBAN DIE KONTROLLE
              </div>
              <div class="image-tacks-1 col-2-1-s">
                <img src="@/assets/images/kapt2/tacks.png">
              </div>
              <div class="image-tacks-2 col-10-1-s">
                <img src="@/assets/images/kapt2/tacks.png">
              </div>
              <div class="image-taliban-1 col-5-8-s">
                <img src="@/assets/images/kapt2/taliban.png">
              </div>
              <div class="image-taliban-2 col-2-6-s">
                <img src="@/assets/images/kapt2/taliban-children.png">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useAnimation } from '~~/composables/useAnimation'
import Pakistan from '~~/components/Pakistan.vue'

export default defineComponent({
  setup () {
    onMounted(() => {
      setTimeout(() => {
        // Order is here important
        // 1. applySmoothScrollToPAge
        // 2. other animations
        const animation = useAnimation()
        animation.applySmoothScrollToPage(window, '#content', '.page')
        animation.animateAll()
        animation.animateBackgroundColorGradient('.page-color-fade', 'rgb(149, 124, 87)', 'rgb(233, 220, 199)')
      }, 50)
    })
    const models = [Pakistan]
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

.chapter-header {
  @include headline2;
  color: var(--color-text-light);
}

.chapter-title {
  @include headline1;
  color: var(--color-text-light);
}

.chapter-img {
  margin-left: -10vw;
}

.video-mingora video {
  border-radius: 20px;
}

.text-mingora {
  @include body2;
}

.scene-mingora {
  margin-left: -5vw;
  grid-row-start: 1;
  grid-row-end: 2;
}

.image-1 {
  z-index: 1;
}

.image-1 img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 20px;
}

.text-1 {
  @include body1;
  z-index: 1;
  text-align: right;
}

.text-2 {
  @include body2;
}

.text-family-1 {
  @include body2;
  margin-top: 3vw;
  margin-left: 1vw;
}

.image-family-1 img {
  z-index: 0;
}

.image-family-2 img {
  z-index: 1;
  margin-top: -4vw;
  margin-left: 4vw;
}

.image-family-3 img {
  z-index: 2;
  margin-top: -2vw;
}

.image-school img {
  margin-left: 2vw;
}

.video-school {
  overflow: hidden;
  margin-top: -10vw;
  z-index: -1;
}

video {
  width: 100%;
  // height: 100%;
  display: block;
}

.taliban-section {
  padding-top: 50vw;
}
.text-taliban-1 {
  @include body1;
  grid-row: 1;
  margin-bottom: 5vw;
}

.image-tacks-1 {
  grid-row: 2;
  z-index: 2;
  margin-top: 4vw;
  margin-left: -1.5vw;
}

.image-tacks-2 {
  grid-row: 2;
  z-index: 2;
  margin-left: 2.2vw;
  margin-top: -1vw;

  img {
    transform: rotate(90deg);
  }
}

.image-taliban-1 {
  grid-row: 2;
  z-index: 1;
}

.image-taliban-2 {
  margin-top: 5vw;
  grid-row: 2;
  z-index: 0;
}

@media only screen and (min-width: 1920px) {
  .section {
    width: 1460px;
    margin: 20vw auto 10vw auto;
  }
}
</style>
