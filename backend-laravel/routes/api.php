<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;
use App\Http\Controllers\Admin\AdminController;

// url form: http://127.0.0.1:8000/api/v1/auth/...
Route::group(["prefix" => "v1"], function () {
    Route::group(["middleware" => "api", "prefix" => "auth"], function ($router) {
        Route::post("register", [AuthController::class, "register"]);
        Route::post("login", [AuthController::class, "login"]);
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]); // refresh a token
        Route::get("profile", [AuthController::class, "profile"]);
    });

    // Admin routes
    // url form: http://127.0.0.1:8000/api/v1/admin/...
    Route::group(['prefix' => 'admin'], function(){
        Route::group(['middleware' => 'admin'], function(){
            Route::controller(AdminController::class)->group(function (){
                Route::post('/add_survey', 'addSurvey');
                Route::post('/add_question', 'addQuestion');
                Route::post('/add_option', 'addOption');
            });
        });    
    });

    // Route for unauthorized access
    Route::get('/not_found', [AdminController::class, 'notFound'])->name("not-found");

});
