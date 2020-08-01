{{-- Realty Mini Card --}}
<div class="card mb-4 realty-min-card">
  <div class="row no-gutters">
    <div class="col-md-4">
      <img src="{{ asset('images/realty-card.jpeg') }}" class="card-img" alt="">
    </div>
    <div class="col-md-8">
      <div class="card-body d-flex justify-content-between">
        <div>
          <a href="#" class="title">Heart of Budva</a>
          {{-- Hide title on md and lg --}}
          <h5 class="mt-2 mb-4 d-md-none d-xl-block">Апартаменты на вилле в Будве</h5>
          <ul class="shorted-params-list">
            <li><span class="font-weight-bold">Площадь:</span> 80 м<sup>2</sup></li>
            <li><span class="font-weight-bold">До моря:</span> 800 м</li>
            <li><span class="font-weight-bold">Спальни:</span> 4</li>
            <li><span class="font-weight-bold">Человек:</span> 10</li>
          </ul>
        </div>
        <div class="d-flex flex-column justify-content-between">
          {{-- Hide some booking-logo on md and lg --}}
          <div class="card text-white ml-auto d-md-none d-xl-block">
            <img src="{{ asset('images/booking-logo.jpg') }}" class="card-img" alt="" width="50">
            <div class="card-img-overlay">
              <span class="font-weight-bold">8.1</span>
            </div>
          </div>
          <span class="ml-auto"><del><span class="from-price-text">от € 70</span></del></span>
          <span class="price-text ml-auto">€ 50</span>
          <a class="btn btn-success font-weight-bold" href="#" role="button">Подробнее</a>                  
        </div>
      </div>
    </div>
  </div>
</div> 