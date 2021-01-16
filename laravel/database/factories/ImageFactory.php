<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'realty_id' => $faker->numberBetween(1, 10),
        'type'      => $faker->randomElement(['main', 'thumbnail']),
        'name'      => $faker->randomElement([
            '01.jpg', 
            '02.jpg',
            '03.jpg',
            '04.jpg',
            '05.jpg',
            '06.jpg',
            '07.jpg',
            '08.jpg',
            '09.jpg',
            '10.jpg',
        ]),
    ];
});
