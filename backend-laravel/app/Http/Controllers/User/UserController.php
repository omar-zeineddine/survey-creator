<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Survey;
use App\Models\Question;

class UserController extends Controller{

     public function getSurveys($id = null){
        if($id != null){
            $survey = Survey::find($id);
        }else{
            $survey = Survey::all();
        }
        
        return response()->json([
            "status" => "Success",
            "surveys" => $survey
        ], 200);
    }

    public function addAnswer(Request $request){
        $answer = Answer::create([
            'user_id' => $request->user_id,
            'question_id' => $request->question_id,
            'answer' => $request->answer
        ]);

        return response()->json([
            "status" => "Success"
        ], 200);
    }

}
