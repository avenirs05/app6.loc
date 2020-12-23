import { getPath } from './script'
window._ = require('lodash')
window.axios = require('axios')
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'

if (location.pathname === getPath(route('admin.index'))) {
  require('./admin-index')  
} else {
    try {
      window.Popper = require('popper.js').default;
      window.$ = window.jQuery = require('jquery');
      require('bootstrap');
    } catch (e) { console.log(e) }
    
    (async function loadScripts() {
      // Lightgallery
      require('lightgallery.js')
      require('lg-thumbnail.js')
      lightGallery(document.getElementById('lightgallery'))

      // My js-scripts
      let scripts = await import('./script')
      scripts.switchToActualLang()
      scripts.markActualMenuPage()
      scripts.footerToBottom()
      scripts.openLightGalleryIfClickMainImg()
    })()
} 