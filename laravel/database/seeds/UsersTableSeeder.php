<?php

use Illuminate\Database\Seeder;
use App\User;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        User::create(
            [
                'name' => 'mybudva',
                'email' => 'mybudva@mail.ru',
                'password' => Hash::make('barsabudva24365'),
            ]
        );

        factory(User::class, 20)->create();
    }
}
