<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Room extends Model
{
    protected $guarded = [];

    
    public function showtimeshedule(){
        return $this->hasMany(ShowTimeShedule::class, 'id_room', 'id');
    }

    public function chair(){
        return $this->hasMany(Chair::class, 'id_room', 'id');
    }
}
