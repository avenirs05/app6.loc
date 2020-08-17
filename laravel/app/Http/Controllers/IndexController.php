<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;


class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $title = 'Аренда вилл и апартаментов в Черногории';
        $lang = app()->getLocale(); 

        $content = Content::select('phone_main', 'header_main', 'images', 'faq')
            ->get()->first();

        //dd($content[0]['areas_ru']['bar_riviera']['title']);
        //dd($content->areas_ru['bar_riviera']['text']);
        //dd($content->header_main[$lang]);
        //dd($content);


		$data = [
            'title'   => $title,
            'lang'    => $lang,	
            'content' => $content	
		];				
	
		return view('index', $data);
    }
}
