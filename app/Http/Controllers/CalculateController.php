<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
class CalculateController extends Controller
{
    public function calculateForMonth(){
        $calMonth = DB::table('user__chairs')
        ->select(DB::raw('MONTH(dateToBuy) as month'), DB::raw('SUM(price) as total_price'))
        ->groupBy(DB::raw('MONTH(dateToBuy)'))
        ->get();

        return response()->json($calMonth);
    }
}
