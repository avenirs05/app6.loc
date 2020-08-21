@foreach ($realties as $realty)
  <div class="card mb-4 realty-min-card">
    <div class="row no-gutters">
      <div class="col-md-4">
        <img src={{ asset('images/' . $realty->images[0]['name']) }} 
             class="card-img" 
             alt="">
      </div>      
      <div class="col-md-8">
        <div class="card-body d-flex justify-content-between">
          <div>
            <a href={{ route($realtyType, ['id' => $realty->id]) }} 
               class="title">
               {{ $realty->name }}
            </a>
            {{-- Hide title on md and lg --}}
            <h5 class="mt-2 mb-4 d-md-none d-xl-block">
              {{ $realty->{"subname_$locale"} }}
            </h5>
            <ul class="realty-params-list-shorted">
              <li>
                <span class="font-weight-bold">{{ __('main.realty.square') }}:</span> 
                {{ $realty->square }} {{ __('main.realty.meters') }}<sup>2</sup>
              </li>
              <li>
                <span class="font-weight-bold">{{ __('main.realty.dist_sea') }}:</span> 
                {{ $realty->dist_sea }} {{ __('main.realty.meters') }}
              </li>
              <li>
                <span class="font-weight-bold">{{ __('main.realty.bedrooms') }}:</span> 
                {{ $realty->bedrooms }}
              </li>
              <li>
                <span class="font-weight-bold">{{ __('main.realty.capacity') }}:</span> 
                {{ $realty->capacity }}
              </li>
            </ul>
          </div>
          <div class="d-flex flex-column justify-content-between">
            {{-- Hide some booking-logo on md and lg --}}
            <div class="card text-white ml-auto d-md-none d-xl-block" 
              @if ($realty->booking_mark === 0)
                  style="visibility: hidden;"
              @endif
            >
              <img src="{{ asset('images/booking-logo.jpg') }}" class="card-img" alt="" width="50">
              <div class="card-img-overlay">
                <span class="font-weight-bold">{{ $realty->booking_mark }}</span>
              </div>
            </div>
            <span class="ml-auto">
              <del>
                <span class="from-price-text">
                  {{ __('main.from') }} {{ $realty->price_line_through }}
                </span>
              </del>
            </span>
            <span class="price-text ml-auto">€ {{ $realty->price }}</span>
            <a class="btn btn-success font-weight-bold" 
               href="{{ route($realtyType, ['id' => $realty->id]) }}" 
               role="button">
               {{ __('main.btn_more') }}
            </a>                  
          </div>
        </div>
      </div>
    </div>
  </div>   
@endforeach