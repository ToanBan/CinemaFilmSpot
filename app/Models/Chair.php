<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Chair extends Model
{
    protected $guarded = [];

    public function room(){
        return $this->belongsTo(Room::class, 'id_room', 'id');
    }

    public function typechair(){
       return $this->belongsTo(TypeChair::class, 'id_chair', 'id');
    }

    public function userchair(){
        return $this->hasMany(User_Chair::class, 'chair_id', 'id');
    }
}
