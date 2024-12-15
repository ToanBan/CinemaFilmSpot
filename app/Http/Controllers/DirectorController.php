<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\director;
class DirectorController extends Controller
{
    public function getdirector(){
        $directors = DB::table('directors')->get();
        return response()->json($directors);
    }

    public function store(Request $request){
        $data = $request->all();

        if($data){
            director::updateOrCreate([
                'name_director' => $data['name_director']
            ]);
            return response()->json(['message' => 'Add Successfull']);
        }
        return response()->json(['message' => 'Error']);
    }

    public function destroy($id){
        $directortoDelete = director::find($id);
        $directortoDelete->delete();
        return response()->json(['message' => 'Xoá Thành Công']);
    }

    public function update($id){
        $directorToUpdate = director::find($id);
        if($directorToUpdate){
            $data = request()->all();
            $directorToUpdate->update([
                'name_director' => $data['ename_director'],
            ]);
            return response()->json(['message' => 'Successful']);
        }
        return response()->json(['message' => 'error']);
    }
}
