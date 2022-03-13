<template>
  <div class="bg mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content pb-32">
      <SvgsVectorChapter5 stroke-color="#455669" class="bgVector" />
      <div class="section grid grid-cols-12 space-y-32">
        <div class="row-start-1 row-span-1 col-start-2 col-span-2 flex flex-row items-center">
          <img src="@/assets/images/chapter/5/greta/greta-location.png" data-animate-reveal-left>
          <div class="col-start-2 col-span-10 text text-right" data-animate-reveal-right>
            <span>Plymouth</span>
            <span>England</span>
          </div>
        </div>
        <div class="row-start-2 row-span-1 col-start-8 col-span-5 subtextContainer">
          <div data-animate-reveal-right>
            <DecoratedImage theme="greta" :decoration-top-right="true" :path="require('~/assets/images/chapter/5/greta/greta-kap5-boot-crew.jpeg')" />
            <div class="subtext flex flex-col w-full">
              <span>Greta Thunberg mit </span>
              <span>Skipper Boris Herrmann und Crew</span>
            </div>
          </div>
        </div>
        <div class="row-start-3 row-span-1 col-start-1 col-span-5" data-animate-reveal-left>
          <Video :path="require('~/assets/videos/greta/greta-kap5-1.mp4')" />
        </div>
        <div class="row-start-4 row-span-1 col-start-6 col-span-6">
          <Scene
            scene-id="yacht"
            :height="400"
            :width="750"
            :fov="10"
            :near="0.1"
            :far="2000"
            :cam-y="300"
            :cam-z="1000"
            :models="yachtScene"
            data-animate-parallax="-150"
          />
        </div>
        <div class="row-start-5 row-span-1 col-start-2 col-span-6 image-1">
          <DecoratedImage theme="greta" :decoration-top-left="true" :path="require('~/assets/images/chapter/5/greta/greta-kap5-boot-usa.jpg')" />
        </div>
        <div class="row-start-6 row-span-1 col-start-7 col-span-2 flex flex-row items-center">
          <div class="col-start-2 col-span-10 text" data-animate-reveal-left>
            <span>New&nbsp;York</span>
            <span>USA</span>
          </div>
          <img src="@/assets/images/chapter/5/greta/greta-finish.png" data-animate-reveal-right>
        </div>
      </div>
    </div>
    <div class="content pt-32">
      <div class="grid grid-cols-12 space-y-8">
        <div class="row-start-1 row-span-1 flex flex-col text-2 col-start-1 col-span-12">
          <span>Die Überfahrt von Europa nach</span>
          <span>New York hat zwei Wochen gedauert</span>
        </div>
        <DecoratedImage
          :path="require('~/assets/images/chapter/5/greta/greta-kap5-boot-waving.webp')"
          theme="greta"
          :decoration-top-right="true"
          class="row-start-2 row-span-1 col-start-5 col-span-6"
        />
      </div>
    </div>
  </div>
</template>

<script>
import yacht from '~~/components/model/yacht.vue'

export default {
  setup () {
    const yachtScene = [yacht]
    return {
      yachtScene
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
  color: var(--color-text-greta-dark);
  text-transform: uppercase;
}

.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
}
.bgVector{
  position: absolute;
  width: 100%;
  z-index: -1;
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

.text span{
  @include uppercaseStyle;
  line-height: 1;
}
.subtext{
  position: absolute;
  inset-block-start: 102%;
  text-align: right;
  @include body2;
  font-weight: 300;
}
.subtextContainer{
  position: relative;
}
.text-2 span{
   @include body2;
  line-height: 1;
  font-size: 3rem;
  font-weight: 300;
  font-style: italic;
}
</style>
