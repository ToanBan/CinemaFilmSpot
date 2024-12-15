<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Models\Movie;
use App\Models\Movie_Actor;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
class MovieController extends Controller
{
    

    public function index(){
        $response = Http::get('https://ophim1.com/danh-sach/phim-moi-cap-nhat?page=2');
        if($response->successful()){
            $data = array_slice($response->json()['items'], 0, 30);
            foreach($data as $item){
                Movie::updateOrCreate([
                    'id_movie' => $item['_id'],
                    'name_movie' => $item['name'],
                    'image_movie' => $item['poster_url'],
                    'id_director' => 1
                ]);
                
                $slug = $item['slug'];
                $responseDetail = Http::get('https://ophim1.com/phim/' . $slug);
                if($responseDetail->successful()){
                    $detailData = $responseDetail->json();
                    Movie_Actor::updateOrCreate([
                        'id_movie' => $item['_id'],
                        'start' => $detailData['movie']['lang'],
                        'area' => $detailData['movie']['country'][0]['name'],
                        'duration' => $detailData['movie']['time'],
                        'id_actor' => 2
                    ]);                   
                }
            }
            return response()->json($data);
        }
        return response()->json(['message' => 'lỗi']);
    }


    public function show($id){  
        $movieDetail = Movie_Actor::with(['movie', 'actor', 'movie.director'])->where('id_movie', $id)->get();
        return response()->json($movieDetail);
    }


    public function getdatamovie(){
        $movies = Movie::with('director')->take(30)->get();
        $directors = DB::table('directors')->get();
        return response()->json(['movies'=> $movies, 'directors'=>$directors]);
    }

    public function store(Request $request){
        $data = $request->all();
        $image = $request->file('image_movie');
        $imageName = null;
    
        if ($image) {
            $imageName = time() . '-' . $image->getClientOriginalName();
            $image->move(storage_path('app/public/temp_images'), $imageName);
        }

        $movies = Movie::create([
            'id_movie' => $data['id_movie'],
            'name_movie' => $data['name_movie'],
            'image_movie' => $imageName,
            'id_director' => $data['id_director']
        ]);
        return response()->json($movies);
    }

    public function destroy($id_movie) {
        $movieToDelete = Movie::find($id_movie);
    
        if (!$movieToDelete) {
            return response()->json(['message' => 'Phim không tồn tại'], 404);
        }
        $image = $movieToDelete->image_movie;
        $imagePath = storage_path('app/public/temp_images/' . $image);
        if (file_exists($imagePath)) {
            unlink($imagePath);
        }
        $movieToDelete->delete();
    
        return response()->json(['message'=> 'Xoá thành công', 'image' => $image]);
    }
    

    public function update($id_movie){
        $movieToUpdate = Movie::find($id_movie);
        $imageDelete = $movieToUpdate->image_movie;
        $data = request()->all();
        $imageUpdate = request()->file('eimage_movie');
        $imageUpdateFull = null;
        if($imageUpdate){
            $imagePathDelete = storage_path('app/public/temp_images/'. $imageDelete);
            if($imagePathDelete){
                unlink($imagePathDelete);
            }
            $imageUpdateFull = time() . '-' . $imageUpdate->getClientOriginalName();
            $imageUpdate->move(storage_path('app/public/temp_images'), $imageUpdateFull);
        }
        $movieToUpdate->update([
            'name_movie' => $data['ename_movie'],
            'image_movie' => $imageUpdateFull,
            'id_director' => $data['eid_director'],
        ]);
        return response()->json(['message' => 'successful']);
    }

    public function search(Request $request)
    {
        $searchTerm = $request->input('search'); 
        try {
            $movies = Movie::with(['director', 'movie_actor.actor'])->where('name_movie', 'LIKE', "%{$searchTerm}%")->get();

            return response()->json($movies);
        } catch (\Exception $e) {
        return response()->json(['error' => 'An error occurred'], 500);
    }
}


    
}
