	<div class="container realty-max-card-desktop d-none d-lg-block">    
    <div class="row">       
      {{-- Main image --}}
      <div class="col-5">
        <img src={{ asset("images/$mainImage") }} class="img-fluid" alt="Responsive image">
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
    <div class="w-100" id="lightgallery">     
      @foreach ($realty->images as $image)
        <a href={{ asset("images/$image->name") }}>
          <img src={{ asset("images/$image->name") }} width="65" height="43" class="mb-1">
        </a> 
      @endforeach
    </div>  
    <div class="w-100 mt-3">{{ $realty->{"description_$locale"} }}</div> 
  </div> 