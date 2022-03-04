<template>
  <div>
    <progress max="100" value="0" />
    <section>
      <p>Scroll to add some color to your life!🎨</p>
    </section>
    <section>
      <p>You're doing great, keep going😘</p>
    </section>
    <section>
      <p>Keep scrolling just a little more 🏃‍♀️</p>
    </section>
    <section>
      <p>Here you go!<br>Did you like it?🌈</p>
    </section>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger.js'

export default {
  mounted () {
    gsap.registerPlugin(ScrollTrigger)
    setTimeout(() => {
      gsap.to('progress', {
        value: 100,
        ease: 'none',
        scrollTrigger: { scrub: 0.3 }
      }, 200)
    })
  }
}
</script>

<style>
  section {
    height: 100vh;
  }

  progress {
    position: fixed;
  }
</style>
