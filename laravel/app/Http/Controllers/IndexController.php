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
        $data = [
            'title'   => 'Аренда вилл и апартаментов в Черногории',
            'content' => Content::select('phone_main', 'header_main', 'images', 'faq')->first(),
        ];    
        
      
        return view('index', $data);
    }
}
