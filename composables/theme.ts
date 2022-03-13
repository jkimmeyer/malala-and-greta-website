import { ref, computed } from '@nuxtjs/composition-api'
import { ThemeOptions } from '@/interfaces/ThemeOptions'
import { Themes } from '@/enums/Themes'

const currentTheme = ref(Themes.Malala)

const setCurrentTheme = (theme: ThemeOptions) => {
  if (process.client) {
    // @ts-ignore
    currentTheme.value = Themes[theme]
    window.localStorage.setItem('THEME', currentTheme.value)
  }
}

const switchTheme = () => {
  if (process.client) {
    currentTheme.value =
      currentTheme.value === Themes.Greta ? Themes.Malala : Themes.Greta
    window.localStorage.setItem('THEME', currentTheme.value)
  }
}

const getCurrentTheme = computed(() => currentTheme.value)

export {
  setCurrentTheme,
  getCurrentTheme,
  switchTheme
}
