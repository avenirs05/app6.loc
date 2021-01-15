<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Image;
use Faker\Generator as Faker;

$factory->define(Image::class, function (Faker $faker) {
    return [
        'realty_id' => $faker->numberBetween(1, 10),
        'type'      => $faker->randomElement(['main', 'thumbnail']),
        'name'      => $faker->randomElement(['realty-card.jpeg', 'realty-card-2.jpeg']),
    ];
});
