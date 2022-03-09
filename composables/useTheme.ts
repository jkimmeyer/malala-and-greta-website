import { ref, computed } from '@nuxtjs/composition-api'
import { ThemeOptions } from '@/interfaces/ThemeOptions'
import { Themes } from '@/enums/Themes'

export const useTheme = () => {
  const currentTheme = ref(Themes.Default)

  const savedTheme = Themes.Malala

  if (savedTheme) {
    currentTheme.value = Themes[savedTheme]
  }

  const setCurrentTheme = (theme: ThemeOptions) => {
    // @ts-ignore
    currentTheme.value = Themes[theme]
    window.localStorage.setItem('THEME', currentTheme.value)
  }

  const switchTheme = () => {
    currentTheme.value =
      currentTheme.value === Themes.Greta ? Themes.Malala : Themes.Greta
    window.localStorage.setItem('THEME', currentTheme.value)
  }

  const getCurrentTheme = computed(() => currentTheme.value)

  return {
    setCurrentTheme,
    switchTheme,
    getCurrentTheme
  }
}
