@extends('layouts.main')

@section('content')
  {{-- Main screen desktop --}}
  <div class="main-screen-desktop card bg-dark text-white d-none d-lg-block">
    <img src="/images/main.jpg" class="card-img" alt="">
    <div class="card-img-overlay">
      <h1 class="card-title">{{ $content->header_main[$locale] }}</h1>
    </div>
  </div>

  {{-- Main screen mobile --}}
  <div class="main-screen-mobile card bg-dark text-white d-lg-none">
    <img src="/images/main.jpg" class="card-img" alt="">
    <div class="card-img-overlay">
      <!-- Contacts mobile-->
      <div class="contacts-mobile mb-4">
        <div class="media mr-2">
          <img width="25" src={{ asset('images/viber.png') }} class="align-self-center mr-2" alt="">
          <img width="25" src={{ asset('images/whatsapp.svg') }} class="align-self-center mr-2" alt="">
          <div class="media-body">
            <span class="text-white">{{ $content->phone_main }}</span>
          </div>
        </div>
      </div> 
      <h1 class="card-title text-center mb-0">{{ $content->header_main[$locale] }}</h1>
    </div>
  </div>

  {{-- Areas --}}
  <div class="container">
    <h2 class="text-center mt-5 mb-5">
      {{ $content->faq['title'][$locale] }}
    </h2>
    <h3 class="text-center mt-5 mb-5">
      {{ $content->faq['areas'][$locale]['title'] }}
    </h3>
    <div class="row">
      @include('chunks.area', [        
        'image' => $content->images['budva_riviera'],
        'title' => $content->faq['areas'][$locale]['budva_riviera']['title'],
        'text'  => $content->faq['areas'][$locale]['budva_riviera']['text'],
      ])
      @include('chunks.area', [
        'image' => $content->images['boka_kotorska_bay'],
        'title' => $content->faq['areas'][$locale]['boka_kotorska_bay']['title'],
        'text'  => $content->faq['areas'][$locale]['boka_kotorska_bay']['text'],
      ])
      @include('chunks.area', [
        'image' => $content->images['bar_riviera'],
        'title' => $content->faq['areas'][$locale]['bar_riviera']['title'],
        'text'  => $content->faq['areas'][$locale]['bar_riviera']['text'],
      ])
    </div>
  </div>

  {{-- Questions & Answers --}}
  <div class="container">    
    <div class="row mb-4">
      <div class="col">
        {!! $content->faq['quest_answ'][$locale] !!}
      </div>
    </div>
  </div>
@endsection