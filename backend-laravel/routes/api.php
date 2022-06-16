<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Auth\AuthController;

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

// url form: http://127.0.0.1:8000/api/v1/auth/
Route::group(["prefix" => "v1"], function () {
    Route::group(["middleware" => "api", "prefix" => "auth"], function ($router) {
        Route::post("register", [AuthController::class, "register"]);
        Route::post("login", [AuthController::class, "login"]);
        Route::post("logout", [AuthController::class, "logout"]);
        Route::post("refresh", [AuthController::class, "refresh"]); // refresh a token
        Route::get("profile", [AuthController::class, "profile"]);
    });
});

