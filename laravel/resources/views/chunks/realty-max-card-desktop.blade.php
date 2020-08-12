	<div class="container realty-max-card-desktop d-none d-lg-block">    
    <div class="row">       
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
    </div>    
  </div> 