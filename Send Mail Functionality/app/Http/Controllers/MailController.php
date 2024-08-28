<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Mail;
use App\Mail\DemoMail;
class MailController extends Controller
{
    public function index()
    {
        $mailData = [
            "title" => "Mail From Tester",
            "body" => "This is for testing purpose only by smtp"
        ];
        Mail::to("duttmagic5@gmail.com")->send(new DemoMail($mailData));
        // Mail::to("riteshsmartdata@gmail.com")->send(new DemoMail($mailData));
        // Mail::to($mailData["email"])->send(new DemoMail($mailData));

        dd("Email sent successfully");
    }
}
