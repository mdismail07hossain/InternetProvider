<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use App\Http\Requests\UserStoreRequest;
use Illuminate\Support\Facades\DB;
class UserController extends Controller
{
    //show data
    public function index(){
        $users = User::all();

        return response()->json([
        'results' => $users
        ],200);
    }


    public function show($id){

        $users = User::find($id);

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
        $products = DB::table('users')
        ->insert(
            [
                'username' => $request->username,
                'fullname' => $request->fullname,
                'email' => $request->email,
                'numder' => $request->numder,
                'address' => $request->address,
            ]
        );
    }

    public function update(UserStoreRequest $request,$id){

        try {
            $users = User::find($id);
            if(!$users){
                return $users()->json([
                    'message' => 'User not found!'
                ],404);
            }

            $users->username = $request->username;
            $users->fullname = $request->fullname;
            $users->email = $request->email;
            $users->numder = $request->numder;
            $users->address = $request->address;

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

        $users = User::find($id);
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
