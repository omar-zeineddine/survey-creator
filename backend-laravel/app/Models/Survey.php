<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Survey extends Model
{
    use HasFactory;

    public function questions(){
        return $this->hasMany(Question::class);
    }

    // add to fillable property to allow mass assignment
    protected $fillable = [
        'name',
        'description'
    ];

}
