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


// DB::listen(function($query) {
// 	var_dump($query->sql, $query->bindings);
// });


// Для клиентов и поисковиков
Route::get('/', 'Index')->name('main');
Route::get('villas', 'Realties')->name('villas');
Route::get('apartments', 'Realties')->name('apartments');
Route::get('villa/{id}', 'RealtySingle')->name('villa');
Route::get('apartment/{id}', 'RealtySingle')->name('apartment');
Route::get('contact', 'Contact')->name('contact');
Route::get('test2', 'Test2')->name('test2');
Route::post('test', 'Test')->name('test');


//Определение языка и установка его в сессию 
Route::get('locale/{locale}', function($locale) {
	Session::put('locale', $locale);		
	return redirect()->back();
}); 


// Auth
Auth::routes(['register' => false, 'reset' => false]);


// Admin
Route::namespace('Admin')->prefix('admin')->middleware('auth')->group(function() {
	Route::get('/', 'Index')->name('admin.index');

	// Images
	Route::post('/realty-create-images-load', 'RealtyResource@imagesLoadWhenRealtyCreate')->name('realty-create-images-load');
	Route::post('/realty-main-image-load', 'RealtyResource@mainImageLoad')->name('realty-main-image-load');
	Route::post('/realty-thumbnails-load', 'RealtyResource@thumbnailsLoad')->name('realty-thumbnails-load');
	Route::delete('/realty-delete-image/{id}', 'RealtyResource@deleteImage')->name('realty-delete-image');
	
	// Search
	Route::post('/realties-search', 'RealtyResource@search')->name('realties.search');
	Route::post('/feedbacks-search', 'FeedbackResource@search')->name('feedbacks.search');

	// Content
	Route::get('/content', 'ContentController@index')->name('content.get');
	Route::patch('/content-update', 'ContentController@update')->name('content.update');

	// Resource
	Route::resources([
    'realties'  => 'RealtyResource',
    'feedbacks' => 'FeedbackResource',
	]);
});







