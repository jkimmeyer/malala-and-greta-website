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
  const groupName = 'group-all'
  const showMarkers = true

  // gsap.registerPlugin(ScrollTrigger)

  const getAllOfGroup = group => ScrollTrigger.getAll().filter(t => t.vars.group === group)

  // const start = () => {
  //   console.log(getAllOfGroup(groupName))
  //   gsap.registerPlugin(ScrollTrigger)
  //   getAllOfGroup(groupName).forEach(t => t.enable())
  // }

  // const stop = () => {
  //   getAllOfGroup(groupName).forEach(t => t.kill())
  // }
  const parseValue = (element) => {
    let animationValue
    if (element.classList.contains()) {
      element.classList.forEach((c) => {
        if (c.startsWith('animation-value-')) {
          animationValue = c.substring(0, 16)
        }
      })
      return animationValue
    }
  }

  const pin = (element) => {
    return gsap.to(element, {
      scrollTrigger: {
        trigger: element,
        pin: true,
        group: groupName
      }
    })
    // end: '+=1300px'
  }

  const animateBackgroundColor = (element, backgroundColor) => {
    return gsap.to('.page', {
      backgroundColor,
      scrollTrigger: {
        trigger: element,
        start: 'top center',
        scrub: true,
        group: groupName
      }
    })
  }

  const parallax = (element, yPercent) => {
    return gsap.to(element, {
      yPercent,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        scrub: true,
        group: groupName
      }
    })
  }

  const reveal = (element, x) => {
    return gsap.fromTo(element, {
      x,
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
        start: 'top 75%',
        trigger: element,
        toggleActions: 'restart none none reset',
        markers: showMarkers,
        group: groupName
      }
    })
  }

  const hide = (element) => {
    gsap.set(element, { autoAlpha: 0 })
  }

  const animateAll = () => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.utils.toArray('.reveal-left').forEach((element) => {
      hide(element)
      reveal(element, -100)
    })
    gsap.utils.toArray('.reveal-right').forEach((element) => {
      hide(element)
      reveal(element, 100)
    })
    gsap.utils.toArray('.parallax').forEach((element) => {
      parallax(element, 100)
    })
    gsap.utils.toArray('.parallax-fast').forEach((element) => {
      parallax(element, -100)
    })
    gsap.utils.toArray('.pin').forEach((element) => {
      pin(element)
    })
  }

  return {
    animateAll,
    animateBackgroundColor
  }
}
