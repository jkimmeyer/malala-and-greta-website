<template>
  <div class="mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content">
      <div class="grid grid-cols-12">
        <div class="col-start-1 col-span-5 row-start-1 row-span-2 forParallax">
          <Scene
            scene-id="pakistan"
            :height="1000"
            :width="500"
            :fov="10"
            :near="0.1"
            :far="1000"
            :cam-z="100"
            :cam-y="100"
            :models="pakistanScene"
            data-animate-parallax="300"
            :points-material="true"
            :auto-rotate="false"
            :point-size="0.6"
          />
        </div>
        <div class="col-start-7 col-span-5 text row-start-1 row-span-1">
          <div data-animate-parallax="-100">
            <Video :path="require('~/assets/videos/malala/malala-kap2-1.mp4')" />
            <span data-animate-reveal-right>DIE STRAßEN PAKISTANS</span>
          </div>
        </div>
        <div class="col-start-5 col-span-7 row-start-2 row-span-1 pt-72">
          <div class="flex flex-col text-2">
            <div class="flex justify-start w-full">
              <span data-animate-reveal-left>EIN TEIL MEINES</span>
            </div>
            <div class="flex justify-center">
              <img src="@/assets/svg/malala-kap2-herz.svg" data-animate-parallax="-50">
            </div>
            <div class="flex justify-end w-full">
              <span data-animate-reveal-right>IST IN MINGORA</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import pakistan from '~~/components/model/pakistan.vue'
// import pin from '~~/components/model/pakistan.vue'

export default defineComponent({
  setup () {
    const pakistanScene = [pakistan]
    return {
      pakistanScene
    }
  }
})
</script>

<style lang="scss" scoped>
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
.text{
  position: relative;

  span {
    position: absolute;
    inset-block-start: 100%;
    text-align: right;
    width: 100%;
    @include body2;
  }
}
.text-2 {
  position: relative;

  > div:first-child{
    position: absolute;
    inset-block-start: 5%;
  }

  > div:not(:first-child):not(:last-child){
    z-index: -1;
  }

  > div:last-child{
    position: absolute;
    inset-block-end: 5%;
  }

  > div > span {
    @include body1;
    color: #68573D;
  }
}

.forParallax > div{
  margin-top: -400px;
}
</style>
