<?php

use Illuminate\Database\Seeder;
use App\Language;

class LanguagesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Language::create(
            [
                'code'        => 'ru',
                'name'        => 'русский',
                'name_native' => 'русский',
                'status'      => 'on'
            ]
        );

        Language::create(
            [
                'code'        => 'en',
                'name'        => 'английский',
                'name_native' => 'english',
                'status'      => 'on'
            ]
        );
    }
}
