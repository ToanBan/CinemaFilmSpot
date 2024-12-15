<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Movie extends Model
{
    protected $guarded = [];
    protected $primaryKey = 'id_movie'; 
    public $incrementing = false; 
    protected $keyType = 'string'; 
    public function movie_actor()
    {
        return $this->hasMany(Movie_Actor::class, 'id_movie', 'id_movie');
    }

    public function director(){
        return $this->belongsTo(director::class, 'id_director', 'id');
    }


    public function showtimeshedule(){
        return $this->hasMany(ShowTimeShedule::class, 'id_movie', 'id_movie');
    }
}
