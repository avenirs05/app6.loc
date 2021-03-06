<div id="carouselExampleIndicators" class="carousel slide carousel-mobile d-lg-none mb-4" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={{ asset("storage/$mainImage") }} 
           class="d-block w-100" 
           alt="">
    </div>
    @isset($thumbImages[0])
      @foreach ($thumbImages as $thumbImage)
        <div class="carousel-item">
          <img src={{ asset("storage/$thumbImage") }} 
              class="d-block w-100" 
              alt="">
        </div>
      @endforeach
    @endisset
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>