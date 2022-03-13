<template>
  <div class="mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content">
      <div class="section grid grid-cols-12">
        <div class="col-start-1 col-span-5 row-start-1 row-span-1 forParallax">
          <Scene
            scene-id="swedenmap"
            :height="1000"
            :width="500"
            :fov="10"
            :near="0.1"
            :far="1000"
            :cam-z="100"
            :cam-y="100"
            :models="swedenmapScene"
            data-animate-parallax="100"
            :points-material="true"
            :auto-rotate="false"
            :point-size="0.6"
          />
        </div>
        <div class="pl-8 col-start-6 col-span-6 text row-start-1 row-span-1 flex justify-center items-center pb-32">
          <div data-animate-parallax="25">
            <Video :path="require('~/assets/videos/greta/greta-kap2-1.mp4')" data-animate-reveal-bottom />
            <span data-animate-reveal-right>DIE STRAßEN SCHWEDENS</span>
          </div>
        </div>
      </div>
      <div class="section grid grid-cols-12">
        <div class="row-start-1 row-span-1 col-start-3 col-span-6">
          <DecoratedImage data-animate-parallax="50" :path="require('~/assets/images/chapter/2/greta/greta-kap2-mother.png')" theme="greta" :decoration-top-left="true" />
        </div>
        <div class="row-start-2 row-span-1 col-start-6 col-span-6 overlap">
          <DecoratedImage data-animate-parallax="-100" :path="require('~/assets/images/chapter/2/greta/greta-kap2-family.png')" theme="greta" :decoration-top-right="true" />
        </div>
        <div data-animate-reveal-left class="row-start-2 row-span-1 col-start-1 col-span-4 flex flex-row items-center overlap text-2">
          Meine Eltern und Hunde waren für mich da, als es mir besonders schlecht ging. Sie geben mir halt.
        </div>
        <div class="row-start-3 row-span-1 col-start-5 col-span-4 overlap">
          <DecoratedImage data-animate-parallax="-150" :path="require('~/assets/images/chapter/2/greta/greta-kap2-dog.png')" theme="greta" :decoration-bottom-right="true" />
        </div>
      </div>
      <div class="section grid grid-cols-12">
        <div class="row-start-1 row-span-1 col-start-1 col-span-7">
          <Scene
            scene-id="zweitausendelf"
            :height="400"
            :width="750"
            :fov="10"
            :near="0.1"
            :far="1000"
            :cam-z="15"
            :auto-rotate="false"
            :models="zweitausendelfScene"
          />
        </div>
        <div class="pt-32 row-start-2 row-span-1 col-start-5 col-span-7 text-3">
          ... bis heute beschäftigt mich das Thema
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import sweden from '~~/components/model/sweden.vue'
import zweitausendelf from '~~/components/model/zweitausendelf.vue'

export default defineComponent({
  setup () {
    const swedenmapScene = [sweden]
    const zweitausendelfScene = [zweitausendelf]
    return {
      swedenmapScene, zweitausendelfScene
    }
  }
})
</script>

<style lang="scss" scoped>
.section {
  width: 100%;

  &:first-child{
    padding-top: 0;
  }

  &:not(:first-child):not(:last-child){
    padding-top: 150px;
    padding-bottom: 150px;
  }

  &:last-child{
    padding-top: 150px;
    padding-bottom: 150px;
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

@mixin uppercaseStyle{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  text-transform: uppercase;
  color: var(--color-text-greta-dark);
  text-transform: uppercase;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.text{
  position: relative;

  span {
    position: absolute;
    inset-block-start: 102%;
    text-align: right;
    width: 100%;
    @include uppercaseStyle;
    font-size: var(--font-32);
  }
}

.overlap{
  margin-top: -4rem;
}

.text-2{
  @include body2;
  line-height: 1;
  font-size: 30px;
  font-weight: 300;
  font-style: italic;
}

.text-3{
  @include uppercaseStyle;
  font-size: 3rem;
}
</style>
