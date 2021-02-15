<div class="col-md mb-4">
  <div class="card">
    <img src={{ asset("images/$image") }} class="card-img-top" alt="">
    <div class="card-body">
      <h5 class="card-title">{{ $title }}</h5>
        @markdown {{ $text }} @endmarkdown
    </div>
  </div>
</div>