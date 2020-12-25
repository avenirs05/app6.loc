<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>Admin | mybudva.ru </title>

    <!-- Scripts -->
    @routes
    <script src={{ asset('js/app.js') }} defer></script>

    <!-- Favicon -->
	  <link rel="shortcut icon" href="{{ asset('images/fav-admin.ico') }}" type="image/png">

    <!-- Fonts -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />

    <!-- Styles -->
    <link href="{{ asset('css/admin-app.css') }}" rel="stylesheet preload" as="style">
</head>
<body>    
  <div id="app"></div>   
  <div id="bottom" style="text-align: right; padding-right: 15px;">   
    @if (request()->path() !== 'login')
      <a class="navbar-brand" href="{{ url('/') }}">На сайт</a>
    @endif   
    
    <div style="padding-right: 15px;">                
      @guest
        <a class="nav-link" href="{{ route('login') }}">
          @if (request()->path() !== 'login') 
            {{ __('Login') }}
          @endif
        </a>            
      @else
        <a href="{{ route('logout') }}"
            onclick="event.preventDefault();
            document.getElementById('logout-form').submit();">           
              Выйти 
        </a>
        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
      @endguest                
    </div>
    @yield('content')   
  </div>
</body>
</html>
