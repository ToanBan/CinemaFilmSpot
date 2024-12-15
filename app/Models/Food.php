<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Food extends Model
{
    protected $guarded = [];

    public function userfood(){
        return $this->hasMany(Userfood::class, 'food_id', 'id');
    }
}
