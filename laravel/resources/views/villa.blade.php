@extends('layouts.main')

@section('content')	
  @include('chunks.title-page', ['h1' => $villa->name])
  @include('chunks.realty-max-card-desktop', ['villa' => $villa])
  @include('chunks.carousel-mobile') 
  @include('chunks.realty-params-mobile') 
  @include('chunks.price-mobile') 
  @include('chunks.feedbacks') 
  @include('chunks.google-map') 
@endsection