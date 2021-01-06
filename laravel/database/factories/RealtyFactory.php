<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Realty;
use Faker\Generator as Faker;

$factory->define(Realty::class, function (Faker $faker) {
    return [        
        'name'                 => $faker->unique()->name,
        'visibility'           => $faker->randomElement(['опубликовано' ,'скрыто']),
        'subname_ru'           => $faker->text(40),
        'subname_en'           => $faker->text(40),   
        'type_ru'              => $faker->randomElement(['вилла', 'апартамент']),
        'type_en'              => $faker->randomElement(['villa', 'apartment']), 
        'country_ru'           => 'Черногория',
        'country_en'           => 'Montenegro',   
        'area_ru'              => $faker->randomElement(['Будванская ривьера', 'Бока-Которский залив', 'Барская ривьера']),
        'area_en'              => $faker->randomElement(['Budva Riviera', 'Boka Kotorska Bay', 'Barskaya riviera']),
        'city_ru'              => $faker->randomElement(['Будва', 'Бечичи', 'Котор', 'Герцег-Нови', 'Добры Воды', 'Бар']),
        'city_en'              => $faker->randomElement(['Budva', 'Bechichi', 'Kotor', 'Herceg Novi', 'Dobry Vody', 'Bar']),
        'view_ru'              => $faker->randomElement(['на море', 'на горы', 'на море и горы', 'на окрестности и горы']),
        'view_en'              => $faker->randomElement(['sea', 'mountains', 'sea and mountains', 'surroundings and mountains']),
        'transfer_payment_ru'  => $faker->randomElement(['бесплатный', '20€', '30€']),
        'transfer_payment_en'  => $faker->randomElement(['free', '20€', '30€']),      
        'internet_payment_ru'  => $faker->randomElement(['бесплатный', '10€', '15€']),
        'internet_payment_en'  => $faker->randomElement(['free', '10€', '15€']),
        'parking_payment_ru'   => $faker->randomElement(['бесплатный', '5€', '7€']),
        'parking_payment_en'   => $faker->randomElement(['free', '5€', '7€']), 
        'description_ru'       => $faker->text(1000),
        'description_en'       => $faker->text(2000),
        'map_html'             => '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.3632492036777!2d18.867321315101165!3d42.292113947382965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE3JzMxLjYiTiAxOMKwNTInMTAuMiJF!5e0!3m2!1sru!2sru!4v1507902217396" width="100%" height="400" frameborder="0" style="border:0" allowfullscreen></iframe>',
        'square'               => $faker->numberBetween(20, 999),
        'bedrooms'             => $faker->numberBetween(1, 9),
        'capacity'             => $faker->numberBetween(1, 19),
        'price'                => $faker->numberBetween(10, 999),
        'price_line_through'   => $faker->numberBetween(10, 999),
        'price_jan'            => $faker->numberBetween(10, 999),
        'price_feb'            => $faker->numberBetween(10, 999),
        'price_mar'            => $faker->numberBetween(10, 999),
        'price_apr'            => $faker->numberBetween(10, 999),
        'price_may'            => $faker->numberBetween(10, 999),
        'price_jun'            => $faker->numberBetween(10, 999),
        'price_jul'            => $faker->numberBetween(10, 999),
        'price_aug'            => $faker->numberBetween(10, 999),
        'price_sep'            => $faker->numberBetween(10, 999),
        'price_oct'            => $faker->numberBetween(10, 999),
        'price_nov'            => $faker->numberBetween(10, 999),
        'price_dec'            => $faker->numberBetween(10, 999),
        'price_oct_apr'        => $faker->numberBetween(10, 999),
        'booking_mark'         => $faker->randomFloat(1, 5, 9), 
        'dist_sea'             => $faker->numberBetween(10, 5000),
        'dist_tivat'           => $faker->numberBetween(1, 100),
        'dist_podg'            => $faker->numberBetween(1, 100),
        'discount'             => 1,    
    ];
});
