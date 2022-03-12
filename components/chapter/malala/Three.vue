<template>
  <div class="mx-40 2xl:mx-auto max-w-screen-xl">
    <div class="content" data-narrator-malala="Malala-Kap3-1">
      <!-- Section 1 -->
      <div class="section grid grid-cols-12">
        <div class="image-1 col-start-1 col-span-4" data-animate-parallax="-25">
          <img src="@/assets/images/chapter/3/malala/newspaper.png">
        </div>
        <div class="text-1 col-start-5 col-span-4">
          <span data-animate-reveal-right>Ein Journalist von der BBC kam auf die Idee, einen Blog über die Missstände in meinem Land zu schreiben.</span>
          <span data-animate-reveal-left>Ein anderes Mädchen hatte Angst davor, davon zu berichten. Also tat ich es.</span>
        </div>
        <div class="image-2 col-start-9 col-span-4" data-animate-parallax="25">
          <img src="@/assets/images/chapter/3/malala/interview.png">
        </div>
      </div>
      <!-- Section 2 -->
      <div class="section grid grid-cols-12">
        <div class="image-3 col-start-1 col-span-5" data-animate-parallax="-25">
          <img src="@/assets/images/chapter/3/malala/kornblume.png">
        </div>
        <div class="text-container-1 col-start-6 col-span-6">
          <div class="grid grid-cols-12">
            <div class="text-2 col-start-1 col-span-12">
              <span data-animate-reveal-left>GUL MAKAI</span>
              <span data-animate-reveal-left>Die Kornblume</span>
            </div>
            <div class="text-3 col-start-4 col-span-8" data-animate-reveal-right>
              Der Name, unter dem ich von der Unterdrückung, Gewalt und Kontrolle durch die Taliban berichtet habe.
            </div>
          </div>
        </div>
      </div>
      <!-- Section 3 -->
      <div class="section grid grid-cols-12" data-narrator-malala="Malala-Kap3-2">
        <div class="text-4 col-start-2 col-span-10" data-animate-reveal-left>
          MEINE GESCHICHTEN
        </div>
        <div class="facts-1 col-start-4 col-span-8" data-animate-parallax="12">
          <FactsContainer
            theme="malala"
            size="sm"
            :facts="[malalaFact1,malalaFact2]"
            format="rect"
          />
        </div>
      </div>
      <!-- Section 4 -->
      <div class="section grid grid-cols-12">
        <div class="video-1 col-start-1 col-span-5" data-animate-parallax="50">
          <Video :path="require('~/assets/videos/malala/malala-kap3-1.mp4')" />
        </div>
        <div class="image-4 col-start-6 col-span-6" data-animate-parallax="-50">
          <img src="@/assets/images/chapter/3/malala/malala-people.png">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from '@vue/composition-api'
import * as fact1 from '~/assets/contents/malala_fact_chapter3_1.json'
import * as fact2 from '~/assets/contents/malala_fact_chapter3_2.json'

export default defineComponent({
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
  }

  &:not(:first-child):not(:last-child){
    padding-top: 150px;
    padding-bottom: 150px;
  }

  &:last-child{
    padding-top: 200px;
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
  margin-top: 4em;
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
  > div{
    min-height: 512px;
   }
}

/* Section 4 Malala */
.video-1{
  video{
    margin-left: 3em;
    width: 500px;
    border-radius: 25px;
  }
}
.image-4{
  padding-top: 4em;
}
</style>
