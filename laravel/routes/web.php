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

Route::get('/', function () {
    return view('index');
});

Route::get('/villas', function () {
    return view('villas');
});

Route::get('/apartments', function () {
    return view('apartments');
});

Route::get('/feedbacks', function () {
    return view('feedbacks');
});

Route::get('/contacts', function () {
    return view('contacts');
});
