<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;
use App\Image;
use App\Feedback;
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
        //$realty = Realty::find(10);
        //dd($realty->images);

        //foreach ($realty->images as $image) {
            //dump($image->name) . '\n';
            // if ($image->type === 'main') {
            //     $mainImage = $image->name;                
            // }
        //} 
        //dd(Realty::find(5)->with(['images'])->count());
        // $realty = Realty::find(5)->with(['images' => function($query) {
        //     $query->where('type', 'main');
        // }]);


        //$realty = Realty::find(5);
        //dd($realty->images()->count());
        // dd($realty->images()->each(function($image) {
        //     if ($image->type === 'main') {
        //         $image->delete();
        //         //dump('main');
        //     }            
        // }));  

        // $realty = Realty::find(6);

        // if ($realty->images()) {
        //     $realty->images()->each(function($image) {
        //         if ($image->type === 'thumbnail') {
        //             Image::destroy($image->id);
        //         }            
        //     });
        // } else dd('no');

        //dd(Feedback::with('realty')->paginate(20));
        // $users = Feedback::with(['realty' => function ($query) {
        //     $query->where('title', 'like', '%first%');
        // }])->get();





    }
}
