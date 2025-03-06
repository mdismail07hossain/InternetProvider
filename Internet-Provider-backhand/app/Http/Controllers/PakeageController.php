<?php

namespace App\Http\Controllers;

use App\Models\Pakeage;
use Illuminate\Http\Request;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Facades\DB;
class PakeageController extends Controller
{
    //show data
    public function index(){
        $users = Pakeage::all();

        return response()->json([
        'results' => $users
        ],200);
    }


    public function show($id){

        $users = Pakeage::find($id);

        if(!$users){
            return response()->json([
                'message' => 'user not found'
            ],404);
        }

        return response()->json([
            'user' => $users
        ],200);



    }



    // return Redirect::to('/');

    // public function store(Request $request){
    //     User::create($request->only([
    //         'name',
    //         'email',
    //         'password'
    //     ]));
    // }

    public function store(Request $request)
    {
        $products = DB::table('pakeages')
        ->insert(
            [
                'name' => $request->name,
                'price' => $request->price,
                'packagepower' => $request->packagepower,

            ]
        );
    }

    public function update(UserStoreRequest $request,$id){

        try {
            $users = Pakeage::find($id);
            if(!$users){
                return $users()->json([
                    'message' => 'User not found!'
                ],404);
            }

            $users->name = $request->name;
            $users->price = $request->price;
            $users->packagepower = $request->packagepower;


            $users->save();

            return response()->json([
                'message' => 'User successfully updated'
            ],200);

        } catch (\Exception $e) {
            return response()->json([
                'message' => "Something went wrong!"
            ],500);
        }
    }

    public function delete($id){

        $users = Pakeage::find($id);
        if(!$users){
            return $users()->json([
                'message' => 'User not found!'
            ],404);
        }

        $users->delete();

        return response()->json([
            'message' => 'user succesfully deleted'
        ],200);
    }
}
