<div class="container realty-max-card-desktop d-none d-lg-block">    
  <div class="row">       
    {{-- Main image --}}
    <div class="col-5">
      <img src={{ asset("storage/$mainImage") }} 
           class="img-fluid img-main-lightgallery" 
           alt="Responsive image">
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
  <div class="w-100 mt-1" id="lightgallery"> 
    @isset($realty->images[0])  
      @foreach ($realty->images as $image)
        <a href={{ asset("storage/$image->name") }}>
          <img src={{ asset("storage/$image->name") }} 
              width="65" 
              height="43" 
              class="mb-1 img-thumb-lightgallery">
        </a> 
      @endforeach
    @endisset
  </div>  
  <div class="w-100 mt-3">
    @markdown
      {{ $realty->{"description_". app()->getLocale()} }}
    @endmarkdown
  </div> 
</div> 