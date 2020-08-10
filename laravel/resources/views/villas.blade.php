@extends('layouts.main')

@section('content')	
  @include('chunks.title-page', ['h1' => $title])
  <div class="container">    
    <div class="row mb-4">
      <div class="col">
        @include('chunks.realty-min-card', ['villas' => $villas])
        @include('chunks.pagination')
      </div>
    </div>
  </div>   
@endsection