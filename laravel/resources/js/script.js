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


export function realtyAllDbFields(response) {
  return {
    id: response.data.id,
    name: response.data.name,
    subname_ru: response.data.subname_ru,
    subname_en: response.data.subname_en,
    type_ru: response.data.type_ru,
    type_en: response.data.type_en,
    country_ru: response.data.country_ru,
    country_en: response.data.country_en,
    area_ru: response.data.area_ru,
    area_en: response.data.area_en,
    city_ru: response.data.city_ru,
    city_en: response.data.city_en,
    visibility: response.data.visibility,
    square: response.data.square,
    bedrooms: response.data.bedrooms,
    capacity: response.data.capacity,
    price: response.data.price,
    price_line_through: response.data.price_line_through,
    booking_mark: response.data.booking_mark,
    view_ru: response.data.view_ru,
    dist_sea: response.data.dist_sea,
    dist_tivat: response.data.dist_tivat,
    dist_podg: response.data.dist_podg,
    transfer_payment_ru: response.data.transfer_payment_ru,
    internet_payment_ru: response.data.internet_payment_ru,
    discount: response.data.discount,
    price_jan: response.data.price_jan,
    price_feb: response.data.price_feb,
    price_mar: response.data.price_mar,
    price_apr: response.data.price_apr,
    price_may: response.data.price_may,
    price_jun: response.data.price_jun,
    price_jul: response.data.price_jul,
    price_aug: response.data.price_aug,
    price_sep: response.data.price_sep,
    price_oct: response.data.price_oct,
    price_nov: response.data.price_nov,
    price_dec: response.data.price_dec,
    price_oct_apr: response.data.price_oct_apr,
    description_ru: response.data.description_ru,
    map_html: response.data.map_html
  }
}