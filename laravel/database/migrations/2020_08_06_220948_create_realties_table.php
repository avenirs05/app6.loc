<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateRealtiesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('realties', function (Blueprint $table) {
			$table->increments('id');		

            $table->string('type')->default('apartment');
            $table->string('visibility')->default('опубликовано');
            $table->string('name')->unique();
            $table->integer('square')->nullable();
            $table->tinyInteger('bedrooms')->nullable();
			$table->tinyInteger('capacity')->nullable();
			$table->integer('dist_sea')->nullable();
			$table->integer('dist_tivat')->nullable();
			$table->integer('dist_podg')->nullable();
            $table->float('booking_mark', 2, 1)->nullable();
            $table->text('feedback');
            $table->text('map_html')->nullable();
            $table->integer('discount')->default(0);
            $table->integer('price')->nullable();
			$table->integer('price_line_through')->nullable();
			$table->integer('price_jan')->nullable();
			$table->integer('price_feb')->nullable();
			$table->integer('price_mar')->nullable();
			$table->integer('price_apr')->nullable();
			$table->integer('price_may')->nullable();
			$table->integer('price_jun')->nullable();
			$table->integer('price_jul')->nullable();
			$table->integer('price_aug')->nullable();
			$table->integer('price_sep')->nullable();
			$table->integer('price_oct')->nullable();
			$table->integer('price_nov')->nullable();
			$table->integer('price_dec')->nullable();

			$table->string('type_ru')->default('апартамент');
			$table->string('type_en')->default('apartment');			
			$table->string('transfer_payment_ru')->default('платный');
			$table->string('transfer_payment_en')->default('paid');
			$table->string('internet_payment_ru')->default('бесплатный');
			$table->string('internet_payment_en')->default('free');
			$table->string('parking_payment_ru')->default('платный');
			$table->string('parking_payment_en')->default('paid');
			$table->string('country_ru')->default('Черногория');
			$table->string('country_en')->default('Montenegro');
			$table->string('area_ru')->default('Будванская ривьера');
			$table->string('area_en')->default('Budva Riviera');			
			$table->string('subname_ru')->nullable();
			$table->string('subname_en')->nullable();
		    $table->string('city_ru')->default('Будва');
			$table->string('city_en')->default('Budva');
			$table->string('view_ru')->default('на море');
			$table->string('view_en')->default('sea');
			$table->text('description_ru')->nullable();
			$table->text('description_en')->nullable();
			$table->string('price_oct_apr_ru')->nullable();
            $table->string('price_oct_apr_en')->nullable();	
            
            $table->timestamps();				
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('realties');
    }
}
