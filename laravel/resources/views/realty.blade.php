@extends('layouts.main')

@section('content')	
  @include('chunks.title-page', ['h1' => $realty->name])
  @include('chunks.realty-max-card-desktop')
  @include('chunks.carousel-mobile') 
  @include('chunks.realty-params-mobile') 
  @include('chunks.price-mobile')      
  @include('chunks.feedbacks') 
  @include('chunks.google-map', ['map' => $realty->map_html])
@endsection