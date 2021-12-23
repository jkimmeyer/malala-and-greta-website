<template>
  <div ref="scrollroot">
    <progress max="100" value="0" />
    <section data-scroll-section>
      <p data-scroll data-scroll-speed="1">
        Scroll to add some color to your life!🎨
      </p>
    </section>
    <section data-scroll-section>
      <p data-scroll>
        You're doing great, keep going😘
      </p>

      <img src="https://picsum.photos/200/300" alt="Girl in a jacket" width="500" height="600" data-scroll-speed="1">

      <p data-scroll data-scroll-speed="4">
        Scroll to add some color to your life!🎨
      </p>

      <p data-scroll data-scroll-speed="6">
        Scroll to add some color to your life!🎨
      </p>
    </section>
    <section data-scroll-section>
      <p data-scroll>
        Keep scrolling just a little more 🏃‍♀️
      </p>
    </section>
    <section data-scroll-section>
      <p data-scroll>
        Here you go!<br>Did you like it?🌈
      </p>
    </section>
  </div>
</template>

<script>
// import LocomotiveScroll from 'locomotive-scroll'

export default {
  setup () {
    const scrollroot = ref(null)
    let scroll = null

    const { $locomotiveScrollABC } = useNuxtApp()

    onMounted(() => {
      // await nextTick()
      console.log('a')
      scroll = $locomotiveScrollABC(scrollroot.value)
      console.log('b')

      console.log('c')

      // scroll = new $locomotiveScrollABC({
      //   el: scrollroot.value,
      //   smooth: true,
      //   smoothMobile: true,
      //   getDirection: true
      // })
    })
    return {
      scrollroot
    }
  }
}
</script>

<style>
  section {
    height: 400px;
  }

  progress {
    position: fixed;
  }
</style>
