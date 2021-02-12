<?php

namespace App\Http\Controllers\Admin;

use App\Realty;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Image;
use Illuminate\Support\Facades\Storage;

class RealtyResource extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Realty::paginate(5);
    }


    public function search(Request $request)
    {
        return Realty::where('name', 'like', "%{$request->input}%")->paginate(1000);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $realty = new Realty;

        collect($request)->each(function($val, $key) use ($realty) {
            $realty->$key = $val;
        }); 

        $realty->save();

        return $realty->id;
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function show(Realty $realty)
    {
       return $realty;
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function edit(Realty $realty)
    {
        return Realty::with(['images'])->where('id', $realty->id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Realty $realty)
    {
        collect($request)->each(function($val, $key) use ($realty) {  
            if ($key !== 'images') {
                $realty->update([$key => $val]);           
            }          
        }); 

        return $request->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function destroy(Realty $realty)
    {
        Realty::destroy($realty->id);
        Storage::disk('public')->deleteDirectory("uploads/realties/{$realty->id}");        
    }

    public function imagesLoadWhenRealtyCreate(Request $request)
    {
        if ($request->hasfile('thumbnails')) {    
            $this->thumbnailsLoad($request);
        } 

        if ($request->hasfile('main_image')) {  
            $this->mainImageLoad($request);          
        }        
    }

    public function mainImageLoad(Request $request) 
    {
        $basePath = 'uploads/realties';
        $realtyId = $request->realtyId;
        $file = $request->file('main_image');
        $this->deleteOtherImagesEloquentByType($realtyId, "main");    
        $imgName = $file->store("{$basePath}/{$realtyId}", 'public');              
        $this->createImageEloquent($request, $imgName, $realtyId, 'main');    
    }

    public function thumbnailsLoad(Request $request)
    {
        $basePath = 'uploads/realties';
        $realtyId = $request->realtyId;
        $imagesFiles = $request->file('thumbnails');

        foreach ($imagesFiles as $image) {  
            $imgName = $image->store("{$basePath}/{$realtyId}", 'public');    
            $this->createImageEloquent($request, $imgName, $realtyId, 'thumbnail');                
        }        
    }

    private function createImageEloquent(Request $request, $imageName, $realtyId, $imageType) 
    {
        $image = new Image;
        $image->name = $imageName;
        $image->type = $imageType;                
        $image->realty_id = $request->realtyId;       
        $image->save();
    }

    private function deleteOtherImagesEloquentByType($realtyId, $imageType) 
    {
        $realty = Realty::find($realtyId);
        $realty->images()->each(function($image) use ($imageType) {
            if ($image->type === $imageType) {
                Image::destroy($image->id);
            }            
        });
    }

    public function deleteImage($id) 
    {
        Image::destroy($id);
    }
}
