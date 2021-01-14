<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;
use App\Image;

class Test extends Controller
{
    public function __invoke(Request $request)
    {        
        $isImageFirstInList = true;

        if ($request->hasfile('images')) {           
            foreach ($request->file('images') as $image) {
                // Store Image
                $name = $image->getClientOriginalName();         
                $image->storeAs("uploads/" . $request->realtyId . '/', $name, 'public');    
               
                // Create Image in Db
                $this->createImageEloquent($request, $name, $request->realtyId, $isImageFirstInList);
                $isImageFirstInList = false;
            }
        }      
    }

    protected static function createImageEloquent($request, $imageName, $realtyId, $isFirst) 
    {
        $image = new Image;
        $image->name = $imageName;
        $isFirst ? $image->type = 'main' : $image->type = 'thumbnail';                
        $image->realty_id = $request->realtyId;       
        $image->save();
    }
}
