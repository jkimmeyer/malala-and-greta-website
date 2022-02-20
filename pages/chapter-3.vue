<template>
  <div id="viewport">
    <div id="content">
      <div class="chapter" :class="isMalalaTheme? 'isMalala-true':'isMalala-false'" >

        <div v-if="isMalalaTheme">
          <!-- Malala -->
          <!-- Section 1-->
          <div class="section">
            <div class="grid">
              <div class="image-1 col-1-4-s">
                <img src="@/assets/images/newspaper.png">
              </div>
              <div class="text-1 col-5-4-s">
                <span>Ein Journalist von der BBC kam auf die Idee, einen Blog über die Missstände in meinem Land zu schreiben.</span>
                <span>Ein anderes Mädchen hatte Angst davor, davon zu berichten. Also tat ich es.</span>
              </div>
              <div class="image-2 col-9-4-s">
                <img src="@/assets/images/interview.png">
              </div>
            </div>
          </div>

          <!-- Section 2-->
          <div class="section">
            <div class="grid">
              <div class="image-3 col-1-5-s">
                <img src="@/assets/images/kornblume.png">
              </div>
              <div class="text-container-1 col-6-6-s">
                <div class="grid">
                  <div class="text-2 col-1-12-s">
                    <span>GUL MAKAI</span>
                    <span>Die Kornblume</span>
                  </div>
                  <div class="text-3 col-3-9-s">
                    Der Name, unter dem ich von der Unterdrückung, Gewalt und Kontrolle durch die Taliban berichtet habe.
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Section 3-->
          <div class="section">
            <div class="grid">
              <div class="text-4 col-3-8-s">
                MEINE GESCHICHTEN
              </div>
              <div class="facts-1 col-3-12-s">
                <FactContainer :postData="{
                    theme: 'malala',
                    size: 'sm',
                    facts: [malalaFact1,malalaFact2],
                    format: 'rect'
                  }"
                />
              </div>
            </div>
          </div>

          <!-- Section 4-->
          <div class="section">
            <div class="grid">
              <div class="video-1 col-1-5-s">
                <video loop autoplay muted>
                  <source
                    src="@/assets/videos/greta-kap3-1.mp4"
                    type="video/mp4"
                  >
                  Sorry, your browser doesn't support embedded videos.
                </video>
              </div>
              <div class="image-4 col-6-6-s">
                <img src="@/assets/images/malala-people.png">
              </div>
            </div>
          </div>
        </div>


        <div v-else>
          <!-- Greta -->
          <!-- Section 1-->
          <div class="section">
            <div class="grid">
              <div class="text-1 col-1-8-s">
                <span class="reveal-left">WENN SO VIELE DAVON WISSEN,</span>
                <span class="reveal-left">WIESO TUT NIEMAND ETWAS DAGEGEN?</span>
              </div>
              <div class="image-1 col-9-3-s">
                <img src="@/assets/images/melting-earth.png">
              </div>
              <div class="greta-pray col-1-12-s">
                <div class="grid">
                  <div class="image-2 col-2-3-s ">
                    <img src="@/assets/images/greta-pray.png">
                  </div>
                  <div class="text-2 col-5-4-s reveal-right">
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
              <div class="text-3 col-5-7-s">
                <div class="grid">
                  <div class="inline-1 col-2-12-s reveal-right">
                    ICH HABE BEGONNEN AUF DINGE ZU VERZICHTEN
                  </div>
                  <div class="inline-2 txt-sml col-2-10-s reveal-right">
                    das Licht ausschalten
                  </div>
                  <div class="inline-3 txt-sml col-4-8-s reveal-right">
                    Flugreisen vermeiden
                  </div>
                  <div class="inline-4 txt-sml col-6-6-s reveal-right">
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
                <span class="reveal-right">
                  20.08.2018
                </span>
                <span class="reveal-right">
                  DER START DER KLIMABEWEGUNG
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
import * as fact1 from '~/assets/facts/malala_fact_chapter3_1.json';
import * as fact2 from '~/assets/facts/malala_fact_chapter3_2.json';

export default defineComponent({
  data () {
    return {
      malalaFact1: fact1.fact,
      malalaFact2: fact2.fact
    }
  },
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

/* Global section styling */
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

.isMalala-true{

  .section:first-child{
    padding-right: 0;
    padding-bottom: 0;
  }
  .section:last-child{
    padding-top: 170px;
  }

  /* Section 1 Malala */
  .image-1{
    grid-row: 1;
  }
  .text-1{
    @include body2;
    grid-row: 2;
    display: flex;
    flex-direction: column;
    font-weight: 300;
    > span{
      padding: 0 1em;

      &:first-child{
        margin-top: -4em;
        padding-bottom: 1em;
      }
    }
  }
  .image-2{
    grid-row: 2;
    margin-top: -2em;
    margin-right: -4em;
  }

  /* Section 2 Malala */
  .image-3{
    grid-row: 1;
  }
  .text-2{
    grid-row: 1;
    display: flex;
    flex-direction: column;
    @include body1;

    > span:last-child{
      font-size: 40px;
      font-weight: 300;
    }
  }
  .text-3{
    margin-top: 2em;
    grid-row: 2;
    @include body2;
    font-weight: 300;
  }
  .text-container-1{
    margin: auto;
  }

  /* Section 3 Malala */
  .text-4{
    @include body1;
    grid-row: 1;
  }
  .facts-1{
    grid-row: 2;
    margin-top: 4em;
    margin-left: 6em;
    min-height: 512px;
  }

  /* Section 4 Malala */
  .video-1{
    video{
      margin-left: 3em;
      width: 500px;
      border-radius: 25px;
    }
  }
}

/* Greta */
.isMalala-false{
  /* Section 1 Greta */
  .text-1 {
    display: flex;
    flex-direction: column;
    z-index: 1;
    grid-row: 1;

    > span {
      text-align: left;
      @include body1;
    }
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
      font-weight: 300;
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
    padding: 0.3em 0;
    font-style: italic;
  }
  .inline-3{
    @include body2;
    padding: 0.3em 0;
    font-style: italic;
  }
  .inline-4{
    @include body2;
    padding: 0.3em 0;
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
}


</style>
