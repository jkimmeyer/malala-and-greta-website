<template>
  <div class="chapter ">
    <div>Hello chapter 4</div>

    <div class="container">
      <div class="text-1 col-7-12-s reveal-right ">
        Der 9. Oktober 2012 fing an wie jeder andere
      </div>
    </div>

    <div class="container">
      <div class="video-1 col-1-8-s reveal-left parallax">
        asda
      </div>
    </div>

    <div class="container">
      <div class="image-1 col-6-11-s">
        asda
      </div>
    </div>

    <div class="text-2 reveal-right">
      Der 9. Oktober 2012 fing an wie jeder andere
    </div>

    <div class="image-2">
      asda
    </div>

    <div class="image-3 reveal-right parallax">
      asda
    </div>

    <div class="text-3">
      Dann hörte ich nur noch den Schuss. Alles wurde schwarz
    </div>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'
import { useAnimation } from '~~/composables/useAnimation'

export default defineComponent({
  setup () {
    onMounted(() => {
      const animation = useAnimation()
      animation.animateAll()
    })
  }
})
</script>
<style lang="scss" scoped>
@import "~/assets/stylesheets/globals/typography-styles.scss";
@import "~/assets/stylesheets/globals/customgrid.scss";

.chapter {
  margin: 0 11vw;
  padding-top: 1200px;
}

.container {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.text-1 {
  @include body1;
}

.text-2 {
  @include body2;
}

.text-3 {
  @include body2;
}

.video-1 {
  height: 350px;
  border-radius: 20px;
  background-color: rgb(117, 114, 114);
}

.image-1 {
  height: 250px;
  background-color: rgb(172, 130, 130);
}

.image-2, .image-3, .image-4 {
  width: 240px;
  height: 200px;
  background-color: rgb(117, 114, 114);
}

@media only screen and (max-width: 1000px) {
  .body1 {
    font-size: 40px;
  }

  .body2 {
    font-size: 20px;
  }
}
</style>
