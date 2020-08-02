@extends('layouts.main')

@section('content')	
  @include('chunks.title-page', ['h1' => 'Heart of Budva ' . $id])

  {{-- Realty Max Card Desktop --}}
	<div class="container realty-max-card-desktop d-none d-lg-block">    
    <div class="row mb-4">       
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
@endsection