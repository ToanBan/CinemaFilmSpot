<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class director extends Model
{
    protected $guarded = [];

    public function movies(){
        return $this->hasMany(Movie::class, 'id_director', 'id');
    }
}
