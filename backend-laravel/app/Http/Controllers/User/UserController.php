<?php

namespace App\Http\Controllers\User;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

use App\Models\Survey;
use App\Models\Question;
use App\Models\Type;

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

    public function getQuestions(Request $request){
        $result=Question::where('survey_id',$request->survey_id)->get();
        return response()->json([
            "status" => "Success",
            "category" => $result,
        ],200);
    }

}
