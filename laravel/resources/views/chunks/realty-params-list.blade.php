<ul class="realty-params-list">
  <li>
    <span class="font-weight-bold">{{ __('main.realty.square') }}:</span> 
    {{ $realty->square }} {{ __('main.realty.meters') }}<sup>2</sup>
  </li> 
  <li>
    <span class="font-weight-bold">{{ __('main.realty.view') }}:</span> 
    {{ $realty->{"view_" . app()->getLocale()} }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.bedrooms') }}:</span> 
    {{ $realty->bedrooms }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.capacity') }}:</span> 
    {{ $realty->capacity }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.dist_sea') }}:</span> 
    {{ $realty->dist_sea }} {{ __('main.realty.meters') }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.dist_tivat') }}:</span> 
    {{ $realty->dist_tivat }} {{ __('main.realty.km') }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.dist_podg') }}:</span> 
    {{ $realty->dist_podg }} {{ __('main.realty.km') }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.transfer_payment') }}:</span> 
    {{ $realty->{"transfer_payment_" . app()->getLocale()} }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.parking_payment') }}:</span> 
    {{ $realty->{"parking_payment_" . app()->getLocale()} }}
  </li>
  <li>
    <span class="font-weight-bold">{{ __('main.realty.internet_payment') }}:</span> 
    {{ $realty->{"internet_payment_" . app()->getLocale()} }}
  </li>
</ul>