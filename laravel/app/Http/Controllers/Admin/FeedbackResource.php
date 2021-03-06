<?php

namespace App\Http\Controllers\Admin;

use App\Feedback;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;

class FeedbackResource extends Controller
{

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Feedback::with('realty')->paginate(200);
    }

    public function search(Request $request, Feedback $feedback)
    {
        return Feedback::whereHas('realty', $filter = function($query) use ($request) {
            $query->where('name', 'like', "%{$request->input}%");
        })
        ->with(['realty' => $filter])
        ->paginate(1000);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $feedback = new Feedback;

        collect($request)->each(function($val, $key) use ($feedback) {
            $feedback->$key = $val;
        }); 

        $feedback->save();

        return $feedback->id;
    }


    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        return Feedback::with(['realty'])->where('id', $id)->first();
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Feedback  $feedback
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Feedback $feedback)
    {
        collect($request)->each(function($val, $key) use ($feedback) {  
            if ($key !== 'realty' && $key !== 'realty_name') {
                $feedback->update([$key => $val]);  
                $test[] = $key;         
            }   
        }); 

        return $feedback->id;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Feedback $feedback)
    {
        Feedback::destroy($feedback->id);
    }
}
