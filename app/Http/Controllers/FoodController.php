<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use App\Models\Food;
class FoodController extends Controller
{
    public function index(){
        $foods = DB::table("food")->get();
        return response()->json($foods);    
    }

    public function store(Request $request){    
        $data = $request->all();
        if($data){
            $image = $request->file("image_combo_food");
            $image_path = time() . '-' . $image->getClientOriginalName();
            $image->move(storage_path('app/public/images_food'), $image_path);
            Food::updateOrCreate([
                'name_combo_food' => $data['name_combo_food'],
                'des_combo_food' => $data['des_combo_food'],
                'price_combo_food' => $data['price_combo_food'],
                'quantity_combo_food' => $data['quantity_combo_food'],
                'image_combo_food' => $image_path    
            ]);
        }
        return response()->json([ 'message' => 'add succesful' ]);   
    }

    public function destroy($id){
        $foodToDelete = Food::find($id);
        $imagePath = $foodToDelete->image_combo_food; 
        $imageToDelete = storage_path('app/public/images_food/' . $imagePath);
        if($imageToDelete){
            unlink($imageToDelete);
        }   
        $foodToDelete->delete();
        return response()->json(['message' => 'deleted successful']);
    }

    public function update($id, Request $request){
        $footToUpdate = Food::find($id);
        $imageEdit = $request->file('image_combo_food');
        $data = $request->all();
        if($data){
            $imagePath = $footToUpdate->image_combo_food;
            $imageToDelete = storage_path('app/public/images_food'. $imagePath);
            if(file_exists($imageToDelete)){
                unlink($imageToDelete);
            }
            $imageToUpdate = time() . '-' . $imageEdit->getClientOriginalName();
            $imageEdit->move(storage_path('app/public/images_food'), $imageToUpdate);
            $footToUpdate->update([
                'name_combo_food' => $data['name_combo_food'],
                'des_combo_food' => $data['des_combo_food'],
                'price_combo_food' => $data['price_combo_food'],
                'quantity_combo_food' => $data['quantity_combo_food'],
                'image_combo_food' =>  $imageToUpdate,
            ]);
        }
        return response()->json($footToUpdate);
    }
}
