import type { Plugin } from 'vite'
import dayjs, { Dayjs } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import { green, blue, bold } from 'picocolors'
import { getPackageSize } from '@pureadmin/utils'
dayjs.extend(duration)

export function viteBuildInfo(): Plugin {
  let config: { command: string }
  let startTime: Dayjs
  let endTime: Dayjs
  let outDir: string
  return {
    name: 'vite:buildInfo',
    configResolved(resolvedConfig) {
      config = resolvedConfig
      outDir = resolvedConfig.build?.outDir ?? 'dist'
    },
    buildStart() {
      const askm = ` ____     ____    __  __           ____           __  __  ______
/\\  _\`\\  /\\  _\`\\ /\\ \\/\\ \\  /'\\_/\`\\/\\  _\`\\        /\\ \\/\\ \\/\\__  _\\
\\ \\ \\/\\_\\\\ \\ \\/\\ \\ \\ \\_\\ \\/\\      \\ \\ \\L\\ \\      \\ \\ \\ \\ \\/_/\\ \\/
 \\ \\ \\/_/_\\ \\ \\ \\ \\ \\  _  \\ \\ \\__\\ \\ \\ ,__/_______\\ \\ \\ \\ \\ \\ \\ \\
  \\ \\ \\L\\ \\\\ \\ \\_\\ \\ \\ \\ \\ \\ \\ \\_/\\ \\ \\ \\//\\______\\\\ \\ \\_\\ \\ \\_\\ \\__
   \\ \\____/ \\ \\____/\\ \\_\\ \\_\\ \\_\\\\ \\_\\ \\_\\\\/______/ \\ \\_____\\/\\_____\\
    \\/___/   \\/___/  \\/_/\\/_/\\/_/ \\/_/\\/_/           \\/_____/\\/_____/

                                                                     `
      console.log(bold(green(`${blue(askm)}`)))
      if (config.command === 'build') {
        startTime = dayjs(new Date())
      }
    },
    closeBundle() {
      if (config.command === 'build') {
        endTime = dayjs(new Date())
        getPackageSize({
          folder: outDir,
          callback: (size: string) => {
            console.log(
              bold(
                green(
                  `恭喜打包完成（总用时${dayjs
                    .duration(endTime.diff(startTime))
                    .format('mm分ss秒')}，打包后的大小为${size}）`
                )
              )
            )
          }
        })
      }
    }
  }
}
