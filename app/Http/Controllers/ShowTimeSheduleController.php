<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\ShowTimeShedule;
use App\Models\Movie;
use App\Models\Room;
use Illuminate\Support\Facades\DB;
class ShowTimeSheduleController extends Controller
{
    public function getshowtime(){
        $rooms = DB::table('rooms')->get();
        $movies = DB::table('movies')->take(30)->get();
        $showtimes = ShowTimeShedule::with(['movie', 'room'])->get();
        return response()->json(['showtimes' => $showtimes, 'rooms' => $rooms, 'movies' => $movies]);
    }

    public function store(Request $request){
        $data = $request->all();
        $showtimes = ShowTimeShedule::updateOrCreate([
            'id_movie' => $data['id_movie'],
            'id_room' => $data['id_room'],
            'showtime' => $data['showtime'],
        ]);
        return response(['message' => $showtimes]);
    }

    public function destroy($id){
        $showtimeToDelete =  ShowTimeShedule::find($id);
        if($showtimeToDelete){
            $showtimeToDelete->delete();
            return response()->json(['message' => 'succesful']);
        }
        return response()->json(['message' => 'error']);
    }

    public function update($id){
        $showtimeToUpdate = ShowTimeShedule::find($id);
        if($showtimeToUpdate){
            $data = request()->all();
            $showtimeToUpdate->update([
                'id_movie' => $data['eid_movie'],
                'id_room' => $data['eid_room'],
                'showtime' => $data['eshowtime'],
            ]);
            return response()->json(['message' => 'successful']);
        }
        return response()->json(['message' => 'error']);
    }


    public function show($id_movie){
        $movieShowTime = ShowTimeShedule::with('room')->where('id_movie', $id_movie)->get();
        return response()->json($movieShowTime);
    }
   
}
