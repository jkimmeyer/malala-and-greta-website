<template>
  <div class="mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content">
      <!-- Section 1 -->
      <div class="section grid grid-cols-12">
        <div class="text-1 col-start-1 col-span-8">
          <span data-animate-reveal-left>Wenn so viele davon wissen,</span>
          <span data-animate-reveal-left>wieso tut niemand was dagegen?</span>
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
      <div class="section grid grid-cols-12" data-narrator-greta="Greta-Kap3-2.m4a">
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
              Ich habe begonnen auf Dinge zu verzichten
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
      <div class="section grid grid-cols-12" data-narrator-greta="Greta-Kap3-3.m4a">
        <div class="text-4 col-start-1 col-span-12">
          <span data-animate-reveal-left>
            20.08.2018
          </span>
          <span data-animate-reveal-left>
            Der Start der Klimabewegung
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
            <svg
              id="arrow-svg-animation"
              width="83"
              height="259"
              viewBox="0 0 83 259"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              data-animate-timeline="#arrow-line"
            >
              <path id="arrow-line" d="M42.6188 3C27.7651 18.609 -22.2782 83.106 18.9808 98.796C35.8897 105.226 58.2362 103.341 72.6017 92.6999C86.9528 82.0694 79.0526 68.6378 63.893 64.7076C21.0402 53.5976 20.2249 122.37 20.2249 149.929C20.2249 168.638 21.6695 186.028 24.206 204.545C25.697 215.429 29.1824 227.188 29.1824 238.136 M11.2673 229.178C12.5851 232.253 23.8337 257.739 30.1777 255.927C35.2727 254.471 47.3991 232.752 49.3369 226.939" stroke="#445569" stroke-width="5" stroke-linecap="round" />
            </svg>

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
import reichstag from '~~/components/model/reichstag.vue'
import lampe from '~~/components/model/lampe.vue'
import * as fact1 from '~/assets/contents/malala_fact_chapter3_1.json'
import * as fact2 from '~/assets/contents/malala_fact_chapter3_2.json'

export default {
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
}
</script>

<style lang="scss" scoped>
@mixin bigText{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  color: var(--color-text-greta-dark);
  font-style: italic;
}

@mixin uppercaseStyle{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-greta-dark);
  text-transform: uppercase;
}

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
  color: var(--color-text-greta-dark);
  line-height: 90%;
}

@mixin headline2 {
  font-family: Lato, sans-serif;
  font-weight: 300; // light
  font-size: 96px;
  color: var(--color-text-greta-dark);
}

@mixin body1 {
  font-family: Lato, sans-serif;
  font-size: 50px;
  color: var(--color-text-greta-dark);
}

@mixin body2 {
  font-family: Lato, sans-serif;
  font-size: 30px;
  font-style: italic;
  color: var(--color-text-greta-dark);
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
      @include bigText;
      font-size: 3rem;
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
  @include bigText;
  font-size: 3rem;
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
  @include bigText;
  font-size: 3rem;
  display: flex;
  flex-direction: column;
  margin-bottom: 1em;

  span:last-child{
    font-weight: 500;
  }
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
    font-weight: 300;
  }
}
</style>
