@extends('layouts.main')

@section('content')
  {{-- Main screen desktop --}}
  <div class="main-screen-desktop card bg-dark text-white d-none d-lg-block">
    <img src="/images/main.jpg" class="card-img" alt="">
    <div class="card-img-overlay">
      <h1 class="card-title">Аренда вилл и апартаментов в Черногории без посредников</h1>
    </div>
  </div>

  {{-- Main screen mobile --}}
  <div class="main-screen-mobile card bg-dark text-white d-lg-none">
    <img src="/images/main.jpg" class="card-img" alt="">
    <div class="card-img-overlay">
      <!-- Contacts mobile-->
      <div class="contacts-mobile mb-4">
        <div class="media mr-2">
          <img width="25" src="{{ asset('images/viber.png') }}" class="align-self-center mr-2" alt="">
          <img width="25" src="{{ asset('images/whatsapp.svg') }}" class="align-self-center mr-2" alt="">
          <div class="media-body">
            <span class="text-white">+382 68 089 888</span>
          </div>
        </div>
      </div> 
      <!-- EndContacts desktop-->
      <h1 class="card-title text-center mb-0">Аренда вилл и апартаментов в Черногории без посредников</h1>
    </div>
  </div>

  {{-- Areas --}}
  <div class="container">
    <h2 class="text-center mt-5 mb-5">Отдых в Черногории в 2020 году. Часто задаваемые вопросы.</h2>
    <h3 class="text-center mt-5 mb-5">КУРОРТЫ И ГОРОДА В ЧЕРНОГОРИИ: КУДА ЛУЧШЕ ПОЕХАТЬ?</h3>
    <div class="row">
      <div class="col-sm mb-4">
        <div class="card">
          <img src="/images/budva-riviera.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Будванская ривьера</h5>
            <p class="card-text">Открытое море. Лучшие пляжи в Черногории, преимущественно песчано-галечные. Главные курортные места: Будва, Бечичи, Рафаиловичи, Свети Стефан (Близикуче), Петровац, Булярица.</p>
            <p class="card-text">Будва — центр туризма в Черногории. Самая развитая инфраструктура. Максимальное количество туристов, отелей, магазинов, дискотек и развлечений. Почти все автобусные экскурсии на русском языке стартуют из Будвы. Три оборудованных песчано-галечных пляжа: Могрен, Словенска Плажа и Ричардова глава.</p>
          </div>
        </div>
      </div>
      <div class="col-sm mb-4">
        <div class="card">
          <img src="/images/boko-kotor-bay.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Бока-Которский залив</h5>
            <p class="card-text">Котор, Пераст, Рисан. Много старинных зданий, каменных улочек, древних церквей, памятников и достопримечательностей. Идеальное место для культурного отдыха. Пляжей почти нет. Купаться можно, ныряя с каменных плит на набережных, либо использовать небольшие понтоны с лесенками в воду. Открытого моря нет.</p>
            <p class="card-text">Герцег-Нови, Кумбор, Биела. Спокойное, чистое и глубокое море. Пляжи - мелкая галька. Самый зеленый и живописный регион, который называют «ботаническим садом» Черногории. Тихий курорт для семейного и романтического отдыха.</p>
          </div>
        </div>
      </div>
      <div class="col-sm">
        <div class="card">
          <img src="/images/bar-riviera.jpg" class="card-img-top" alt="">
          <div class="card-body">
            <h5 class="card-title">Барская ривьера</h5>
            <p class="card-text">Бар — это крупный деловой и промышленный центр с кварталами офисов и торговым портом. Русскоязычных туристов мало, цены ниже. Пляж в Баре галечный, купающихся немного. Туристы приезжают сюда в основном за покупками.</p>
            <p class="card-text">Добры Воды, Шушань, Сутоморе— много туристов (в основном сербы), мало туристической инфраструктуры и пляжей.</p>
            <p class="card-text">Ульцинь — мусульманско-албанский край Черногории. Пляж - Велика Плажапротяженностью 13 км. Самый ветреный регион. Идеальное место для кайтсерфинга.</p>
          </div>
        </div>
      </div>
    </div>
  </div>

  {{-- FAQ --}}
  <div class="container">    
    <div class="row mb-4">
      <div class="col">
        <h3 class="mt-4 mb-2">КАКОЕ МОРЕ В ЧЕРНОГОРИИ?</h3>
        <p>Адриатическое море с чистой (прозрачность воды до 60 м) и лазурной водой, но при этом не самое теплое. Вода очень соленая (содержание природной соли 40%) и богата минералами. Пляжный сезон в Черногории начинается в начале мая, а заканчивается в середине октября.</p>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <h3 class="mt-4 mb-2">КАКОЕ МОРЕ В ЧЕРНОГОРИИ?</h3>
        <p>Адриатическое море с чистой (прозрачность воды до 60 м) и лазурной водой, но при этом не самое теплое. Вода очень соленая (содержание природной соли 40%) и богата минералами. Пляжный сезон в Черногории начинается в начале мая, а заканчивается в середине октября.</p>
      </div>
    </div>
  </div>
@endsection