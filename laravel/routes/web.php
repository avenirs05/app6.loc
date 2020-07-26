<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/


// Маршруты для клиентов и поисковиков
Route::get('/', 'IndexController');
Route::get('/villas', 'VillasController')->name('villas');
Route::get('/apartments', 'ApartmentsController')->name('apartments');
Route::get('/feedbacks', 'FeedbacksController')->name('feedbacks');
Route::get('/contact', 'ContactController')->name('contact');


//Определение языка и установка его в сессию 
Route::get('locale/{locale}', function($locale) {
	Session::put('locale', $locale);
	return redirect()->back();
});