<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Content extends Model
{
    protected $table = 'contents';
    protected $guarded = [];
    protected $casts = [
        'header_main'   => 'array',
        'images'        => 'array',
        'faq'           => 'array',
        'contacts_page' => 'array',
   ];
}
