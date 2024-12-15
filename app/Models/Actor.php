<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Actor extends Model
{

    protected $guarded = [];
    public function movie_actor()
    {
        return $this->hasMany(Movie_Actor::class, 'id_actor', 'id'); 
    }
}
