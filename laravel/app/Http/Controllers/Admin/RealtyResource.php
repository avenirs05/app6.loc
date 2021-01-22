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

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function downloadImages(Request $request)
    {
        $realtyId = $request->realtyId;

        if ($request->hasfile('thumbnails')) {    
            foreach ($request->file('thumbnails') as $image) {  
                $name = $image->getClientOriginalName();              
                $image->storeAs("uploads/realties/{$realtyId}/", $name, 'public');   
                $this->createImageEloquent($request, $name, $realtyId, 'thumbnail');                
            }
        } 

        if ($request->hasfile('main_image')) {   
            // Delete main images if exists
            $realty = Realty::find($realtyId);
            $realty->images()->each(function($image) {
                if ($image->type === 'main') {
                    Image::destroy($image->id);
                }            
            });
            
            $name = $request->file('main_image')->getClientOriginalName();   
            $request->file('main_image')->storeAs("uploads/realties/{$realtyId}/", $name, 'public');  
            $this->createImageEloquent($request, $name, $realtyId, 'main');           
        }        
    }

    private function createImageEloquent($request, $imageName, $realtyId, $imageType) 
    {
        $image = new Image;
        $image->name = $imageName;
        $image->type = $imageType;                
        $image->realty_id = $request->realtyId;       
        $image->save();
    }
}
