<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>{{ $title }}</title>

  <!-- Favicon -->
	<link rel="shortcut icon" href="/images/fav.ico" type="image/png">

  <!-- Styles -->  
  <link href="{{ asset('css/app.css') }}" rel="stylesheet preload" as="style">
</head>

<body>  
{{-- Wrapper-main --}}
<div class="wrapper-main">

{{-- Navbar --}}
<nav class="navbar navbar-expand-lg navbar-dark fixed-top bg-dark">  
  {{-- Logo --}}
  <a class="navbar-brand" href="/">MYBUDVA</a>  
  
  {{-- Contacts deskto --}}
  <div class="contacts-desktop d-none d-lg-block">
    <div class="media mr-2">
      <img width="25" src="{{ asset('images/viber.png') }}" class="align-self-center ml-4 mr-2" alt="">
      <img width="25" src="{{ asset('images/whatsapp.svg') }}" class="align-self-center mr-2" alt="">
      <div class="media-body">
        <span class="text-white">+382 68 089 888</span>
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
              {{ strtoupper(app()->getLocale()) }}
            &nbsp;&nbsp;
    </button>          
    <div class="dropdown-menu dropdown-menu-right lang-list">
      <button class="dropdown-item" type="button">
        <span class="flag-icon flag-icon-ru"></span>&nbsp;&nbsp;Ru&nbsp;&nbsp;
      </button>
      <button class="dropdown-item" type="button">
        <span class="flag-icon flag-icon-gb-eng"></span>&nbsp;&nbsp;En&nbsp;&nbsp;<br> 
      </button>
    </div>        
  </div>   

  {{-- Navbar-toggler button-hamburger on mobile --}}
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
        <a class="nav-link" href="/">@lang('main.menu.main')</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="{{ route('villas') }}">@lang('main.menu.villas')</a>
      </li>
      <li class="nav-item active">
        <a class="nav-link" href="{{ route('apartments') }}">@lang('main.menu.apartments')</a>
      </li>
      <li class="nav-item active mr-5">
        <a class="nav-link" href="{{ route('contact') }}">@lang('main.menu.contact')</a>
      </li>
    </ul>  
    
    {{-- Language choice desktop --}}
    <div class="lang-choice-desktop btn-group d-none d-lg-block">
      <button type="button" 
              class="btn btn-secondary dropdown-toggle lang-text-actual" 
              data-toggle="dropdown" 
              aria-haspopup="true" 
              aria-expanded="false">
              &nbsp;&nbsp;
                {{ strtoupper(app()->getLocale()) }}
              &nbsp;&nbsp;
      </button>          
      <div class="dropdown-menu dropdown-menu-right lang-list">
        <button class="dropdown-item" type="button">
          <span class="flag-icon flag-icon-ru"></span>&nbsp;&nbsp;Ru&nbsp;&nbsp;
        </button>
        <button class="dropdown-item" type="button">
          <span class="flag-icon flag-icon-gb-eng"></span>&nbsp;&nbsp;En&nbsp;&nbsp;<br> 
        </button>
      </div>  
    </div>       
  </div> 
{{-- EndNavbar --}}
</nav> 

@yield('content') 
</div> 
{{-- End Wrapper-main --}}

{{-- Footer --}}
<div class="bg-dark footer">    
  <div class="text-white text-center pt-2 pb-2">&copy; MyBudva, 2015</div>
</div>

{{-- Scripts --}}
<script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
