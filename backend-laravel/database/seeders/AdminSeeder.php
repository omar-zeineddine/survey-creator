<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User;

class AdminSeeder extends Seeder{
    /**
     * Run the database seeds.
     *
     * @return void
     */

    // php artisan db:seed --class=AdminSeeder

    public function run(){
        User::create([
            'name' => "admin",
            'email' => "admin@admin.com",
            'password' => bcrypt('adminadmin'),
            'type' => 1,
        ]);
    }
}
