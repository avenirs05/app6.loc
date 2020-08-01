@extends('layouts.main')

@section('content')	
	<div class="container">    
    <div class="row mb-4">
      <div class="col">
				<h1>Апартаменты</h1>   
        <hr class="mb-4"> 
        @include('chunks.realty-min-card')
        @include('chunks.pagination')
      </div>
    </div>
  </div> 
@endsection