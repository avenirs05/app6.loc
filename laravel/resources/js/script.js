// SwitchToActualLang
export function switchToActualLang() {
  function insertText() {
    let actualLang = event.target.innerText
    document.querySelector('.lang-text-actual').innerText = actualLang
    location.href = '/locale/' + actualLang.trim().toLowerCase()
  }

  document.querySelector('.lang-choice-desktop .lang-list').addEventListener('click', insertText)
  document.querySelector('.lang-choice-mobile .lang-list').addEventListener('click', insertText)
}


// We have to delete 'active' class on Menu Item 
export function markActualMenuPage() {
  let collection = document.querySelectorAll('#navbarCollapse .nav-link')

  for (let i = 0; i < collection.length; i++) {
    let str = collection[i].getAttribute('href')
    let arr = str.split('/')
    let pageName = arr[arr.length - 1]

    if (location.pathname === '/') {
      collection[i].parentElement.classList.remove("active")
      return
    }

    if (('/' + pageName) === location.pathname) {
      collection[i].parentElement.classList.remove("active")
      return
    }
  }
}


// Прижать футер к низу
export function footerToBottom() {
  if ($(document).height() <= $(window).height()) {
    $(".footer").addClass("fixed-bottom")
  }
}


export function openLightGalleryIfClickMainImg() {
  let imgMain = document.querySelector('.img-main-lightgallery')

  if (imgMain) {
    imgMain.addEventListener('click', function () {
      document.querySelector('.img-thumb-lightgallery').click()
    })
  }
}

export function getLocation(href) {
  var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/)

  return match && {
    href: href,
    protocol: match[1],
    host: match[2],
    hostname: match[3],
    port: match[4],
    pathname: match[5],
    search: match[6],
    hash: match[7]
  }
}

export function getPath(href) {
  var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);
  return match[5]
}


export function getTotalPagesForPagination(totalCount, perPage) {
  return totalCount % perPage === 0 ?
    totalCount / perPage :
    Math.ceil(totalCount / perPage)
}


function getRealtyModelFields(realtyLabels) {
  let result = Object.keys(realtyLabels)
  
  result = result.filter(item => {
    if (item === 'thumbnails' || 
        item === 'main_image' ||
        item === 'options') 
    {
      return false
    } 
      else return item
  })
  
  result.push('images')

  return result
}


export const realtyLabels = {
  id: 'id',
  name: 'Название объекта',
  visibility: 'Видимость',
  subname_ru: 'Мини-описание',
  subname_en: 'Мини-описание — English',
  type_ru: 'Тип объекта',
  type_en: 'Тип объекта — English',
  country_ru: 'Страна',
  country_en: 'Страна — English',
  area_ru: 'Район',
  area_en: 'Район — English',
  city_ru: 'Город',
  city_en: 'Город — English',
  view_ru: 'Вид',
  view_en: 'Вид — English',
  transfer_payment_ru: 'Трансфер. Текстовое поле. Можно писать и текст',
  transfer_payment_en: 'Трансфер — English. Текстовое поле. Можно писать и текст',
  internet_payment_ru: 'Интернет. Текстовое поле. Можно писать и текст',
  internet_payment_en: 'Интернет — English. Текстовое поле. Можно писать и текст',
  parking_payment_ru: 'Паркинг. Текстовое поле. Можно писать и текст',
  parking_payment_en: 'Паркинг — English. Текстовое поле. Можно писать и текст',
  description_ru: 'Описание подробное',   
  description_en: 'Описание подробное — English',   
  map_html: 'Карта (html-код)',
  square: 'Площадь (метров)',
  bedrooms: 'Спален (количество)',
  capacity: 'Вместимость (человек)',
  price: 'Цена (€)',
  price_line_through: 'Цена перечеркнутая (€)',
  price_jan: 'Цена — Январь (€)',
  price_feb: 'Цена — Февраль (€)',
  price_mar: 'Цена — Март(€)',
  price_apr: 'Цена — Апрель (€)',
  price_may: 'Цена — Май (€)',
  price_jun: 'Цена — Июнь (€)',
  price_jul: 'Цена — Июль (€)',
  price_aug: 'Цена — Август (€)',
  price_sep: 'Цена — Сентябрь (€)',
  price_oct: 'Цена — Октябрь (€)',
  price_nov: 'Цена — Ноябрь (€)',
  price_dec: 'Цена — Декабрь (€)',
  price_oct_apr: 'Цена — Октябрь-Апрель (€)',
  booking_mark: 'Букинг (оценка)',
  dist_sea: 'Расстояние до моря (км)',
  dist_tivat: 'Расстояние до аэропорта Тиват (км)',
  dist_podg: 'Расстояние до аэропорта Подгорица (км)',
  discount: 'Скидка (%). Не трогать. Оставить 1%, как сейчас.',  
  thumbnails: 'Изображения галереи',
  main_image: 'Главное изображение',
  options: {
    visibility: {
      published: 'опубликовано',
      hidden: 'скрыто'
    },
    type: {
      apartment: 'апартамент',
      villa: 'вилла'
    }
  }
}

export const realtyFields = {
  id: {name: 'id', label: 'id', model: true},
  name: {name: 'name', label: 'Название объекта', model: true},
  visibility: {name: 'visibility', label: 'id', model: true},
  subname_ru: {name: 'subname_ru', label: 'id', model: true},
  subname_en: {name: 'subname_en', label: 'id', model: true},
  type_ru: {name: 'type_ru', label: 'id', model: true},
  type_en: {name: 'type_en', label: 'id', model: true},
  country_ru: {name: 'country_ru', label: 'id', model: true},
  country_en: {name: 'country_en', label: 'id', model: true},
  area_ru: {name: 'area_ru', label: 'id', model: true},
  area_en: {name: 'area_en', label: 'id', model: true},
  city_ru: {name: 'city_ru', label: 'id', model: true},
  city_en: {name: 'city_en', label: 'id', model: true},
  view_ru: {name: 'view_ru', label: 'id', model: true},
  view_en: {name: 'view_en', label: 'id', model: true},
  transfer_payment_ru: {name: 'transfer_payment_ru', label: 'id', model: true},
  transfer_payment_en: {name: 'transfer_payment_en', label: 'id', model: true},
  internet_payment_ru: {name: 'internet_payment_ru', label: 'id', model: true},
  internet_payment_en: {name: 'internet_payment_en', label: 'id', model: true},
  parking_payment_ru: {name: 'parking_payment_ru', label: 'id', model: true},
  parking_payment_en: {name: 'parking_payment_en', label: 'id', model: true},
  description_ru: {name: 'description_ru', label: 'id', model: true},  
  description_en: {name: 'description_en', label: 'id', model: true},   
  map_html: {name: 'map_html', label: 'id', model: true},
  square: {name: 'square', label: 'id', model: true},
  bedrooms: {name: 'bedrooms', label: 'id', model: true},
  capacity: {name: 'capacity', label: 'id', model: true},
  price: {name: 'price', label: 'id', model: true},
  price_line_through: {name: 'price_line_through', label: 'id', model: true},
  price_jan: {name: 'price_jan', label: 'id', model: true},
  price_feb: {name: 'price_feb', label: 'id', model: true},
  price_mar: {name: 'price_mar', label: 'id', model: true},
  price_apr: {name: 'price_apr', label: 'id', model: true},
  price_may: {name: 'price_may', label: 'id', model: true},
  price_jun: {name: 'price_jun', label: 'id', model: true},
  price_jul: {name: 'price_jul', label: 'id', model: true},
  price_aug: {name: 'price_aug', label: 'id', model: true},
  price_sep: {name: 'price_sep', label: 'id', model: true},
  price_oct: {name: 'price_oct', label: 'id', model: true},
  price_nov: {name: 'price_nov', label: 'id', model: true},
  price_dec: {name: 'price_dec', label: 'id', model: true},
  price_oct_apr: {name: 'price_oct_apr', label: 'id', model: true},
  booking_mark: {name: 'booking_mark', label: 'id', model: true},
  dist_sea: {name: 'dist_sea', label: 'id', model: true},
  dist_tivat: {name: 'dist_tivat', label: 'id', model: true},
  dist_podg: {name: 'dist_podg', label: 'id', model: true},
  discount: {name: 'discount', label: 'id', model: true},  
  thumbnails: {name: 'thumbnails', label: 'id', model: true},
  main_image: {name: 'main_image', label: 'id', model: true},
}


export let realtyModelFields = getRealtyModelFields(realtyLabels)


// Return object with props only of array has it prop 
export const reduceObjByArray = (array, obj) => { 
  let result = {}

  array.forEach(prop => {
    if (obj[prop]) {
      result[prop] = obj[prop]
    }    
  }) 

  return result
}

