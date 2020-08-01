@extends('layouts.main')

@section('content')	
	<div class="container">    
    <div class="row mb-4">
      <div class="col">
				<h1>Heart of Budva - {{ $id }}</h1>   
        <hr class="mb-4"> 
      </div>
    </div>
  </div> 

  <div class="container">
    <div class="row">
      <div class="col-5">
        <img src="{{ asset('images/main.jpg') }}" class="img-fluid" alt="Responsive image">
      </div>
      <div class="col-4">
        2 of 3 (wider)
      </div>
      <div class="col-3">
        3 of 3
      </div>
    </div>
  </div>

  {{-- <div id="lightgallery">
    <a href="{{ asset('images/realty-card.jpeg') }}">
      <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43">
    </a>  
    <a href="{{ asset('images/realty-card.jpeg') }}">
      <img src="{{ asset('images/realty-card-2.jpeg') }}" width="65" height="43">
    </a> 
  </div> --}}
@endsection