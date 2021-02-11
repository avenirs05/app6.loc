export const realtyFields = {
  id: {
    name: 'id',
    label: 'id',
    model: true,
    inCreateFormAsDefault: false,
    default: null
  },
  name: {
    name: 'name',
    label: 'Название объекта',
    model: true,
    inCreateFormAsDefault: true,
    default: ''
  },
  visibility: {
    name: 'visibility',
    label: 'Видимость',
    model: true,
    options: {
      published: 'опубликовано',
      hidden: 'скрыто'
    },
    inCreateFormAsDefault: true,
    default: 'опубликовано'
  },
  subname_ru: {
    name: 'subname_ru',
    label: 'Мини-описание',
    model: true,
    inCreateFormAsDefault: true,
    default: 'subname_ru',
  },
  subname_en: {
    name: 'subname_en',
    label: 'Мини-описание — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'subname_en'
  },
  type_ru: {
    name: 'type_ru',
    label: 'Тип объекта',
    model: true,
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
    model: true,
    options: {
      apartment: 'apartment',
      villa: 'villa'
    },
    inCreateFormAsDefault: true,
    default: 'apartment'
  },
  country_ru: {
    name: 'country_ru',
    label: 'Страна',
    model: true,
    inCreateFormAsDefault: true,
    default: 'Черногория'
  },
  country_en: {
    name: 'country_en',
    label: 'Страна — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'Montenegro'
  },
  area_ru: {
    name: 'area_ru',
    label: 'Район',
    model: true,
    inCreateFormAsDefault: true,
    default: 'Будванская ривьера'
  },
  area_en: {
    name: 'area_en',
    label: 'Район — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'Budva Riviera'
  },
  city_ru: {
    name: 'city_ru',
    label: 'Город',
    model: true,
    inCreateFormAsDefault: true,
    default: 'Будва'
  },
  city_en: {
    name: 'city_en',
    label: 'Город — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'Budva'
  },
  view_ru: {
    name: 'view_ru',
    label: 'Вид',
    model: true,
    inCreateFormAsDefault: true,
    default: 'на море'
  },
  view_en: {
    name: 'view_en',
    label: 'Вид — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'sea'
  },
  transfer_payment_ru: {
    name: 'transfer_payment_ru',
    label: 'Трансфер',
    model: true,
    inCreateFormAsDefault: true,
    default: 'бесплатный'
  },
  transfer_payment_en: {
    name: 'transfer_payment_en',
    label: 'Трансфер — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'free'
  },
  internet_payment_ru: {
    name: 'internet_payment_ru',
    label: 'Интернет',
    model: true,
    inCreateFormAsDefault: true,
    default: 'бесплатный'
  },
  internet_payment_en: {
    name: 'internet_payment_en',
    label: 'Интернет — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'free'
  },
  parking_payment_ru: {
    name: 'parking_payment_ru',
    label: 'Паркинг',
    model: true,
    inCreateFormAsDefault: true,
    default: 'бесплатный'
  },
  parking_payment_en: {
    name: 'parking_payment_en',
    label: 'Паркинг — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'free'
  },
  description_ru: {
    name: 'description_ru',
    label: 'Описание подробное',
    model: true,
    inCreateFormAsDefault: true,
    default: 'description_ru'
  },
  description_en: {
    name: 'description_en',
    label: 'Описание подробное — English',
    model: true,
    inCreateFormAsDefault: true,
    default: 'description_en'
  },
  map_html: {
    name: 'map_html',
    label: 'Карта (html-код)',
    model: true,
    inCreateFormAsDefault: true,
    default: '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>'
  },
  square: {
    name: 'square',
    label: 'Площадь (метров)',
    model: true,
    default: 10
  },
  bedrooms: {
    name: 'bedrooms',
    label: 'Спален (количество)',
    model: true,
    inCreateFormAsDefault: true,
    default: 11
  },
  capacity: {
    name: 'capacity',
    label: 'Вместимость (человек)',
    model: true,
    inCreateFormAsDefault: true,
    default: 12
  },
  price: {
    name: 'price',
    label: 'Цена (€)',
    model: true,
    inCreateFormAsDefault: true,
    default: 13
  },
  price_line_through: {
    name: 'price_line_through',
    label: 'Цена перечеркнутая (€)',
    model: true,
    inCreateFormAsDefault: true,
    default: 14
  },
  price_jan: {
    name: 'price_jan',
    label: 'Цена — Январь (€)',
    model: true,
    inCreateFormAsDefault: true,
    default: 15
  },
  price_feb: {
    name: 'price_feb', 
    label: 'Цена — Февраль (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 16
  },
  price_mar: {    
    name: 'price_mar', 
    label: 'Цена — Март(€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 17
  },
  price_apr: { 
    name: 'price_apr', 
    label: 'Цена — Апрель (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 18 
  },
  price_may: { 
    name: 'price_may', 
    label: 'Цена — Май (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 19 
  },
  price_jun: { 
    name: 'price_jun', 
    label: 'Цена — Июнь (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 20 
  },
  price_jul: { 
    name: 'price_jul', 
    label: 'Цена — Июль (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 21 
  },
  price_aug: { 
    name: 'price_aug', 
    label: 'Цена — Август (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 22 
  },
  price_sep: { 
    name: 'price_sep', 
    label: 'Цена — Сентябрь (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 23 
  },
  price_oct: { 
    name: 'price_oct', 
    label: 'Цена — Октябрь (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 24 
  },
  price_nov: { 
    name: 'price_nov', 
    label: 'Цена — Ноябрь (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 25 
  },
  price_dec: { 
    name: 'price_dec', 
    label: 'Цена — Декабрь (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 26 
  },
  price_oct_apr: { 
    name: 'price_oct_apr', 
    label: 'Цена — Октябрь-Апрель (€)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 27 
  },
  booking_mark: { 
    name: 'booking_mark', 
    label: 'Букинг (оценка)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 7.1 
  },
  dist_sea: { 
    name: 'dist_sea', 
    label: 'Расстояние до моря (км)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 28 
  },
  dist_tivat: { 
    name: 'dist_tivat', 
    label: 'Расстояние до аэропорта Тиват (км)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 29 
  },
  dist_podg: { 
    name: 'dist_podg', 
    label: 'Расстояние до аэропорта Подгорица (км)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 30 
  },
  discount: { 
    name: 'discount', 
    label: 'Скидка (%)', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 1 
  },
  images: { 
    name: 'images', 
    label: '', 
    model: true, 
    inCreateFormAsDefault: false, 
    default: null 
  },
  thumbnails: { 
    name: 'thumbnails', 
    label: 'Изображения галереи', 
    model: false, 
    inCreateFormAsDefault: false, 
    default: null 
  },
  main_image: { 
    name: 'main_image', 
    label: 'Главное изображение', 
    model: false, 
    inCreateFormAsDefault: false, 
    default: null 
  },
}

export const feedbackFields = {
  id: { 
    name: 'id', 
    label: 'Id', 
    model: true, 
    inCreateFormAsDefault: false, 
    default: null 
  },
  author: { 
    name: 'author', 
    label: 'Автор', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 'Инкогнито' 
  },
  date: { 
    name: 'date', 
    label: 'Дата', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: '2000-01-01' 
  },
  text: { 
    name: 'text', 
    label: 'Текст', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 'Текст по умолчанию' 
  },
  realty: { 
    name: 'realty', 
    label: 'Объект', 
    model: true, 
    inCreateFormAsDefault: false, 
    default: 'Объект' 
  },
  realty_id: { 
    name: 'realty_id', 
    label: 'Id объекта', 
    model: true, 
    inCreateFormAsDefault: true, 
    default: 1 
  },
  realty_name: { 
    name: 'realty_name', 
    label: 'Объект', 
    model: false, 
    inCreateFormAsDefault: false, 
    default: 'realty_name' 
  },
}

export const muiFormLabelClass = "MuiFormLabel-root MuiInputLabel-root MuiInputLabel-animated MuiInputLabel-shrink MuiFormLabel-filled"





