<?php

namespace App\Http\Controllers\Admin;

use App\Content;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;


class ContentController extends Controller
{
    public function index() {
        return Content::first();
    }
}
