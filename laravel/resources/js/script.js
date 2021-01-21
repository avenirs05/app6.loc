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
    $(".footer").addClass("fixed-bottom");
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
  var match = href.match(/^(https?\:)\/\/(([^:\/?#]*)(?:\:([0-9]+))?)([\/]{0,1}[^?#]*)(\?[^#]*|)(#.*|)$/);

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


export let allRealtyDbFields = [
  'id',
  'name',
  'visibility',
  'subname_ru',
  'subname_en',
  'type_ru',
  'type_en',
  'country_ru',
  'country_en',
  'area_ru',
  'area_en',
  'city_ru',
  'city_en',
  'view_ru',
  'view_en',
  'transfer_payment_ru',
  'transfer_payment_en',
  'internet_payment_ru',
  'internet_payment_en',
  'parking_payment_ru',
  'parking_payment_en',
  'description_ru',   
  'description_en',   
  'map_html',
  'square',
  'bedrooms',
  'capacity',
  'price',
  'price_line_through',
  'price_jan',
  'price_feb',
  'price_mar',
  'price_apr',
  'price_may',
  'price_jun',
  'price_jul',
  'price_aug',
  'price_sep',
  'price_oct',
  'price_nov',
  'price_dec',
  'price_oct_apr',
  'booking_mark',
  'dist_sea',
  'dist_tivat',
  'dist_podg',
  'discount',  
  'images'
]

export const realtyLabels = {
  'id': 'id',
  'name': 'Название объекта',
  'visibility': 'Видимость',
  'subname_ru': 'Мини-описание',
  'subname_en': 'Мини-описание — English',
  'type_ru': 'Тип объекта',
  'type_en': 'Тип объекта — English',
  'country_ru': 'Страна',
  'country_en': 'Страна — English',
  'area_ru': 'Район',
  'area_en': 'Район — English',
  'city_ru': 'Город',
  'city_en': 'Город — English',
  'view_ru': 'Вид',
  'view_en': 'Вид — English',
  'transfer_payment_ru': 'Трансфер',
  'transfer_payment_en': 'Трансфер — English',
  'internet_payment_ru': 'Интернет',
  'internet_payment_en': 'Интернет — English',
  'parking_payment_ru': 'Паркинг',
  'parking_payment_en': 'Паркинг — English',
  'description_ru': 'Описание подробное',   
  'description_en': 'Описание подробное — English',   
  'map_html': 'Карта (html-код)',
  'square': 'Площадь (метров)',
  'bedrooms': 'Спален (количество)',
  'capacity': 'Вместимость (человек)',
  'price': 'Цена (€)',
  'price_line_through': 'Цена перечеркнутая (€)',
  'price_jan': 'Цена — Январь (€)',
  'price_feb': 'Цена — Февраль (€)',
  'price_mar': 'Цена — Март(€)',
  'price_apr': 'Цена — Апрель (€)',
  'price_may': 'Цена — Май (€)',
  'price_jun': 'Цена — Июнь (€)',
  'price_jul': 'Цена — Июль (€)',
  'price_aug': 'Цена — Август (€)',
  'price_sep': 'Цена — Сентябрь (€)',
  'price_oct': 'Цена — Октябрь (€)',
  'price_nov': 'Цена — Ноябрь (€)',
  'price_dec': 'Цена — Декабрь (€)',
  'price_oct_apr': 'Цена — Октябрь-Апрель (€)',
  'booking_mark': 'Букинг (оценка)',
  'dist_sea': 'Расстояние до моря (км)',
  'dist_tivat': 'Расстояние до аэропорта Тиват (км)',
  'dist_podg': 'Расстояние до аэропорта Подгорица (км)',
  'discount': 'Скидка (%)',  
  'thumbnails': 'Изображения галереи',
  'main_image': 'Главное изображение'
}

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
