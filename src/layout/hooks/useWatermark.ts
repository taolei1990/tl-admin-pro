import { useWatermark } from '@pureadmin/utils'

/*设置水印*/
export const setWatermark = (val, text = '添加水印', color = '#333', el?) => {
  const { setWatermark: setLocalWatermark, clear: clearLocal } =
    useWatermark(el)
  if (val) {
    setLocalWatermark(text, {
      globalAlpha: 0.15, // 值越低越透明
      gradient: [
        { value: 0, color: color },
        { value: 0.5, color: color },
        { value: 1.0, color: color }
      ],
      width: 120,
      height: 120
    })
  } else {
    clearLocal()
  }
}
/*清除水印*/
