<?php

namespace App\Http\Controllers;
use App\Realty;

use Illuminate\Http\Request;

class VillaController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $id)
    {      
        $villa = Realty::find($id);
        $title = "Вилла $villa->name";        

		$data = [
            'title' => $title,
            'villa' => $villa		
        ];		
        
        dd($villa);
	
		return view('villa', $data);
    }
}
