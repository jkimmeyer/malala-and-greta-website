<template>
  <div class="mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content">
      <div class="section grid grid-cols-12" data-narrator-malala="Malala-Kap2-1.m4a">
        <div class="col-start-1 col-span-5 row-start-1 row-span-2 forParallax" data-sound-malala-start="busy-street.mp3">
          <Scene
            scene-id="pakistan"
            :height="500"
            :width="500"
            :fov="10"
            :near="0.1"
            :far="1000"
            :cam-z="65"
            :cam-y="65"
            :models="pakistanScene"
            :points-material="true"
            :auto-rotate="false"
            :point-size="0.5"
          />
        </div>
        <div class="pl-8 col-start-6 col-span-6 text row-start-1 row-span-1">
          <div data-animate-parallax="100">
            <Video :path="require('~/assets/videos/malala/malala-kap2-1.mp4')" data-animate-reveal-bottom />
            <span data-animate-reveal-right>Die Straßen Pakistans</span>
          </div>
        </div>
        <div class="col-start-5 col-span-6 row-start-2 row-span-1 pt-72">
          <div class="flex flex-col text-2">
            <div class="flex justify-start w-full">
              <span data-animate-reveal-left>Ein Teil meines</span>
            </div>
            <div class="flex justify-center pl-16">
              <img src="@/assets/svg/malala-kap2-herz.svg" data-animate-parallax="-50">
            </div>
            <div class="flex justify-end w-full" data-narrator-malala="Malala-Kap2-2.m4a">
              <span data-animate-reveal-right>ist in Mingora</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section grid grid-cols-12" data-sound-malala-end="busy-street.mp3">
      <DecoratedImage
        class="col-start-2 col-span-5"
        data-animate-parallax="50"
        :decoration-top-left="true"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/malala-vater.jpg')"
      />
      <div class="cite-father text-body-small col-start-1 col-span-4" data-animate-reveal-left>
        Mein Vater war entschlossen, mir jede Gelegenheit zu geben, die ein Junge haben würde.
      </div>

      <DecoratedImage
        class="col-start-6 col-span-6"
        data-animate-parallax="-75"
        :decoration-top-right="true"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/malala-familie.jpg')"
      />

      <DecoratedImage
        data-narrator-malala="Malala-Kap2-3.m4a"
        data-sound-malala-start="school-background.mp3"
        class="col-start-4 col-span-7"
        data-animate-parallax="-150"
        :decoration-bottom-right="true"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/malala-schule-vater.jpg')"
      />

      <div class="col-start-3 col-span-8">
        <Video :path="require('~/assets/videos/malala/malala-kap2-2.mp4')" :decoration="require('~/assets/images/chapter/2/malala/school-malala.png')" data-animate-parallax="25" />
      </div>
    </div>
    <div class="section grid grid-cols-12">
      <div class="text-body-big col-start-1 col-span-8" data-animate-reveal-left>
        Dann übernahmen die Taliban die Kontrolle..
      </div>
      <DecoratedImage
        data-narrator-malala="Malala-Kap2-4.m4a"
        data-sound-malala-end="school-background.mp3"
        class="mt-24 col-start-4 col-span-6"
        data-animate-parallax="100"
        :decoration-top-right="true"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/taliban.png')"
      />
      <DecoratedImage
        class="col-start-1 col-span-4"
        data-animate-parallax="-100"
        :decoration-top-left="true"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/taliban-children.png')"
      />
    </div>
    <div class="section grid grid-cols-12 items-center">
      <DecoratedImage
        class="col-start-2 col-span-2"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/noten.png')"
        data-animate-reveal-left
      />
      <div class="text-body-small col-start-5 col-span-4" data-animate-reveal-bottom>
        ..das Spielen von Musik und tanzen in der Öffentlichkeit wurden verboten..
      </div>
      <DecoratedImage
        class="col-start-9 col-span-4"
        theme="malala"
        :path="require('~/assets/images/chapter/2/malala/tanzschritte.png')"
        data-animate-reveal-right
      />
    </div>
    <div class="section grid grid-cols-12 items-center" data-narrator-malala="Malala-Kap2-5.m4a">
      <div class="text-body-small col-start-2 col-span-4" data-animate-reveal-left>
        ..und die Schule meines Vaters wurde geschlossen.
      </div>
      <Scene
        class="col-start-6 col-span-6"
        data-animate-reveal-rigth
        scene-id="lock-door"
        :height="526"
        :width="428"
        :fov="10"
        :near="0.1"
        :far="1000"
        :cam-z="80"
        :cam-y="40"
        :cam-x="-70"
        :auto-rotate="false"
        :models="lockScene"
        data-animate-parallax="-100"
      />
    </div>
    <div class="section grid grid-cols-12 items-center">
      <div class="row-start-1 row-span-1 col-start-2 col-span-8">
        <Video :path="require('~/assets/videos/malala/malala-kap2-3.mp4')" data-animate-reveal-left />
      </div>
      <div class="text-body-big mt-16 row-span-1 row-start-2 col-start-4 col-span-8" data-animate-reveal-bottom>
        Ich will zur Schule gehen!
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import pakistan from '~~/components/model/pakistan.vue'
import lock from '~~/components/model/lock.vue'
import Video from '~/components/Video.vue'
// import pin from '~~/components/model/pakistan.vue'

export default defineComponent({
  components: { Video },
  setup () {
    const pakistanScene = [pakistan]
    const lockScene = [lock]
    return {
      pakistanScene,
      lockScene
    }
  }
})
</script>

<style lang="scss" scoped>
.section {
  width: 100%;

  &:first-child{
    padding-top: 150px;
  }

  &:not(:first-child):not(:last-child){
    padding-top: 100px;
    padding-bottom: 100px;
  }

  &:last-child{
    padding-top: 100px;
    padding-bottom: 200px;
  }
}

@mixin bigText{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  color: var(--color-text-malala-dark);
  font-style: italic;
}

@mixin headline1 {
  font-family: Trochut, sans-serif;
  font-size: 200px;
  color: var(--color-text-malala-dark);
  line-height: 90%;
}

@mixin headline2 {
  font-family: Lato, sans-serif;
  font-weight: 300; // light
  font-size: 96px;
  color: var(--color-text-malala-dark);
}

@mixin body1 {
  font-family: Lato, sans-serif;
  font-size: 50px;
  color: var(--color-text-malala-dark);
}

@mixin body2 {
  font-family: Lato, sans-serif;
  font-size: 30px;
  font-style: italic;
  color: var(--color-text-malala-dark);
}

@mixin bigText{
  font-size: var(--font-64);
  font-weight: 300;
  line-height: var(--line-1-15);
  color: var(--color-text-malala-dark);
  font-style: italic;
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
    @include bigText;
    font-size: var(--font-32);
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
    @include bigText;
    font-size: 3rem;
    color: #68573D;
    font-weight: 500;
  }
}

.text-body {
  @include bigText;
  font-size: 3rem;
}

.text-body-big{
  @include bigText;
  font-size: 3rem;
  font-weight: 500;
}

.text-body-small {
  @include body2;
  font-weight: 300;
}
.cite-father{
  margin-top: 5vw;
}
</style>
