<?php

namespace App\Http\Controllers\Admin;

use App\Realty;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Image;

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
        return $realty;
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
            $realty->update([$key => $val]);
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
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function downloadImages(Request $request)
    {
        $isImageFirstInList = true;

        if ($request->hasfile('images')) {           
            foreach ($request->file('images') as $image) {
                
                // Store Image
                $name = $image->getClientOriginalName();    
                $realtyId = $request->realtyId;      
                $image->storeAs("uploads/realties/{$realtyId}/", $name, 'public');    
               
                // Create Image in Db
                $this->createImageEloquent($request, $name, $realtyId, $isImageFirstInList);
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
