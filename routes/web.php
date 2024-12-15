<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\MovieController;
use App\Http\Controllers\DirectorController;
use App\Http\Controllers\ActorController;
use App\Http\Controllers\RoomController;
use App\Http\Controllers\ShowTimeSheduleController;
use App\Http\Controllers\ChairController;
use App\Http\Controllers\TypeChairController;
use App\Http\Controllers\StripeController;
use App\Http\Controllers\MovieActorController;
use App\Http\Controllers\CalculateController;
use App\Http\Controllers\BillController;
use Illuminate\Support\Facades\Auth;
use App\Http\Controllers\FoodController;
use App\Http\Controllers\UserFoodController;
Auth::routes();

Route::get('/', function () {
    return view('index'); 
});

Route::get('/movies/{any}', function () {
    return view('index'); 
})->where('any', '.*'); 

Route::get('/auth/check', function(){
    if (Auth::check()) {
        return response()->json([
            'authenticated' => true,
            'user' => Auth::user() 
        ]);
    }
    return response()->json(['authenticated' => false]);
});


Route::get("/movie", [MovieController::class, 'index']);

Route::get("/movie/{id}", [MovieController::class, 'show']);

Route::get('/admin', function(){
    return view('admin');
})->middleware('admin');

Route::get("/director", [DirectorController::class, 'getdirector']);

Route::post("/directors", [DirectorController::class, 'store']);

Route::delete("/directors/{id}", [DirectorController::class, 'destroy']);

Route::get("/actor", [ActorController::class, 'getactor']);

Route::post("/dienvien", [ActorController::class, 'store']);

Route::delete("/actors/{id}", [ActorController::class, 'destroy']);

Route::put('directors/{id}', [DirectorController::class, 'update']);

Route::put('actors/{id}', [ActorController::class, 'update']);

Route::get('/moviesdb', [MovieController::class, 'getdatamovie']);

Route::get('/rooms', [RoomController::class, 'index']);

Route::post("/rooms", [RoomController::class, 'store']);

Route::delete('/rooms/{id}', [RoomController::class, 'destroy']);

Route::put('/rooms/{id}', [RoomController::class, 'update']);

Route::post("/movies", [MovieController::class, 'store']);

Route::delete("/movies/{id_movie}", [MovieController::class, 'destroy']);

Route::put("/movies/{id_movie}", [MovieController::class, 'update']);

Route::post("/search", [MovieController::class, 'search']);

Route::get("/showtime", [ShowTimeSheduleController::class, 'getshowtime']);
  
Route::post("/showtime", [ShowTimeSheduleController::class, 'store']);

Route::delete("/showtime/{id}", [ShowTimeSheduleController::class, 'destroy']);

Route::put('/showtime/{id}', [ShowTimeSheduleController::class,'update']);

Route::get('/showtime/{id_movie}', [ShowTimeSheduleController::class, 'show']);

Route::get('/chair', [ChairController::class, 'index']);

Route::post('/chair', [ChairController::class, 'store']);

Route::delete('/chair/{id}', [ChairController::class, 'destroy']);

Route::put('/chair/{id}', [ChairController::class, 'update']);


Route::get('/chair/{id}', [ChairController::class, 'show']);

Route::post('/chair/datachairsid', [ChairController::class, 'getIdsChair']);

Route::get('/chairs/selected/{id_movie}', [ChairController::class,'selectedChair']);

Route::get('/typechair', [TypeChairController::class, 'index']);

Route::post('/typechair', [TypeChairController::class, 'store']);

Route::delete('/typechair/{id}', [TypeChairController::class, 'destroy']);

Route::put('/typechair/{id}', [TypeChairController::class, 'update']);

Route::post('/checkout', [StripeController::class, 'session']);


Route::get('/movieactor', [MovieActorController::class, 'index']);

Route::get('/movieactor/{id}', [MovieActorController::class, 'show']);

Route::post('/movieactor', [MovieActorController::class, 'store']);

Route::delete('/movieactor/{id_movie}/{id_actor}', [MovieActorController::class, 'destroy']);

Route::put('/movieactor/{id_movie}/{id_actor}', [MovieActorController::class, 'update']);

Route::get('/success', [StripeController::class, 'success'])->middleware('ck_success')->name('success');

Route::get('/bills', [BillController::class, 'index']);

Route::get('/foods', [FoodController::class,'index']);

Route::post('/foods', [FoodController::class,'store']);

route::delete('/foods/{id}', [FoodController::class,'destroy']);

route::put('/foods/{id}', [FoodController::class,'update']);

Route::get('/userfood', [UserFoodController::class,'index']);

Route::post('/userfood', [UserFoodController::class,'store']);


Route::get('/calculate_month', [CalculateController::class, 'calculateForMonth']);

Route::get("/{search}", function(){
    return view('index');
})->where('search', 'search');






