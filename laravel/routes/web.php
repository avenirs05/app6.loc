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


//Определение языка и установка его в сессию 
Route::get('locale/{locale}', function($locale) {
	Session::put('locale', $locale);		
	return redirect()->back();
}); 


Auth::routes(['register' => false, 'reset' => false]);


Route::namespace('Admin')->prefix('admin')->middleware('auth')->group(function() {
	Route::get('/', 'Index@index')->name('admin.index');
	
	Route::resources([
    'realties'  => 'RealtyResource',
    'feedbacks' => 'FeedbackResource',
    'images'    => 'ImageResource',
	]);
});







