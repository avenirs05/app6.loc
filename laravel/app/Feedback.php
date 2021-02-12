<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Feedback extends Model
{
    protected $table = 'feedbacks';	
    protected $guarded = [];
    public $timestamps = false;
    
    public function realty() 
	{
		return $this->belongsTo(Realty::class);
	}
}
