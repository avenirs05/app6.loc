<?php

namespace App\Http\Controllers;

use Illuminate\Support\Str;
use App\Realty;
use App\Content;
use App\Language;


class RealtyController extends Controller
{
    /**
     * Handle the incoming request.
     *
     * @return \Illuminate\Http\Response
     */
    public function __invoke(int $id)
    {     
        $locale = app()->getLocale(); 
        $feedbacksCount = 30;

        $realty = Realty::with(['images', 'feedbacks' => function($query) use ($feedbacksCount) {
            $query->take($feedbacksCount);
        }])->where('id', $id)->first();      
        
        $title = Str::ucfirst($realty->{"type_$locale"}) . ' ' . $realty->name;  
        $content = Content::select('phone_main', 'header_main')->get()->first();    
        
        // Extract main image
        $mainImage = null;
        foreach ($realty->images as $image) {
            if ($image->type === 'main') {
                $mainImage = $image->name;
                break;
            }
        }   

        // Extract thumbnail images
        $thumbImages = [];
        foreach ($realty->images as $thumbImage) {
            if ($thumbImage->type === 'thumbnail') {
                $thumbImages[] = $thumbImage->name;
            }
        } 

		$data = [
            'title'       => $title,
            'realty'      => $realty,
            'mainImage'   => $mainImage,
            'thumbImages' => $thumbImages,
            'locale'      => $locale,      
            'content'     => $content,
            'languages'   => Language::all()       
        ];             
        
    
        return view('realty', $data);
    }
}
