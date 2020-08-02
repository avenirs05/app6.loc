@extends('layouts.main')

@section('content')	
  @include('chunks.title-page', ['h1' => 'Heart of Budva ' . $id])

  {{-- Realty Max Card Desktop --}}
	<div class="container realty-max-card-desktop d-none d-lg-block">    
    <div class="row">       
      {{-- Main image --}}
      <div class="col-5">
        <img src="{{ asset('images/realty-card.jpeg') }}" class="img-fluid" alt="Responsive image">
      </div>
      {{-- Realty Params --}}
      <div class="col-4">
        @include('chunks.realty-params-list')
      </div>
      {{-- Price --}}
      <div class="col-3">    
        @include('chunks.price')      
      </div>
    </div>       
    {{-- Thumbnails desktop --}}
    <div class="w-100" id="lightgallery">
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a>
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a> 
      <a href="{{ asset('images/realty-card.jpeg') }}">
        <img src="{{ asset('images/realty-card.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
      <a href="{{ asset('images/realty-card-2.jpeg') }}">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43" class="mb-1">
      </a>  
    </div>    
  </div> 
  
  {{-- Carousel Mobile --}}
  <div id="carouselExampleIndicators" class="carousel slide realty-max-card-mobile d-lg-none mb-3" data-ride="carousel">
    <ol class="carousel-indicators">
      <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
    </ol>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img src="{{ asset('images/realty-card.jpeg') }}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="{{ asset('images/realty-card-2.jpeg') }}" class="d-block w-100" alt="...">
      </div>
      <div class="carousel-item">
        <img src="{{ asset('images/realty-card.jpeg') }}" class="d-block w-100" alt="...">
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>

  {{-- Realty Params Mobile --}}
  <div class="container params-mobile d-lg-none">    
    <div class="row">       
      <div class="col">
        @include('chunks.realty-params-list')
      </div>
    </div>
  </div>

  {{-- Price Mobile --}}
  <div class="container price-mobile d-lg-none">    
    <div class="row">       
      <div class="col mt-4">   
        @include('chunks.price')
      </div>
    </div>
  </div> 

  {{-- Feedbacks --}}
  <div class="container feedbacks">    
    <div class="row mt-5">       
      <div class="col">   
        <div class="jumbotron">
          <h3>Алена</h3>
          <p class="lead">июль 2016</p>
          <hr class="my-4">
          <div>
            <p>Отель выбирала за пару дней до спонтанного вылета, оставались очень дорогие варианты, либо дешевые, но ужасные. А эта вилла, хотя по карте была далековата от пляжа, но очень понравилась по фото и имела более чем доступную цену. В реальности все соответствовало фотографиям: светлая комната, новое постельное, все очень чистое. 3 санузла на 3 комнаты, хотя с соседями мы так и не пересеклись, поэтому совершенно не нужно бояться, что ванна на этаже, а не в номере. В санузлах есть стиральная машина и бесплатно порошки, можно устраивать стирки. Фены, утюги и все необходимое в наличии и свободном доступе. На кухне холодильники и посуда, при желании можно что-то готовить. На террасе в нашем номере был стол и кресла, приятно пить вечерами местное розовое вино. Рядом с виллой буквально в 15 метрах ресторан с отличными ценами и вкусными блюдами национальной кухни, в две стороны от виллы в минутной доступности магазинчики, фруктовые лавки и лавки с выпечкой. До пляжа минут 10-15 прогулочным шагом, расстояние совершенно не напрягало. Оооочень приветливые хозяева сразу после подтверждения написали в вайбер и предложили трансфер из аэропорта, приятно чувствовать заботу и не тратить время на поиски такси или онлайн-перевозчиков. Прямо в аэропорту тебя ждут с табличкой и отпуск начинается сразу. Таня, Артур, спасибо вам огромное за тепло и радушный прием!</p>
          </div>
        </div> 
        <div class="jumbotron">
          <h3>Алена</h3>
          <p class="lead">июль 2016</p>
          <hr class="my-4">
          <div>
            <p>Отель выбирала за пару дней до спонтанного вылета, оставались очень дорогие варианты, либо дешевые, но ужасные. А эта вилла, хотя по карте была далековата от пляжа, но очень понравилась по фото и имела более чем доступную цену. В реальности все соответствовало фотографиям: светлая комната, новое постельное, все очень чистое. 3 санузла на 3 комнаты, хотя с соседями мы так и не пересеклись, поэтому совершенно не нужно бояться, что ванна на этаже, а не в номере. В санузлах есть стиральная машина и бесплатно порошки, можно устраивать стирки. Фены, утюги и все необходимое в наличии и свободном доступе. На кухне холодильники и посуда, при желании можно что-то готовить. На террасе в нашем номере был стол и кресла, приятно пить вечерами местное розовое вино. Рядом с виллой буквально в 15 метрах ресторан с отличными ценами и вкусными блюдами национальной кухни, в две стороны от виллы в минутной доступности магазинчики, фруктовые лавки и лавки с выпечкой. До пляжа минут 10-15 прогулочным шагом, расстояние совершенно не напрягало. Оооочень приветливые хозяева сразу после подтверждения написали в вайбер и предложили трансфер из аэропорта, приятно чувствовать заботу и не тратить время на поиски такси или онлайн-перевозчиков. Прямо в аэропорту тебя ждут с табличкой и отпуск начинается сразу. Таня, Артур, спасибо вам огромное за тепло и радушный прием!</p>
          </div>
        </div> 
      </div>
    </div>
  </div> 

  {{-- Google Map --}}
  <div>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>
  </div>
@endsection