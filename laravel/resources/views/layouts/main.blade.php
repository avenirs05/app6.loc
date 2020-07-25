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
  <!-- Navbar -->
  <div class="container-fluid wrapper-main">
    
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a class="navbar-brand" href="#">Fixed navbar</a>        
      
      <!-- Navbar-toggler on mobile -->
      <button class="navbar-toggler" type="button" 
              data-toggle="collapse" 
              data-target="#navbarCollapse" 
              aria-controls="navbarCollapse" 
              aria-expanded="false" 
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>        
      
      <!-- Menu -->
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a class="nav-link" href="{{ route('indexPage') }}">@lang('main.menu.main')</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="{{ route('villasPage') }}">@lang('main.menu.villas')</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="{{ route('apartmentsPage') }}">@lang('main.menu.apartments')</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="{{ route('feedbacksPage') }}">@lang('main.menu.feedbacks')</a>
          </li>
          <li class="nav-item active">
            <a class="nav-link" href="{{ route('contactPage') }}">@lang('main.menu.contact')</a>
          </li>
        </ul>     

        <!-- Language choice desktop -->
        <div class="lang-choice-desktop btn-group d-none d-md-block">
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
    </nav> 


    

    @yield('content')   
  </div>  

  <!-- Scripts -->
  <script src="{{ asset('js/app.js') }}"></script>

</body>
</html>
