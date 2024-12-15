<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\UserFood;
use Illuminate\Support\Facades\DB;
class UserFoodController extends Controller
{
    
    public function index(){
        $userfood = UserFood::with(['user', 'food'])->get();
        return response()->json($userfood);
    }

    public function store(Request $request){
        $quantities = $request->input('quantityFood');
        $userId = auth()->user()->id;
        $foodId = $request->input('selectedFood');
        $name = $request->input('nameFood');
        $price = $request->input('priceFood');
        $request->session()->put('cartfood', [
            'user_id' => $userId,
            'food_id' => $foodId,
            'quantity' => $quantities,
            'name' => $name, 
            'price' => $price,
        ]);
        $userfood = $request->session()->get('cartfood');
        return response()->json($userfood);
        
    }




}
