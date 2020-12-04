<?php

namespace App\Http\Controllers;

use App\Content;


class IndexController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke()
    {   
        $data = [
            'title'   => 'Аренда вилл и апартаментов в Черногории',
            'content' => Content::select('header_main', 'images', 'faq')->first(),
        ];  
        

        return view('index', $data);
    }
}
