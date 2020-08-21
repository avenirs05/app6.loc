<?php

namespace App\Http\Controllers;
use App\Realty;
use App\Content;
use App\Language;
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
        $feedbacksCount = 30;
        $languages = Language::all();

        $realty = Realty::with(['images', 'feedbacks' => function($query) use ($feedbacksCount) {
            $query->take($feedbacksCount);
        }])->where('id', $id)->first();      
        
        $title = Str::ucfirst($realty->{"type_$lang"}) . ' ' . $realty->name;  
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
            'lang'        => $lang,      
            'content'     => $content,
            'languages'   => $languages       
        ];             
        
    
        return view('realty', $data);
    }
}
