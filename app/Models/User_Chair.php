<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class User_Chair extends Model
{
    protected $guarded = [];

    public function user(){
        return $this->belongsTo(User::class, 'user_id', 'id');
    }

    public function chair(){
        return $this->belongsTo(Chair::class, 'chair_id', 'id');
    }

    
}
