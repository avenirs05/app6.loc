<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Realty;


class RealtiesController extends Controller
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
        $realtyType = $this->getRealtyType($request);        

        $realties = Realty::with(['images' => function($query) {
            $query->where('type', 'main');
        }])
            ->where('visibility', 'опубликовано')
            ->where('type_en', $realtyType)
            ->paginate($per_page, [
                'id', 'name', "subname_$lang", 'square', 'dist_sea', 'bedrooms', 
                'capacity', 'price', 'price_line_through', 'booking_mark'
            ]);
            
        $data = [
            'title'      => $title,	
            'realties'   => $realties,
            'lang'       => $lang,
            'realtyType' => $realtyType
        ];	
        

        return view('realties', $data);
    }


    protected static function getRealtyType(Request $request)
	{
		switch ($request->route()->getName()) {
			case 'villas':
				return 'villa';
				break;
			case 'apartments':
				return 'apartment';
				break;
		}
	}
}
