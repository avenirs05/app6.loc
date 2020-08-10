<?php

use Illuminate\Database\Seeder;
use App\Realty;

class RealtiesTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Realty::class, 30)->create();
    }
}
