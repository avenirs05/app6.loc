<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Content;


class Contact extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request)
    {       	
	    return view('contact', [
            'title'   => 'Контакты',	
            'content' => Content::select('contact_page')->first(), 
        ]);
    }
}
