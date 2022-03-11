import { ref, computed } from '@nuxtjs/composition-api'
import { ControlThemes } from '@/enums/ControlThemes'
import { ControlThemeOptions } from '@/interfaces/ControlThemeOptions'

const currentControlTheme = ref(ControlThemes.Dark)

const setCurrentControlTheme = (controlTheme: ControlThemeOptions) => {
  // @ts-ignore
  currentControlTheme.value = ControlThemes[controlTheme]
}

const getCurrentControlTheme = computed(() => currentControlTheme.value)

export {
  setCurrentControlTheme,
  getCurrentControlTheme
}
