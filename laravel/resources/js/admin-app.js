/**
 * First we will load all of this project's JavaScript dependencies which
 * includes React and other helpers. It's a great starting point while
 * building robust, powerful web applications using React + Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh React component instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

require('./components/Example');

// My js-scripts
import {switchToActualLang, 
        markActualMenuPage, 
        footerToBottom, 
        openLightGalleryIfClickMainImg} from './script'

switchToActualLang()
markActualMenuPage()
footerToBottom()

// Lightgallery
require('lightgallery.js')
require('lg-thumbnail.js')
lightGallery(document.getElementById('lightgallery'))

openLightGalleryIfClickMainImg()


//console.log(location.href);
//alert('hhh')







