import { ThemeOptions } from '@/interfaces/ThemeOptions'
import { Themes } from '@/enums/Themes'

const currentTheme = ref(Themes.Default)

const setCurrentTheme = (theme: ThemeOptions) => {
  // @ts-ignore
  currentTheme.value = Themes[theme]
}

const switchTheme = () => {
  currentTheme.value =
      currentTheme.value === Themes.Greta ? Themes.Malala : Themes.Greta
}

const getCurrentTheme = computed(() => currentTheme.value)

export {
  setCurrentTheme,
  getCurrentTheme,
  switchTheme
}
