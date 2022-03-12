import { ref, computed } from '@nuxtjs/composition-api'
import { ControlThemes } from '@/enums/ControlThemes'
import { ControlThemeOptions } from '@/interfaces/ControlThemeOptions'

const currentControlTheme = ref(ControlThemes.Dark)
const controlHintsEnabled = ref(true)

const setCurrentControlTheme = (controlTheme: ControlThemeOptions) => {
  // @ts-ignore
  currentControlTheme.value = ControlThemes[controlTheme]
}

const getCurrentControlTheme = computed(() => currentControlTheme.value)

const setControlHintsEnabled = (enabled: boolean) => {
  controlHintsEnabled.value = enabled
}

const getControlHintsEnabled = computed(() => controlHintsEnabled.value)

export {
  setCurrentControlTheme,
  getCurrentControlTheme,
  setControlHintsEnabled,
  getControlHintsEnabled
}
