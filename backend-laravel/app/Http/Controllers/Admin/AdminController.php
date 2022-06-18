<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

use App\Models\Survey;
use App\Models\Question;
use App\Models\Option;
use App\Models\Type;

class AdminController extends Controller{

    public function addSurvey(Request $request){
        $survey = Survey::create([
            'name' => $request->name,
            'description' => $request->description,
        ]);
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function addQuestion(Request $request){
        $question = Question::create([
            'question' => $request->question,
            'type_id' => $request->type_id,
            'survey_id' => $request->survey_id
        ]);
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function addOption(Request $request){
        $option = Option::create([
            'question_id' => $request->question_id,
            'option' => $request->option
        ]);
        
        return response()->json([
            "status" => "Success"
        ], 200);
    }

    public function getTypes(){
        $type = Type::all();

        return response()->json([
            "status" => "Success",
            "types" => $type
        ], 200);

    }

}
