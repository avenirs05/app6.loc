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
        $title = __('main.menu.villas');

		$data = [
			'title' => $title,		
		];				
    
        //dd(Realty::select('name')->where('type_ru', 'вилла')->get());

		return view('villas', $data);
    }
}
