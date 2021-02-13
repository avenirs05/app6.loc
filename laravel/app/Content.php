<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Content extends Model
{
    protected $table = 'contents';
    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at', 'images'];
    protected $casts = [
        'header_main'   => 'array',
        'images'        => 'array',
        'faq'           => 'array',
        'contact_page'  => 'array',
   ];
}
