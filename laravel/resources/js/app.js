if (location.pathname !== '/admin') {
  require('./bootstrap')

  try {
    window.Popper = require('popper.js').default;
    window.$ = window.jQuery = require('jquery');

    require('bootstrap');
  } catch (e) {}

  // Lightgallery
  require('lightgallery.js')
  require('lg-thumbnail.js')
  lightGallery(document.getElementById('lightgallery'))

  // My js-scripts
  async function loadScripts() {
    let scripts = await import('./script');

    scripts.switchToActualLang()
    scripts.markActualMenuPage()
    scripts.footerToBottom()
    scripts.openLightGalleryIfClickMainImg()
  }

  loadScripts()    
}


if (location.pathname === '/admin') {
  require('./bootstrap')
  require('./components/App')

  // My js-scripts
  async function loadScripts() {
    //console.log('will be scripts')
  }

  loadScripts()    
}










