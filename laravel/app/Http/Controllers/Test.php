<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class Test extends Controller
{
    public function __invoke(Request $request)
    {
        dd(collect($request->toArray())->map(function($val) {
            return $val * 2;
        })->toArray());
    }
}
