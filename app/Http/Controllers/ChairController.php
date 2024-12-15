<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Chair;
use App\Models\Room;
use App\Models\TypeChair;
class ChairController extends Controller
{
    public function index(){
        $rooms = DB::table('rooms')->get();
        $typechairs = DB::table('type_chairs')->get();
        $chairs = Chair::with(['room', 'typechair'])->get();
        return response()->json(['rooms' => $rooms, 'chairs' => $chairs, 'typechairs' => $typechairs]);
    }

    public function store(Request $request){
        $data = $request->all();

        $chair = Chair::updateOrCreate([
            'name_chair' => $data['name_chair'],
            'id_room' => $data['id_room'],
            'id_chair' => $data['id_chair'],
        ]);

        return response()->json($chair);
    }


    public function destroy($id){
        $chairToDelete = Chair::find($id);
        $chairToDelete->delete();
        return response()->json(['message' => 'successful']);
    }

    public function update($id){
        $chairToUpdate = Chair::find($id);
        if($chairToUpdate){
            $data = request()->all();
            $chairToUpdate->update([
                'name_chair' => $data['ename_chair'],
                'id_room' => $data['eid_room'],
            ]);
            return response()->json(['message' => 'update successful']);
        }
    
        return response()->json(['message' => 'update error']);
    }

    public function show($id){
        $chairs = Chair::where('id_room', $id)->get();
        return response()->json($chairs);
    }

    public function getIdsChair(Request $request){
        $id = $request->input('chair_id');
        $chairCost = Chair::with('typechair')->where('id', $id)->get();
        return response()->json($chairCost);
    }

    public function selectedChair($id_movie){
        $result = DB::table('user__chairs')
        ->join('show_time_shedules', 'user__chairs.id_showtime', '=', 'show_time_shedules.id')
        ->select('show_time_shedules.id_movie', 'user__chairs.chair_id', 'user__chairs.user_id')
        ->where('show_time_shedules.id_movie', '=', $id_movie)
        ->get();
        return response()->json($result);
    }
}
