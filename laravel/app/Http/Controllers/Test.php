<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;

class Test extends Controller
{
    public function __invoke(Request $request)
    {        
        if ($request->hasfile('images')) {           
           foreach ($request->file('images') as $image) {
               $name = $image->getClientOriginalName();         
               $image->storeAs("uploads/" . $request->realtyId . '/', $name, 'public');              
           }
        }
        
        return $request;
    }
}
