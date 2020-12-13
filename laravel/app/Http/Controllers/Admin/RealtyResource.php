<?php

namespace App\Http\Controllers\Admin;

use App\Realty;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class RealtyResource extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Realty::paginate(20)->toJson();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function show(Realty $realty)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function edit(Realty $realty)
    {
        //
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
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Realty  $realty
     * @return \Illuminate\Http\Response
     */
    public function destroy(Realty $realty)
    {
        //
    }
}
