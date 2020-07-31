@extends('layouts.main')

@section('content')	
	<div class="container realty-card-desktop">    
    <div class="row mb-4">
      <div class="col">
				<h1>Виллы</h1>   
        <hr class="mb-4">     
          
        {{-- Realty Card --}}
        <div class="card mb-4" style="">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="{{ asset('images/realty-card.jpeg') }}" class="card-img" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body d-flex justify-content-between">
                <div>
                  <a href="#" class="">Heart of Budva</a>
                  <h5 class="mt-2 mb-4">Апартаменты на вилле в Будве</h5>
                  <ul class="shorted-params-list">
                    <li><span class="font-weight-bold">Площадь:</span> 80 м<sup>2</sup></li>
                    <li><span class="font-weight-bold">До моря:</span> 800 м</li>
                    <li><span class="font-weight-bold">Спальни:</span> 4</li>
                    <li><span class="font-weight-bold">Человек:</span> 10</li>
                  </ul>
                </div>
                <div class="d-flex flex-column justify-content-between">
                  <div class="card text-white ml-auto">
                    <img src="{{ asset('images/booking-logo.jpg') }}" class="card-img" alt="" width="50">
                    <div class="card-img-overlay">
                      <span class="font-weight-bold">8.1</span>
                    </div>
                  </div>
                  <span class="ml-auto"><del><span class="from-price-text">от € 70</span></del></span>
                  <span class="price-text ml-auto">€ 50</span>
                  <button type="button" class="btn btn-success font-weight-bold">Подробнее</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {{-- Realty Card --}}
        <div class="card mb-3" style="">
          <div class="row no-gutters">
            <div class="col-md-4">
              <img src="{{ asset('images/realty-card.jpeg') }}" class="card-img" alt="">
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
              </div>
            </div>
          </div>
        </div>
        
        

				
      </div>
    </div>
  </div> 
@endsection