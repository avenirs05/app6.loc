@extends('layouts.main')

@section('content')	
	@include('chunks.title-page', ['h1' => 'Контакты'])
	<div class="container">    
    <div class="row mb-4">
      <div class="col">
				{!! $content->contact_page[app()->getLocale()] !!}
      </div>
    </div>
  </div>  
@endsection