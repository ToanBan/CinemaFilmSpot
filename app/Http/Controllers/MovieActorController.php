<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Movie_Actor;
use Illuminate\Support\Facades\DB;
class MovieActorController extends Controller
{
    public function index(){
        $movies = DB::table('movies')->take(30)->get();
        $actors = DB::table('actors')->get();
        $movie_actors = Movie_Actor::with(['movie', 'actor'])->get();
        return response()->json(['movies' => $movies, 'actors' => $actors, 'movie_actors' => $movie_actors]);
    }

    public function store(Request $request){
        $data = $request->all();
        if($data){
            Movie_Actor::updateOrCreate([
                'id_movie' => $data['id_movie'],
                'start' => $data['start'],
                'area' => $data['area'],
                'duration' => $data['duration'],
                'id_actor' => $data['id_actor'],
            ]);
            return response()->json(['message' => 'successful']);
        }
        return response()->json(['message' => 'error']);
    }

    public function destroy($id_movie, $id_actor)
    {   
        $deletedRows = DB::delete('DELETE FROM movie__actors WHERE id_movie = ? AND id_actor = ?', [$id_movie, $id_actor]);

        return response()->json($deletedRows);
        if ($deletedRows > 0) {
            return response()->json(['message' => 'Record deleted successfully.'], 200);
        } else {
            return response()->json(['message' => 'No record found to delete.'], 404);
        }
    }

    public function update($id_movie, $id_actor)
    {
        $data = request()->all();
        $updateRows = DB::update(
            'UPDATE movie__actors 
             SET start = ?, duration = ?, area = ?
             WHERE id_movie = ? AND id_actor = ?', 
            [
                $data['start'], 
                $data['duration'], 
                $data['area'], 
                $id_movie, 
                $id_actor
            ]
        );
        if ($updateRows > 0) {
            return response()->json(['message' => 'Record updated successfully.'], 200);
        } else {
            return response()->json(['message' => 'No record found to update.'], 404);
        }
    }

    public function show($id){
        $movieactors = Movie_Actor::with(['actor', 'movie'])->where('id_movie', $id)->get();
        return response()->json($movieactors);
    }
    
}
