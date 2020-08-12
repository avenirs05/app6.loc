<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Feedback;
use Faker\Generator as Faker;

$factory->define(Feedback::class, function (Faker $faker) {
    return [
        'realty_id' => $faker->numberBetween(1, 30),
        'author'    => $faker->name,
        'date'      => $faker->date('2015-01-01', now()),
        'text'      => $faker->text(1500),
    ];
});
