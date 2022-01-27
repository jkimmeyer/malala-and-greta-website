import { gsap } from 'gsap/dist/gsap.js'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger.js'

// gsap.fromTo('.section-1-text', {
//     x: 100,
//     y: 0,
//     autoAlpha: 0
//   }, {
//     duration: 1.25,
//     x: 0,
//     y: 0,
//     autoAlpha: 1,
//     ease: 'expo',
//     overwrite: 'auto',
//     scrollTrigger: {
//       start: 'top center',
//       trigger: '.section-1-text',
//       toggleActions: 'restart none none reverse',
//       markers: true
//     }
//   })

// gsap.registerPlugin(ScrollTrigger)

// ScrollTrigger.create({
//   trigger: '.image',
//   animation: anim,
//   markers: true
// })

// gsap.fromTo('.section-1-text', {
//   x: 100,
//   y: 0,
//   autoAlpha: 0
// }, {
//   duration: 1.25,
//   x: 0,
//   y: 0,
//   autoAlpha: 1,
//   ease: 'expo',
//   overwrite: 'auto',
//   scrollTrigger: {
//     start: 'top center',
//     trigger: '.section-1-text',
//     toggleActions: 'restart none none reverse',
//     markers: true
//   }
// })
// gsap.to('.section-1-text', {
//   scrollTrigger: {
//     start: 'top center',
//     trigger: '.section-1-text',
//     toggleActions: 'restart play none none',
//     markers: true,
//     scrub: 1
//   },
//   x: 400,
//   rotation: 360,
//   duration: 3
// })

export const useAnimation = () => {
  gsap.registerPlugin(ScrollTrigger)

  const parallax = (element) => {
    return gsap.to(element, {
      yPercent: 100,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scrub: true
      }
    })
  }

  const revealRight = (element) => {
    return gsap.fromTo(element, {
      x: 100,
      y: 0,
      autoAlpha: 0
    }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
      scrollTrigger: {
        start: 'top 60%',
        trigger: element,
        toggleActions: 'restart none none reset',
        markers: true
      }
    })
  }
  const revealLeft = (element) => {
    return gsap.fromTo(element, {
      x: -100,
      y: 0,
      autoAlpha: 0
    }, {
      duration: 1.25,
      x: 0,
      y: 0,
      autoAlpha: 1,
      ease: 'expo',
      overwrite: 'auto',
      scrollTrigger: {
        start: 'top 60%',
        trigger: element,
        toggleActions: 'restart none none reset',
        markers: true
      }
    })
  }
  const hide = (elem) => {
    gsap.set(elem, { autoAlpha: 0 })
  }

  const animateAll = () => {
    gsap.utils.toArray('.reveal-left').forEach(function (element) {
      hide(element)
      revealLeft(element)
    })
    gsap.utils.toArray('.reveal-right').forEach(function (element) {
      hide(element)
      revealRight(element)
    })
    gsap.utils.toArray('.parallax').forEach(function (element) {
      parallax(element)
    })
  }

  return {
    hide,
    revealLeft,
    revealRight,
    animateAll
  }
}
