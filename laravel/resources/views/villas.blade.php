@extends('layouts.main')

@section('content')	
  @include('chunks.title-page', ['h1' => $title])
  <div class="container">    
    <div class="row mb-4">
      <div class="col">
        @include('chunks.realty-min-card', ['realties' => $villas])
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        {{ $villas->links() }} 
      </div>
    </div>
  </div>   
@endsection