<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Bill;
use Illuminate\Support\Facades\DB;
class BillController extends Controller
{
    public function index(){
        $results = DB::table('users')
        ->join('user__chairs', 'users.id', '=', 'user__chairs.user_id')
        ->join('show_time_shedules', 'user__chairs.id_showtime', '=', 'show_time_shedules.id')
        ->join('movies', 'show_time_shedules.id_movie', '=', 'movies.id_movie')
        ->join('user_food', 'show_time_shedules.id', '=', 'user_food.id_showtime')
        ->join('food', 'user_food.food_id', '=', 'food.id')
        ->select(
            'users.id',
            'users.name',
            'movies.name_movie',
            'show_time_shedules.showtime',
            'food.name_combo_food',
            'user__chairs.id_showtime',
            
            DB::raw('SUM(user__chairs.price + (user_food.quantity * food.price_combo_food)) as total_price')
        )
        ->groupBy('users.id', 'users.name', 'movies.name_movie', 'show_time_shedules.showtime', 'food.name_combo_food', 'user__chairs.id_showtime')
        ->get();

     
        $data = $results->map(function($item){
            return [
                'user_id' => $item->id,
                'id_showtime' => $item->id_showtime,
                'total_price' => $item->total_price,
                
            ];
        });

        foreach($data as $item){
            Bill::updateOrCreate([
                'showtime_id' => $item['id_showtime'],
                'total_price' => $item['total_price'],
                'user_id' => $item['user_id'],
               
            ]);
        }
       
    
      

        return response()->json($results);
    }
}
