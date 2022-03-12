<template>
  <div class="mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content">
      <!-- Section 1 -->
      <div class="section grid grid-cols-12">
        <div class="text-1 col-start-1 col-span-8">
          <span data-animate-reveal-left>WENN SO VIELE DAVON WISSEN,</span>
          <span data-animate-reveal-left>WIESO TUT NIEMAND ETWAS DAGEGEN?</span>
        </div>
        <div class="image-1 col-start-9 col-span-3">
          <img src="@/assets/images/chapter/3/greta/melting-earth.png">
        </div>
        <div class="greta-pray col-start-1 col-span-12">
          <div class="grid grid-cols-12">
            <div class="image-2 col-start-2 col-span-3">
              <img src="@/assets/images/chapter/3/greta/greta-pray.png">
            </div>
            <div class="text-2 col-start-5 col-span-4" data-animate-reveal-right>
              Mit 11 Jahren fiel mir das Essen und Reden schwer.
            </div>
          </div>
        </div>
      </div>

      <!-- Section 2 -->
      <div class="section grid grid-cols-12">
        <div class="model-1 col-start-1 col-span-4" data-animate-parallax="-10">
          <Scene
            scene-id="3d-lamp"
            :height="526"
            :width="428"
            :fov="10"
            :near="0.1"
            :far="1000"
            :cam-y="15"
            :cam-z="50"
            :models="lampeScene"
          />
        </div>
        <div class="text-3 col-start-5 col-span-7">
          <div class="grid grid-cols-12">
            <div class="inline-1 col-start-2 col-span-11" data-animate-reveal-right>
              ICH HABE BEGONNEN AUF DINGE ZU VERZICHTEN
            </div>
            <div class="inline-2 txt-sml col-start-2 col-span-10" data-animate-reveal-right>
              das Licht ausschalten
            </div>
            <div class="inline-3 txt-sml col-start-4 col-span-8" data-animate-reveal-right>
              Flugreisen vermeiden
            </div>
            <div class="inline-4 txt-sml col-start-6 col-span-6" data-animate-reveal-right>
              keine tierischen Produkte
            </div>
          </div>
        </div>
      </div>

      <!-- Section 3 -->
      <div class="section grid grid-cols-12">
        <div class="text-4 col-start-1 col-span-12">
          <span data-animate-reveal-left>
            20.08.2018
          </span>
          <span data-animate-reveal-left>
            DER START DER KLIMABEWEGUNG
          </span>
        </div>
        <div class="grid col-start-1 col-span-12 grid-cols-12">
          <div class="model-2 col-start-1 col-span-7" data-animate-parallax="25">
            <Scene
              scene-id="swedish"
              :height="400"
              :width="750"
              :fov="10"
              :near="0.1"
              :far="1000"
              :cam-z="50"
              :cam-y="15"
              :models="reichstagScene"
            />
          </div>
          <div class="video-1 col-start-8 col-span-5" data-animate-parallax="-25">
            <Video :path="require('~/assets/videos/greta/greta-kap3-1.mp4')" />
          </div>
          <div class="image-container-1 col-start-1 col-span-12">
            <img class="image-3" data-animate-parallax="10" src="@/assets/svg/arrow.svg">
            <img class="image-4" data-animate-parallax="-10" src="@/assets/images/chapter/3/greta/fridaysforfuture.png">
            <span data-animate-reveal-bottom>
              Alles, was wir tun müssen, ist<br>aufwachen und uns verändern.
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import reichstag from '~~/components/model/reichstag.vue'
import lampe from '~~/components/model/lampe.vue'
import * as fact1 from '~/assets/contents/malala_fact_chapter3_1.json'
import * as fact2 from '~/assets/contents/malala_fact_chapter3_2.json'

export default defineComponent({
  setup () {
    const lampeScene = [lampe]
    const reichstagScene = [reichstag]
    return {
      lampeScene, reichstagScene
    }
  },
  data () {
    return {
      malalaFact1: fact1.fact,
      malalaFact2: fact2.fact
    }
  }
})
</script>

<style lang="scss" scoped>
.section {
  width: 100%;

  &:first-child{
    padding-top: 0;
    padding-bottom: 150px;
  }

  &:not(:first-child):not(:last-child){
    padding-top: 150px;
    padding-bottom: 150px;
  }

  &:last-child{
    padding-top: 150px;
    padding-bottom: 0;
  }
}

@mixin headline1 {
  font-family: Trochut, sans-serif;
  font-size: 200px;
  color: var(--color-text-dark);
  line-height: 90%;
}

@mixin headline2 {
  font-family: Lato, sans-serif;
  font-weight: 300; // light
  font-size: 96px;
  color: var(--color-text-dark);
}

@mixin body1 {
  font-family: Lato, sans-serif;
  font-size: 50px;
  color: var(--color-text-dark);
}

@mixin body2 {
  font-family: Lato, sans-serif;
  font-size: 30px;
  font-style: italic;
  color: var(--color-text-dark);
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
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
  grid-row: 2;
  margin-top: auto;
  margin-top: -8em;

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
