<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Feedback extends Model
{
    protected $table = 'feedbacks';	
    protected $guarded = [];
    protected $hidden = ['created_at', 'updated_at'];

    
    public function realty() 
	{
		return $this->belongsTo(Realty::class);
	}
}
