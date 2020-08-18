<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;


class ContactController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {
        $title = 'Контакты';
        $lang = app()->getLocale(); 

        $content = Content::select('contact_page')->get()->first();
           
        $data = [
            'title'   => $title,	
            'lang'    => $lang,
            'content' => $content,            	
        ];			
        	
	
		return view('contact', $data);
    }
}
