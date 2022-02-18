<template>
  <div id="viewport">
    <div id="content">
      <div class="chapter">

        <div v-if="isMalalaTheme">
          <!-- Malala -->
          <!-- Section 1-->
          <div class="section">
            <div class="grid">
              <div class="text-1 col-8-6-s">
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
                  <div class="image-2 col-2-3-s ">
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
              <div class="model-1 col-1-12-s">
                <Scene
                  scene-id="3d-lamp"
                  :height="526"
                  :width="428"
                  :fov="80"
                  :near="0.1"
                  :far="1000"
                  :cam-x="-5"
                  :cam-y="-14"
                  :cam-z="10"
                  :models="models"
                />
              </div>
              <div class="text-3 col-6-6-s">
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
            <div class="grid">
              <div class="text-4 col-1-12-s">
                <span class="">
                  20.08.2018
                </span>
                <span class="">
                  Der Start der Klimabewegung
                </span>
              </div>
            </div>
            <div class="grid">
              <div class="model-2 col-1-12-s">
                <Scene
                  scene-id="swedish"
                  :height="400"
                  :width="750"
                  :fov="80"
                  :near="0.1"
                  :far="1000"
                  :cam-x="-5"
                  :cam-y="-14"
                  :cam-z="10"
                  :models="models"
                />
              </div>
              <div class="video-1 col-11-1-s">
                <video loop autoplay muted>
                  <source
                    src="@/assets/videos/greta-kap3-1.mp4"
                    type="video/mp4"
                  >
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
              <div class="image-container-1 col-1-12-s">
                <img class="image-3" src="@/assets/svg/arrow.svg">
                <img class="image-4" src="@/assets/images/fridaysforfuture.png">
                <span class="">
                  Alles, was wir tun müssen, ist<br>aufwachen und uns verändern.
                </span>
              </div>
            </div>
          </div>
        </div>
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

.section {
  padding-left: 72px;
  padding-right: 72px;

  &:first-child{
    padding-top: 90px;
    padding-bottom: calc(4em + 100px);
  }

  &:not(:first-child):not(:last-child){
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &:last-child{
    padding-top: 100px;
    padding-bottom: 90px;
  }
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
  grid-row: 1;
  margin-top: auto;
  margin-bottom: -4em;

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
.text-3{
  grid-row: 1;
}
.inline-1{
  @include body1;
  margin-bottom: 1em;
}
.model-1{
  grid-row: 1;
  div{
    background-color: red;
  }
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

/* Section 3 Greta */
.text-4 {
  @include body1;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;
}
.model-2 > div{
  background-color: red;
}
.video-1 {
  grid-row: 2;
  margin-top: -4em;
  video{
    width: 500px;
    height: auto;
    border-radius: 25px;

    }
  }
.image-container-1{
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-row: 3;
  .image-3{
    margin-top: 5em;
    width:80px;
  }
  .image-4{
    margin-top: -2em;
    width: 750px;
  }

  > span{
    @include body2;
    margin-bottom: 2em;
  }
}
</style>
