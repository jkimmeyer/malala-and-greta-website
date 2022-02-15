<template>
  <div id="viewport">
    <div id="content">
      <div class="chapter" style="height: 600vw">

        <div v-if="isMalalaTheme">
          <!-- Malala -->
          <!-- Section 1-->
          <div class="section">
            <div class="grid">
              <div class="text-1 col-8-6-s reveal-right">
                Der 9. Oktober 2012 fing an wie jeder andere
              </div>
            </div>
          </div>

          <!-- Section 2-->
          <div class="section">
          </div>

          <!-- Section 3-->
          <div class="section">
          </div>

          <!-- Section 4-->
          <div class="section">
          </div>
        </div>


        <div v-else>
          <!-- Greta -->
          <!-- Section 1-->
          <div class="section">
            <div class="grid">
              <div class="text-1 col-1-8-s">
                Wenn so viele davon wissen, wieso tut niemand etwas dagegen?
              </div>
              <div class="image-1 col-9-3-s">
                <img src="@/assets/images/melting-earth.png">
              </div>
              <div class="greta-pray col-1-12-s">
                <div class="grid">
                  <div class="image-2 col-2-3-s">
                    <img src="@/assets/images/greta-pray.png">
                  </div>
                  <div class="text-2 col-5-4-s">
                    Mit 11 Jahren fiel mir das Essen und Reden schwer.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 2-->
          <div class="section">
            <div class="grid">
              <div class="model-1 col-1-3-s">
                <Scene
                  scene-id="3d-lamp"
                  :height="400"
                  :width="300"
                  :fov="80"
                  :near="0.1"
                  :far="1000"
                  :cam-x="-5"
                  :cam-y="-14"
                  :cam-z="10"
                  :models="models"
                />
              </div>
              <div class="text-3 col-5-7-s">
                <div class="grid">
                  <div class="inline-1 col-2-12-s">
                    Ich habe begonnen auf Dinge zu verzichten
                  </div>
                  <div class="inline-2 txt-sml col-2-10-s">
                    das Licht ausschalten
                  </div>
                  <div class="inline-3 txt-sml col-3-9-s">
                    Flugreisen vermeiden
                  </div>
                  <div class="inline-4 txt-sml col-4-8-s">
                    keine tierischen Produkte
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3-->
          <div class="section">
          </div>

          <!-- Section 4-->
          <div class="section">
          </div>
        </div>


        <!-- <div class="section">
          <div class="grid">
            <div class="text-1 col-8-6-s reveal-right">
              Der 9. Oktober 2012 fing an wie jeder andere
            </div>
          </div>

          <div class="grid">
            <div class="video-1 col-1-7-s parallax">
              <video loop autoplay muted>
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

        <div class="section page-color-fade">
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
        -->
      </div>
    </div>
  </div>
</template>
<script>
import { Themes } from '@/enums/Themes'
import { defineComponent } from '@vue/composition-api'
import { useAnimation } from '~~/composables/useAnimation'
import nobel from '~~/components/nobel.vue'

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
        animation.animatePageBackgroundColor('.page-color-fade', '#957C57')
      }, 50)
    })
    const models = [nobel]
    return {
      models, getCurrentTheme
    }
  },
  computed: {
    isMalalaTheme () {
      if (this.getCurrentTheme === Themes.Malala) { return true }
      else {return false}
    }
  },
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

/* Section 1 Greta */
.text-1 {
  @include body1;
  z-index: 1;
  text-align: left;
  grid-row: 1;
}
.image-1 {
  z-index: 1;
  grid-row: 1;
  margin-top: -32px;
}
.greta-pray{
  grid-row: 3;

  .text-2{
    @include body2;
    z-index: 1;
    text-align: left;
    grid-row: 2;
    align-self: end;
    margin-left: -1em;
    margin-top: -1.5em;
  }
  .image-2 {
    z-index: 1;
    grid-row: 1;
  }
}

.txt-sml{
  font-weight: 300;
}

/* Section 2 Greta*/
.model-1{

}
.inline-1{
  @include body1;
  margin-bottom: 1em;
}
.inline-2{
  @include body2;
  font-style: italic;
}
.inline-3{
  @include body2;
  font-style: italic;
}
.inline-4{
  @include body2;
  font-style: italic;
}


/*.text-1 {
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
}
.video-1 video {
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
}

.image-1 {
  z-index: 1;
  margin-top: 10vw;
}*/

@media only screen and (min-width: 1920px) {
  .section {
    width: 1460px;
    margin: 20vw auto 10vw auto;
  }
}
</style>
