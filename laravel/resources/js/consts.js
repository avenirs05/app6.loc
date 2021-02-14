export const realtyFields = {
  id: { name: 'id', label: 'id', inCreateFormAsDefault: false, default: null },
  name: { name: 'name', label: 'Название объекта', inCreateFormAsDefault: true, default: '' },
  visibility: {
    name: 'visibility',
    label: 'Видимость',    
    options: {
      published: 'опубликовано',
      hidden: 'скрыто'
    },
    inCreateFormAsDefault: true,    
    default: 'опубликовано'
  },
  subname_ru: { name: 'subname_ru', label: 'Мини-описание', inCreateFormAsDefault: true, default: 'subname_ru' },
  subname_en: { name: 'subname_en', label: 'Мини-описание — English', inCreateFormAsDefault: true, default: 'subname_en' },
  type_ru: {
    name: 'type_ru',
    label: 'Тип объекта',    
    options: {
      apartment: 'апартамент',
      villa: 'вилла'
    },
    inCreateFormAsDefault: true,    
    default: 'апартамент'
  },
  type_en: {
    name: 'type_en',
    label: 'Тип объекта — English',    
    options: {
      apartment: 'apartment',
      villa: 'villa'
    },
    inCreateFormAsDefault: true,    
    default: 'apartment'
  },
  country_ru: { name: 'country_ru', label: 'Страна', inCreateFormAsDefault: true, default: 'Черногория' },
  country_en: { name: 'country_en', label: 'Страна — English', inCreateFormAsDefault: true, default: 'Montenegro' },
  area_ru: { name: 'area_ru', label: 'Район', inCreateFormAsDefault: true, default: 'Будванская ривьера' },
  area_en: { name: 'area_en', label: 'Район — English', inCreateFormAsDefault: true, default: 'Budva Riviera' },
  city_ru: { name: 'city_ru', label: 'Город',     inCreateFormAsDefault: true, default: 'Будва' },
  city_en: { name: 'city_en', label: 'Город — English', inCreateFormAsDefault: true, default: 'Budva' },
  view_ru: { name: 'view_ru', label: 'Вид',     inCreateFormAsDefault: true, default: 'на море' },
  view_en: { name: 'view_en', label: 'Вид — English', inCreateFormAsDefault: true, default: 'sea' },
  transfer_payment_ru: { name: 'transfer_payment_ru', label: 'Трансфер', inCreateFormAsDefault: true, default: 'бесплатный' },
  transfer_payment_en: { name: 'transfer_payment_en', label: 'Трансфер — English', inCreateFormAsDefault: true, default: 'free' },
  internet_payment_ru: { name: 'internet_payment_ru', label: 'Интернет',  inCreateFormAsDefault: true, default: 'бесплатный' },
  internet_payment_en: { name: 'internet_payment_en', label: 'Интернет — English', inCreateFormAsDefault: true, default: 'free' },
  parking_payment_ru: { name: 'parking_payment_ru', label: 'Паркинг', inCreateFormAsDefault: true, default: 'бесплатный' },
  parking_payment_en: { name: 'parking_payment_en', label: 'Паркинг — English', inCreateFormAsDefault: true, default: 'free' },
  description_ru: { name: 'description_ru', label: 'Описание подробное', inCreateFormAsDefault: true, default: 'description_ru' },
  description_en: { name: 'description_en', label: 'Описание подробное — English', inCreateFormAsDefault: true, default: 'description_en' },
  map_html: { name: 'map_html', label: 'Карта (html-код)', inCreateFormAsDefault: true, default: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>' },
  square: { name: 'square', label: 'Площадь (метров)', inCreateFormAsDefault: true, default: 10 },
  bedrooms: { name: 'bedrooms', label: 'Спален (количество)', inCreateFormAsDefault: true, default: 11},
  capacity: { name: 'capacity', label: 'Вместимость (человек)', inCreateFormAsDefault: true, default: 12},
  price: { name: 'price', label: 'Цена (€)', inCreateFormAsDefault: true, default: 13 },
  price_line_through: { name: 'price_line_through', label: 'Цена перечеркнутая (€)', inCreateFormAsDefault: true, default: 14 },
  price_jan: { name: 'price_jan', label: 'Цена — Январь (€)', inCreateFormAsDefault: true, default: 15 },
  price_feb: { name: 'price_feb', label: 'Цена — Февраль (€)', inCreateFormAsDefault: true, default: 16 },
  price_mar: { name: 'price_mar', label: 'Цена — Март(€)', inCreateFormAsDefault: true, default: 17 },
  price_apr: { name: 'price_apr', label: 'Цена — Апрель (€)', inCreateFormAsDefault: true, default: 18 },
  price_may: { name: 'price_may', label: 'Цена — Май (€)', inCreateFormAsDefault: true, default: 19 },
  price_jun: { name: 'price_jun', label: 'Цена — Июнь (€)', inCreateFormAsDefault: true, default: 20 },
  price_jul: { name: 'price_jul', label: 'Цена — Июль (€)', inCreateFormAsDefault: true, default: 21 },
  price_aug: { name: 'price_aug', label: 'Цена — Август (€)', inCreateFormAsDefault: true, default: 22 },
  price_sep: { name: 'price_sep', label: 'Цена — Сентябрь (€)', inCreateFormAsDefault: true, default: 23 },
  price_oct: { name: 'price_oct', label: 'Цена — Октябрь (€)', inCreateFormAsDefault: true, default: 24 },
  price_nov: { name: 'price_nov', label: 'Цена — Ноябрь (€)', inCreateFormAsDefault: true, default: 25 },
  price_dec: { name: 'price_dec', label: 'Цена — Декабрь (€)', inCreateFormAsDefault: true, default: 26 },
  price_oct_apr: { name: 'price_oct_apr', label: 'Цена — Октябрь-Апрель (€)', inCreateFormAsDefault: true, default: 27 },
  booking_mark: { name: 'booking_mark', label: 'Букинг (оценка)', inCreateFormAsDefault: true, default: 7.1 },
  dist_sea: { name: 'dist_sea', label: 'Расстояние до моря (км)', inCreateFormAsDefault: true, default: 28 },
  dist_tivat: { name: 'dist_tivat', label: 'Расстояние до аэропорта Тиват (км)', inCreateFormAsDefault: true, default: 29 },
  dist_podg: { name: 'dist_podg', label: 'Расстояние до аэропорта Подгорица (км)', inCreateFormAsDefault: true, default: 30 },
  discount: { name: 'discount', label: 'Скидка (%)', inCreateFormAsDefault: true, default: 1 },
  images: { name: 'images', label: '', inCreateFormAsDefault: false, default: null },
  thumbnails: { name: 'thumbnails', label: 'Изображения галереи', inCreateFormAsDefault: false, default: null },
  main_image: { name: 'main_image', label: 'Главное изображение', inCreateFormAsDefault: false, default: null },
}

export const feedbackFields = {
  id: { name: 'id', label: 'Id', inCreateFormAsDefault: false, default: null },
  author: { name: 'author', label: 'Автор', inCreateFormAsDefault: true, default: 'Инкогнито' },
  date: { name: 'date', label: 'Дата', inCreateFormAsDefault: true, default: '2000-01-01' },
  text: { name: 'text', label: 'Текст', inCreateFormAsDefault: true, default: 'Текст по умолчанию' },
  realty: { name: 'realty', label: 'Объект', inCreateFormAsDefault: false, default: 'Объект' },
  realty_id: { name: 'realty_id', label: 'Id объекта', inCreateFormAsDefault: true, default: 1 },
  realty_name: { name: 'realty_name', label: 'Объект', inCreateFormAsDefault: false, default: 'realty_name' },
}

export const contentFields = {
  id: { name: 'id', label: 'Id', inCreateFormAsDefault: false, default: null },
  phone_main: { name: 'phone_main', label: 'Телефон основной', default: '+7 928 270 70 70' },
  header_main_ru: { name: 'header_main_ru', label: 'Заголовок основной', default: 'Заголовок основной' },
  header_main_en: { name: 'header_main_en', label: 'Заголовок основной — English', default: 'Заголовок основной — English' },
  faq_areas_ru_title: { name: 'faq_areas_ru_title', label: 'FAQ - Районы в Черногории - Заголовок', default: 'FAQ - Районы в Черногории - Заголовок' },
  faq_areas_en_title: { name: 'faq_areas_en_title', label: 'FAQ - Районы в Черногории - Заголовок', default: 'FAQ - Районы в Черногории - Заголовок — English' },
}

export const muiFormLabelClass = "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"





