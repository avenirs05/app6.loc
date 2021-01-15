<?php

namespace App;

use Illuminate\Database\Eloquent\Model;


class Image extends Model
{
	protected $guarded = [];
	protected $fillable = ['realty_id'];
	
	
	public function realty() 
	{
		return $this->belongsTo(Realty::class);
	}
}
