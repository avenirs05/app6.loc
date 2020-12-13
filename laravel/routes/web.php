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
Route::get('/', 'IndexController')->name('main');
Route::get('villas', 'RealtiesController')->name('villas');
Route::get('apartments', 'RealtiesController')->name('apartments');
Route::get('contact', 'ContactController')->name('contact');
Route::get('villa/{id}', 'RealtyController')->name('villa');
Route::get('apartment/{id}', 'RealtyController')->name('apartment');


//Определение языка и установка его в сессию 
Route::get('locale/{locale}', function($locale) {
	Session::put('locale', $locale);		
	return redirect()->back();
});
 

Auth::routes(['register' => false, 'reset' => false]);

Route::namespace('Admin')->prefix('admin')->middleware('auth')->group(function() {
	Route::get('/', 'IndexController@index')->name('admin.index');
	Route::resources([
    'realties' => 'RealtyController',
	]);
});

//Route::get('/test', 'Admin\TestController@index')->name('test');






