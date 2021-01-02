<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;

class Test extends Controller
{
    public function __invoke(Request $request)
    {
        $realty = Realty::find(3);

        return collect($request->toArray())->each(function($val, $key) use ($realty) {
            dump($realty);
        }); 
    }
}
