<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class TypeChair extends Model
{
    protected $guarded = [];

    public function chair(){
        return $this->hasMany(Chair::class, 'id_chair', 'id');
    }
}
