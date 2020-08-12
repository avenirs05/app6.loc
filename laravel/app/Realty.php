<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Realty extends Model
{
  protected $table = 'realties';	
	protected $guarded = [];	
	
	public function images() 
	{
		return $this->hasMany(Image::class);
	}

	public function feedbacks() 
	{
		return $this->hasMany(Feedback::class);
	}
}
