<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;
use App\Image;
use App\Feedback;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class Test2 extends Controller
{
    public function __invoke(Request $request)
    {        
        //$res = DB::select("select * from feedbacks where realty_id in (select id from realties where name like 'm%')");
        // $res = Feedback::with(['realty' => function($query) {
        //     $query->where('name', 'Eino Howell');    
        // }])->paginate(1000);

        // dd(collect($res)["data"]);

        //dump($res)->items();

        // $res = collect($res);
        // dd($res);

        // $res->each(function ($item, $key) use (&$res) {
        //     dump($item);
        //     if ($value['realty'] !== null) {
        //         return true;
        //     } else return false;
        // });

        //dd(collect($res));
        //dd($filtered);

                // $realtiesIds = "SELECT id from `realties` WHERE name LIKE '{$request->input}%'";
        // return DB::select("SELECT * from `feedbacks` WHERE realty_id IN ({$realtiesIds})")->paginate($this->paginateItems);
    }
}
