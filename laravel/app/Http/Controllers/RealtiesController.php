<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Realty;
use App\Content;
use App\Language;


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
        $per_page = 5;
        $lang = app()->getLocale();
        $realtyType = $this->getRealtyType($request);        
        $content = Content::select('phone_main', 'header_main')->get()->first();
        $languages = Language::all(); 

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
            'title'      => __("main.menu." . $request->path()),	
            'realties'   => $realties,
            'lang'       => $lang,
            'realtyType' => $realtyType,
            'content'    => $content,
            'languages' => $languages  
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
