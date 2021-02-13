<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Realty;
use App\Feedback;
use App\Content;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\DB;

class Test2 extends Controller
{
    public function __invoke(Request $request)
    {        
        dd(Content::all()->toJson());
    }
}
