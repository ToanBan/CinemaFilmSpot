<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\TypeChair;
class TypeChairController extends Controller
{
    public function index(){
        $typechair = DB::table('type_chairs')->get();
        return response()->json($typechair);
    }

    public function store(Request $request){
        $data = $request->all();
        $typechairs = TypeChair::updateOrCreate([
            'name_type_chair' => $data['name_type_chair'],
            'price_chair' => $data['price_chair'],
        ]);
        return response()->json($typechairs);
    }

    public function destroy($id){
        $typechairToDelete = TypeChair::find($id);
        if($typechairToDelete){
            $typechairToDelete->delete();
            return response()->json(['message' => 'successful']);
        }
        return response()->json(['message' => 'delete error']);
    }

    public function update($id){
        $typechairToUpdate = TypeChair::find($id);

        if($typechairToUpdate){
            $data = request()->all();
            $typechairToUpdate->update([
                'name_type_chair' => $data['ename_type_chair'],
                'price_chair' => $data['eprice_chair'],
            ]);
            return response()->json(['message' => 'update successful']);
        }
        return response()->json(['message' => 'update error']);
    }
}
