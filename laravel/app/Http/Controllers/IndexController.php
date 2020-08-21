<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;
use App\Language;


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
        $languages = Language::all();

		$data = [
            'title'   => 'Аренда вилл и апартаментов в Черногории',
            'lang'    => app()->getLocale(),	
            'content' => Content::select('phone_main', 'header_main', 'images', 'faq')
                            ->get()->first(),
            'languages' => $languages
        ];	
                
        //dd(app()->getLocale());
	
		return view('index', $data);
    }
}
