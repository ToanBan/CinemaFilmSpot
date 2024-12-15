<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Actor;
class ActorController extends Controller
{
    public function getactor(){
        $actors = DB::table('actors')->get();
        return response()->json($actors);
    }

    public function store(Request $request){
        $data = $request->all();
        if($data){
            Actor::updateOrCreate([
                'name_actor' => $data['name_actor'],
            ]);
            return response()->json(['message' => 'Add Successfull']);
        }
        return response()->json(['message' => 'Error']);
    }

    public function destroy($id){
        $actorToDelete = Actor::find($id);
        $actorToDelete->delete();
        return response()->json(['message'=> 'Xoá thành công']);
    }

    public function update($id){
        $actorToUpdate = Actor::find($id);
        if($actorToUpdate){
            $data = request()->all();
            $actorToUpdate->update([
                'name_actor' => $data['ename_actor'],
            ]);
            return response()->json(['message' => 'Successful']);
        }
        return response()->json(['message' => 'Err']);
    }
}
