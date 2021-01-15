<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Feedback extends Model
{
    protected $table = 'feedbacks';	
    protected $guarded = [];
    protected $fillable = ['realty_id'];
    
    public function realty() 
	{
		return $this->belongsTo(Realty::class);
	}
}
