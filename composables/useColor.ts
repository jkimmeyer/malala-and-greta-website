
interface AppColors {
  colorBackground: string;
  colorBackgroundDark: string;
  colorTextNeutral: string;
  colorTextDark: string;
  colorTextLight: string;
}
// TODO search for a better solution than this
export const useColor = (document): AppColors => {
  const style = getComputedStyle(document.body)
  const colorTextNeutral = style.getPropertyValue('--color-text-neutral')
  const colorTextDark = style.getPropertyValue('--color-text-dark')
  const colorTextLight = style.getPropertyValue('--color-text-light')

  const colorBackground = style.getPropertyValue('--color-background')
  const colorBackgroundDark = style.getPropertyValue('--color-background-dark')

  return {
    colorBackground,
    colorBackgroundDark,
    colorTextNeutral,
    colorTextDark,
    colorTextLight
  }
}
