<?php

namespace App\Http\Controllers;

use App\Events\messages;
use Illuminate\Http\Request;

class Testing extends Controller
{
    public function chat(Request $request)
    {
        // echo "here";die;
        event(new messages($request->input("username"), $request->input("message")));
        return [];
    }
}
