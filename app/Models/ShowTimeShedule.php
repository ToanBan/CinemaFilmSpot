<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShowTimeShedule extends Model
{
    protected $guarded = [];

    public function movie(){
        return $this->belongsTo(Movie::class, 'id_movie', 'id_movie');
    }

    public function room(){
        return $this->belongsTo(Room::class, 'id_room', 'id');
    }

   
}
