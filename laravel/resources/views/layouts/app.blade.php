<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Admin | MyBudva') }}</title>

    <!-- Scripts -->
    <script src={{ asset('js/app.js') }} defer></script>

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <!-- Styles -->
    <link href="{{ asset('css/admin-app.css') }}" rel="stylesheet preload" as="style">
</head>
<body>
  <div id="app"></div>
  
  <hr>
  
  <div id="bottom">   
    <a class="navbar-brand" href="{{ url('/') }}">На сайт</a>
    
    <div>                
      @guest
        <a class="nav-link" href="{{ route('login') }}">{{ __('Login') }}</a>            
      @else
        <a href="{{ route('logout') }}"
            onclick="event.preventDefault();
            document.getElementById('logout-form').submit();">
            {{ __('Logout') }} 
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
      @endguest                
    </div>

    @yield('content')        
  
  </div>
</body>
</html>
