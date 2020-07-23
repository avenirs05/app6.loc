<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

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
        $title = 'Виллы';

		$data = [
			'title' => $title,		
		];				
	
		return view('villas', $data);
    }
}
