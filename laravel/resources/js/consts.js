export const realtyFields = {
  id: {name: 'id', label: 'id', model: true, default: null},
  name: {name: 'name', label: 'Название объекта', model: true, default: null},
  visibility: {
    name: 'visibility', 
    label: 'Видимость', 
    model: true,
    options: {
      published: 'опубликовано',
      hidden: 'скрыто'
    },
    default: 'опубликовано'
  },
  subname_ru: {name: 'subname_ru', label: 'Мини-описание', model: true, default: 'subname_ru',},
  subname_en: {name: 'subname_en', label: 'Мини-описание — English', model: true, default: 'subname_en'},
  type_ru: {
    name: 'type_ru', 
    label: 'Тип объекта', 
    model: true,
    options: {
      apartment: 'апартамент',
      villa: 'вилла'
    },
    default: 'апартамент'
  },
  type_en: {
    name: 'type_en', 
    label: 'Тип объекта — English', 
    model: true,
    options: {
      apartment: 'apartment',
      villa: 'villa'
    },
    default: 'apartment'
  },
  country_ru: {name: 'country_ru', label: 'Страна', model: true, default: 'Черногория'},
  country_en: {name: 'country_en', label: 'Страна — English', model: true, default: 'Montenegro'},
  area_ru: {name: 'area_ru', label: 'Район', model: true, default: 'Будванская ривьера'},
  area_en: {name: 'area_en', label: 'Район — English', model: true, default: 'Budva Riviera'},
  city_ru: {name: 'city_ru', label: 'Город', model: true, default: 'Будва'},
  city_en: {name: 'city_en', label: 'Город — English', model: true, default: 'Budva'},
  view_ru: {name: 'view_ru', label: 'Вид', model: true, default: 'на море'},
  view_en: {name: 'view_en', label: 'Вид — English', model: true, default: 'sea'},
  transfer_payment_ru: {name: 'transfer_payment_ru', label: 'Трансфер', model: true, default: 'бесплатный'},
  transfer_payment_en: {name: 'transfer_payment_en', label: 'Трансфер — English', model: true, default: 'free'},
  internet_payment_ru: {name: 'internet_payment_ru', label: 'Интернет', model: true, default: 'бесплатный'},
  internet_payment_en: {name: 'internet_payment_en', label: 'Интернет — English', model: true, default: 'free'},
  parking_payment_ru: {name: 'parking_payment_ru', label: 'Паркинг', model: true, default: 'бесплатный'},
  parking_payment_en: {name: 'parking_payment_en', label: 'Паркинг — English', model: true, default: 'free'},
  description_ru: {name: 'description_ru', label: 'Описание подробное', model: true, default: 'description_ru'},  
  description_en: {name: 'description_en', label: 'Описание подробное — English', model: true, default: 'description_en'},   
  map_html: {name: 'map_html', label: 'Карта (html-код)', model: true, default: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>'},
  square: {name: 'square', label: 'Площадь (метров)', model: true, default: 10},
  bedrooms: {name: 'bedrooms', label: 'Спален (количество)', model: true, default: 11},
  capacity: {name: 'capacity', label: 'Вместимость (человек)', model: true, default: 12},
  price: {name: 'price', label: 'Цена (€)', model: true, default: 13},
  price_line_through: {name: 'price_line_through', label: 'Цена перечеркнутая (€)', model: true, default: 14},
  price_jan: {name: 'price_jan', label: 'Цена — Январь (€)', model: true, default: 15},
  price_feb: {name: 'price_feb', label: 'Цена — Февраль (€)', model: true, default: 16},
  price_mar: {name: 'price_mar', label: 'Цена — Март(€)', model: true, default: 17},
  price_apr: {name: 'price_apr', label: 'Цена — Апрель (€)', model: true, default: 18},
  price_may: {name: 'price_may', label: 'Цена — Май (€)', model: true, default: 19},
  price_jun: {name: 'price_jun', label: 'Цена — Июнь (€)', model: true, default: 20},
  price_jul: {name: 'price_jul', label: 'Цена — Июль (€)', model: true, default: 21},
  price_aug: {name: 'price_aug', label: 'Цена — Август (€)', model: true, default: 22},
  price_sep: {name: 'price_sep', label: 'Цена — Сентябрь (€)', model: true, default: 23},
  price_oct: {name: 'price_oct', label: 'Цена — Октябрь (€)', model: true, default: 24},
  price_nov: {name: 'price_nov', label: 'Цена — Ноябрь (€)', model: true, default: 25},
  price_dec: {name: 'price_dec', label: 'Цена — Декабрь (€)', model: true, default: 26},
  price_oct_apr: {name: 'price_oct_apr', label: 'Цена — Октябрь-Апрель (€)', model: true, default: 27},
  booking_mark: {name: 'booking_mark', label: 'Букинг (оценка)', model: true, default: 7.1},
  dist_sea: {name: 'dist_sea', label: 'Расстояние до моря (км)', model: true, default: 28},
  dist_tivat: {name: 'dist_tivat', label: 'Расстояние до аэропорта Тиват (км)', model: true, default: 29},
  dist_podg: {name: 'dist_podg', label: 'Расстояние до аэропорта Подгорица (км)', model: true, default: 30},
  discount: {name: 'discount', label: 'Скидка (%)', model: true, default: 1},  
  images: {name: 'images', label: '', model: true, default: null},
  thumbnails: {name: 'thumbnails', label: 'Изображения галереи', model: false, default: null},
  main_image: {name: 'main_image', label: 'Главное изображение', model: false, default: null},  
}

export const feedbackFields = {
  id: {name: 'id', label: 'id', model: true, default: null},
  author: {name: 'author', label: 'Автор', model: true, default: 'Инкогнито'}, 
  date: {name: 'date', label: 'Дата', model: true, default: '2000-00-00'}, 
  text: {name: 'text', label: 'Текст', model: true, default: 'Текст по умолчанию'}, 
  realty: {name: 'realty', label: 'Объект', model: true, default: 'Объект'}, 
}





