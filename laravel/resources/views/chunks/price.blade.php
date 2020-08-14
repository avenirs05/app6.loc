<div>
  <h6>{{ __('main.price_per_day') }}</h6>          
  <table class="table">
    <tbody>
      <tr>
        <th scope="row">{{ __('main.may') }}</th>
        <td>{{ $realty->price_may }} €</td>
      </tr>
      <tr>
        <th scope="row">{{ __('main.jun') }}</th>
        <td>{{ $realty->price_jun }} €</td>
      </tr>
      <tr>
        <th scope="row">{{ __('main.jul') }}</th>
        <td>{{ $realty->price_jul }} €</td>
      </tr>
      <tr>
        <th scope="row">{{ __('main.aug') }}</th>
        <td>{{ $realty->price_aug }} €</td>
      </tr>
      <tr>
        <th scope="row">{{ __('main.sep') }}</th>
        <td>{{ $realty->price_sep }} €</td>
      </tr>
      <tr>
        <th scope="row">{{ __('main.oct-apr') }}</th>
        <td>{{ $realty->price_oct_apr }} €</td>
      </tr>
    </tbody>
  </table> 
</div>