<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Realty;


class VillasController extends Controller
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
        $typeOfRealty = 'villa';

        $villas = Realty::with(['images' => function($query) {
            $query->where('type', 'main');
        }])
            ->where('visibility', 'опубликовано')
            ->where('type_ru', 'вилла')
            ->paginate($per_page, [
                'id', 'name', "subname_$lang", 'square', 'dist_sea', 'bedrooms', 
                'capacity', 'price', 'price_line_through', 'booking_mark'
            ]);

		$data = [
            'title'        => $title,	
            'villas'       => $villas,
            'lang'         => $lang,
            'typeOfRealty' => $typeOfRealty
        ];		
        
    
        return view('villas', $data);
    }
}
