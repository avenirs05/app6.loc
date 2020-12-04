<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>MyBudva | {{ $title }}</title>

  <!-- Favicon -->
	<link rel="shortcut icon" href="{{ asset('images/fav.ico') }}" type="image/png">

  <!-- Styles -->  
  <link href="{{ asset('css/app.css') }}" rel="stylesheet preload" as="style">
</head>

<body>  

{{-- Wrapper-main --}}
<div class="wrapper-main">

{{-- Navbar --}}
<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">  

  {{-- Logo --}}
  <a class="navbar-brand" href="{{ route('main') }}">MYBUDVA</a>  
  
  {{-- Contacts desktop --}}
  <div class="contacts-desktop d-none d-lg-block">
    <div class="media mr-2">
      <img width="25" src={{ asset('images/viber.png') }} class="align-self-center ml-4 mr-2" alt="">
      <img width="25" src={{ asset('images/whatsapp.svg') }} class="align-self-center mr-2" alt="">
      <div class="media-body">
        <span class="text-white">{{ $content_shared->phone_main }}</span>
      </div>
    </div>
  </div>     
  
  {{-- Language choice mobile --}}
  <div class="lang-choice-mobile btn-group d-lg-none">
    <button type="button" 
            class="btn btn-secondary dropdown-toggle lang-text-actual" 
            data-toggle="dropdown" 
            aria-haspopup="true" 
            aria-expanded="false">
            &nbsp;&nbsp;      
              <span class="flag-icon flag-icon-{{ app()->getLocale() === 'en' ? 'gb' : strtolower(app()->getLocale()) }}"></span>
            &nbsp;&nbsp;
    </button>          
    <div class="dropdown-menu dropdown-menu-right lang-list">
      @foreach ($languages as $language)
        <button class="dropdown-item" type="button">
          <span class="flag-icon flag-icon-{{ $language->code === 'en' ? 'gb' : strtolower($language->code) }}"></span>
          &nbsp;&nbsp;{{ strtoupper($language->code) }}&nbsp;&nbsp;
        </button>
      @endforeach
    </div>        
  </div>   

  {{-- Navbar-toggler button-hamburger mobile --}}
  <button class="navbar-toggler" type="button" 
          data-toggle="collapse" 
          data-target="#navbarCollapse" 
          aria-controls="navbarCollapse" 
          aria-expanded="false" 
          aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>    

  {{-- Menu and Language choice desktop --}}
  <div class="collapse navbar-collapse" id="navbarCollapse">
    {{-- Menu desktop --}}
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href={{ route('main') }}>{{ __('main.menu.main')  }}</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href={{ route('villas') }}>{{ __('main.menu.villas') }}</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href={{ route('apartments') }}>{{ __('main.menu.apartments') }}</a>
      </li>
      <li class="nav-item active mr-5">
        <a class="nav-link" href={{ route('contact') }}>{{ __('main.menu.contact')  }}</a>
      </li>
    </ul>  
    
    {{-- Language choice desktop --}}
    <div class="lang-choice-desktop btn-group d-none d-lg-block">
      <button type="button" 
              class="btn btn-secondary dropdown-toggle lang-text-actual" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              &nbsp;    
                <span class="flag-icon flag-icon-{{ app()->getLocale() === 'en' ? 'gb' : strtolower(app()->getLocale()) }}"></span>
              &nbsp;
      </button>          
      <div class="dropdown-menu dropdown-menu-right lang-list">
        @foreach ($languages as $language)
          <button class="dropdown-item" type="button">
            {{-- В библиотеке 'flag-icon-css' нет картинки флага с именем 'en' --}}            
            <span class="flag-icon flag-icon-{{ $language->code === 'en' ? 'gb' : strtolower($language->code) }}"></span>
            &nbsp;&nbsp;{{ strtoupper($language->code) }}&nbsp;&nbsp;
          </button>
        @endforeach
      </div>  
    </div>       
  </div> 
</nav> 
{{-- EndNavbar --}}

@yield('content') 

</div> 
{{-- End Wrapper-main --}}

{{-- Footer --}}
<div class="bg-dark footer">    
  <div class="text-white text-center pt-2 pb-2">&copy; MyBudva, 2015</div>
</div>

{{-- Scripts --}}
<script src={{ asset('js/app.js') }}></script>

</body>
</html>
