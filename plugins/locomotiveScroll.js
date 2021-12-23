import LocomotiveScroll from 'locomotive-scroll'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin(() => {
  return {
    provide: {
      locomotiveScrollABC: (element) => {
        return new LocomotiveScroll({
          el: element,
          smooth: true,
          smoothMobile: true,
          getDirection: true
        })
      }
    }
  }
})
