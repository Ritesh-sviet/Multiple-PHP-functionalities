<?php

namespace App\Http\Controllers;

use App\Events\SendNotification;
use App\Events\messages;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function Send()
    {
        // echo "hello";die;

        event(new SendNotification('hello world', 'my-channel', 'my-event'));
    }

    public function chat(Request $request)
    {
        event(new messages($request->input("username"), $request->input("message")));
        return [];
    }
}


