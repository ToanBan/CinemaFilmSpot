<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class UserFood extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function food(){
        return $this->belongsTo(Food::class, 'food_id', 'id');
    }
}
