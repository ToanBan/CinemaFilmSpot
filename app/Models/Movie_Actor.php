<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie_Actor extends Model
{
    protected $guarded = [];
 

    public function movie()
    {
        return $this->belongsTo(Movie::class, 'id_movie', 'id_movie');
    }

    public function actor()
    {
        return $this->belongsTo(Actor::class, 'id_actor', 'id');
    }
}
