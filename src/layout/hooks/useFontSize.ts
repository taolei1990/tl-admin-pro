/*设置字号*/
export const setFontSize = val => {
  const fontSizes = {
    default: {
      '--qw-font-size-default': '14px',
      '--qw-font-size-vital': '18px',
      '--qw-font-size-minor': '12px',
      '--qw-font-size-large': '26px'
    },
    large: {
      '--qw-font-size-default': '16px',
      '--qw-font-size-vital': '20px',
      '--qw-font-size-minor': '14px',
      '--qw-font-size-large': '28px'
    }
  }
  Object.keys(fontSizes[val]).forEach(key => {
    document.documentElement.style.setProperty(key, fontSizes[val][key])
  })
}
