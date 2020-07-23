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

// Маршруты для клиентов-фронтенд
Route::get('/', 'IndexController')->name('indexPage');
Route::get('/villas', 'VillasController')->name('villasPage');
Route::get('/apartments', 'ApartmentsController')->name('apartmentsPage');
Route::get('/feedbacks', 'FeedbacksController')->name('feedbacksPage');
Route::get('/contact', 'ContactController')->name('contactPage');