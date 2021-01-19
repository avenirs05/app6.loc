<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;
use Illuminate\Support\Facades\Storage;

class Test2 extends Controller
{
    public function __invoke(Request $request)
    {        
        //dd(storage_path('uploads/realties'));
        //dd(storage_path() . "/uploads/realties/14/");
        //dd(Storage::deleteDirectory(storage_path() . "/app/public/test1"));
        //dd(storage_path() . "/app/public/test1");
        //dd(Storage::deleteDirectory('images2'));
        //dd(Storage::getFacadeRoot());
        //Storage::delete('fox.png');
        //dd(Storage::disk('public')->deleteDirectory('uploads/realties/14'));
        $realty = Realty::find(10);
        //dd($realty->images);

        //foreach ($realty->images as $image) {
            //dump($image->name) . '\n';
            // if ($image->type === 'main') {
            //     $mainImage = $image->name;                
            // }
        //} 
    }
}
