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
        $per_page = 2;
        $lang = app()->getLocale();

        $villas = Realty::with(['images' => function($query) {
            $query->where('type', 'main');
        }])
           ->where('visibility', 'опубликовано')
           ->where('type_ru', 'вилла')
           ->paginate($per_page, ['id', 'name', "subname_$lang", 'square', 'dist_sea',
               'bedrooms', 'capacity', 'price', 'price_line_through', 'booking_mark'
           ]);

		$data = [
            'title'    => $title,	
            'villas'   => $villas,
            'lang'     => $lang,
        ];		
        
    
        return view('villas', $data);
    }
}
