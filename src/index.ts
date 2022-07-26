import { TWallpaper } from 'twallpaper'
import type { TWallpaperOptions } from 'twallpaper'
import 'twallpaper/css'

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyUserProperties: (options: TWallpaperOptions) => void
    }
  }
}

window.addEventListener('DOMContentLoaded', bootstrap)

function bootstrap() {
  const app = document.querySelector('#app')!
  const wallpaper = new TWallpaper(app)
  wallpaper.init({
    colors: wallpaper.generateColors()
  })

  window.wallpaperPropertyListener = {
    applyUserProperties: (options) => {
      wallpaper.init({ ...options })
    }
  }
}
