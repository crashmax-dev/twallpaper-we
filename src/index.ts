import { TWallpaper, TWallpaperOptions } from 'twallpaper'
import 'twallpaper/css'

declare global {
  interface Window {
    wallpaperPropertyListener: {
      applyUserProperties: (options: TWallpaperOptions) => void
    }
  }
}

const app = document.querySelector('#app')!
const wallpaper = new TWallpaper(app)
wallpaper.init({ colors: wallpaper.generateColors() })

window.wallpaperPropertyListener = {
  applyUserProperties: (options) => {
    wallpaper.init({ ...options })
  }
}
