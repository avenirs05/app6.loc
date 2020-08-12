<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Realty;

class ApartmentsController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $title = __("main.menu." . $request->path());
        $per_page = 5;
        $lang = app()->getLocale();
        $typeOfRealty = 'apartment';

        $apartments = Realty::with(['images' => function($query) {
            $query->where('type', 'main');
        }])
            ->where('visibility', 'опубликовано')
            ->where('type_ru', 'апартамент')
            ->paginate($per_page, [
                'id', 'name', "subname_$lang", 'square', 'dist_sea', 'bedrooms', 
                'capacity', 'price', 'price_line_through', 'booking_mark'
            ]);

		$data = [
            'title'        => $title,	
            'apartments'   => $apartments,
            'lang'         => $lang,
            'typeOfRealty' => $typeOfRealty
        ];	
        

        return view('apartments', $data);
    }
}
