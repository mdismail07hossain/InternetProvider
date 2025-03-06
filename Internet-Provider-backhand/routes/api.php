<?php

use App\Http\Controllers\PakeageController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});
Route::get('users',[UserController::class,'index']);
Route::get('users/{id}',[UserController::class,'show']);
Route::post('addnew',[UserController::class,'store']);
Route::put('userupdate/{id}',[UserController::class,'update']);
Route::delete('userdelete/{id}',[UserController::class,'delete']);

// start package route
// use App\Http\Controllers\PackageController;

// Route::post('/addnewpackage', [PakeageController::class, 'store']);

// Route::get('pakeage',[PakeageController::class,'index']);
// Route::get('pakeage/{id}',[PakeageController::class,'show']);
// Route::post('addnewpackage',[PakeageController::class,'store']);
// Route::put('pakeageupdate/{id}',[PakeageController::class,'update']);
// Route::delete('pakeagedelete/{id}',[PakeageController::class,'delete']);

// Get all packages
Route::get('packages', [PakeageController::class, 'index']);

// Get single package by ID
Route::get('packages/{id}', action: [PakeageController::class, 'show']);

// Add new package
Route::post('addnewpackage', [PakeageController::class, 'store']);

// Update package
Route::put('packages/{id}', [PakeageController::class, 'update']);

// Delete package
Route::delete('packages/{id}', [PakeageController::class, 'delete']);
