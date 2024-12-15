<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Room;
use Illuminate\Support\Facades\DB;
class RoomController extends Controller
{
    public function index(){
        $rooms = DB::table('rooms')->get();
        return response()->json(['rooms' => $rooms]);
    }


    public function store(Request $request){
        $data = $request->all();

        if($data){
            Room::updateOrCreate([
                'name_room' => $data['name_room']
            ]);
            return response()->json(['message' => 'Add Successfull']);
        }
        return response()->json(['message' => 'Error']);
    }

    public function destroy($id){
        $roomToDelete = Room::find($id);
        if($roomToDelete){
            $roomToDelete->delete();
            return response()->json(['message' => 'delete successful']);
        }
        return response()->json(['message' => 'delete error']);
    }

    public function update($id, Request $request){
        $roomToUpdate = Room::find($id);
        
        if($roomToUpdate){
            $data = request()->all();
            $roomToUpdate->update([
                'name_room' => $data['name_room'],
            ]);
            return response()->json(['message' => 'update successful']);
        }
        return response()->json(['message' => 'update error']);
    }
}
