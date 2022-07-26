import { TWallpaper } from 'twallpaper'
import { colors } from './colors'
import { patterns } from './patterns'
import type { TWallpaperOptions } from 'twallpaper'
import 'twallpaper/css'

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyUserProperties: (options: TWallpaperOptions) => void
    }
  }
}

const options: TWallpaperOptions = {
  fps: 60,
  tails: 90,
  animate: true,
  scrollAnimate: true,
  colors: colors[0].colors,
  pattern: {
    image: patterns[0].path,
    background: '#000',
    blur: 0,
    size: '420px',
    opacity: 0.5,
    mask: false
  }
}

window.addEventListener('DOMContentLoaded', bootstrap)

function bootstrap() {
  const app = document.querySelector('#app')!
  const wallpaper = new TWallpaper(app, options)
  wallpaper.init()

  window.wallpaperPropertyListener = {
    applyUserProperties: (options) => {
      wallpaper.init({ ...options })
    }
  }
}
