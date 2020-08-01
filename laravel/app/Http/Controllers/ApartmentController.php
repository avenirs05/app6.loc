<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ApartmentController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $id)
    {
        $title = 'Апартамент';

		$data = [
            'title' => $title,	
            'id' => $id		
		];				
	
		return view('apartment', $data);
    }
}
