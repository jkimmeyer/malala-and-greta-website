<template>
  <div class="bg mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content pb-32">
      <SvgsVectorChapter5 stroke-color="#957C57" class="bgVector" />
      <div class="section grid grid-cols-12 space-y-28">
        <div class="row-start-1 row-span-1 col-start-2 col-span-2 flex flex-row items-center">
          <img src="@/assets/images/chapter/5/malala/malala-location.png" data-animate-reveal-left>
          <div class="col-start-2 col-span-10 text text-right" data-animate-reveal-right>
            <span>MINGORA</span>
            <span>PAKISTAN</span>
          </div>
        </div>
        <div class="row-start-2 row-span-1 col-start-8 col-span-4">
          <div data-animate-reveal-right>
            <DecoratedImage theme="malala" :decoration-top-right="true" :path="require('~/assets/images/chapter/5/malala/malala-kap5-attack.jpeg')" />
          </div>
        </div>
        <div class="row-start-3 row-span-1 col-start-1 col-span-5" data-animate-reveal-left>
          <Video :path="require('~/assets/videos/malala/malala-kap5-1.mp4')" />
        </div>
        <div class="row-start-4 row-span-1 col-start-6 col-span-6">
          <Scene
            scene-id="plane"
            :height="400"
            :width="750"
            :fov="80"
            :near="0.1"
            :far="1000"
            :cam-x="-5"
            :cam-y="-16"
            :cam-z="10"
            :models="planeScene"
            :orbit-controls="true"
            data-animate-parallax="-150"
          />
        </div>
        <div class="row-start-5 row-span-1 col-start-2 col-span-6 image-1">
          <DecoratedImage theme="malala" :decoration-top-left="true" :path="require('~/assets/images/chapter/5/malala/malala-kap5-bed-teddy.jpeg')" />
        </div>
        <div class="row-start-6 row-span-1 col-start-7 col-span-2 flex flex-row items-center">
          <div class="col-start-2 col-span-10 text" data-animate-reveal-left>
            <span>BIRMINGHAM</span>
            <span>ENGLAND</span>
          </div>
          <img src="@/assets/images/chapter/5/malala/malala-finish.png" data-animate-reveal-right>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import plane from '~~/components/model/plane.vue'

export default defineComponent({
  setup () {
    const planeScene = [plane]
    return {
      planeScene
    }
  }
})
</script>

<style lang="scss" scoped>
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

.text span{
  @include body1;
  line-height: 1;
}

</style>
