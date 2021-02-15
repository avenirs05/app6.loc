@extends('layouts.main')

@section('content')	
	@include('chunks.title-page', ['h1' => $title])
	<div class="container">    
    <div class="row mb-4">
      <div class="col">
        @markdown {{ $content->contact_page[app()->getLocale()] }} @endmarkdown 
      </div>
    </div>
  </div>  
@endsection