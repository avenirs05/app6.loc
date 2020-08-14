<?php

namespace App\Http\Controllers;
use App\Realty;
use Illuminate\Support\Str;


use Illuminate\Http\Request;

class RealtyController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function __invoke(Request $request, $id)
    {     
        $lang = app()->getLocale(); 
        $realty = Realty::with('images', 'feedbacks')->where('id', $id)->first();      
        $title = Str::ucfirst($realty->{"type_$lang"}) . ' ' . $realty->name;      
        
        // Extract main image
        $mainImage = null;
        foreach ($realty->images as $image) {
            if ($image->type === 'main') {
                $mainImage = $image->name;
                break;
            }
        }   

		$data = [
            'title'       => $title,
            'realty'      => $realty,
            'mainImage'   => $mainImage,
            'lang'        => $lang,
        ];             
        
    
        return view('realty', $data);
    }
}
