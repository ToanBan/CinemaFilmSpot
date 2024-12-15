<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use Stripe\Stripe;
use Stripe\Checkout\Session as StripeSession;
use App\Models\User_Chair;
use App\Models\UserFood;
class StripeController extends Controller
{
    public function session(Request $request){
        $userId = auth()->user()->id;
        $data = $request->input('listChair');
        $id_showtime = $request->input('id_showtime');
        $lineItems = [];
        $orderOrder = $request->input('orderded');
        
        
        foreach($data as $item){
            $lineItems[] = [
                'price_data' => [
                    'currency' => 'usd',
                    'product_data' => [
                      'name' => $item['name_chair'],
                    ],
                    'unit_amount' => $item['typechair']['price_chair']  * 100,
                  ],
                'quantity' => 1,
               
                ];
            
        }

        $lineItems[] = [
            'price_data' => [
                'currency' => 'usd', 
                'product_data' => [
                    'name' => $orderOrder['name'],
                ],
                'unit_amount' => $orderOrder['price'] * 100,
            ],
            'quantity' => $orderOrder['quantity'],
        ];

        Stripe::setApiKey(env('STRIPE_SECRET'));
        $session = StripeSession::create([
              'line_items' => $lineItems,
              'mode' => 'payment',
              'success_url' => route('success'),
            ]);
        session(['order_successful' => true, 'data' => $data, 'id_showtime' => $id_showtime, 'ordered' => $orderOrder]);
        return response()->json(['url' => $session->url]);
    }


    public function success(){
        $userId = auth()->user()->id;
        $data = session('data');
        $id_showtime = session('id_showtime');
        $orderded = session('ordered');
        if($data){
            foreach($data as $item){
                User_Chair::updateOrCreate([
                    'user_id' => $userId,
                    'chair_id' => $item['id'],
                    'price' => $item['typechair']['price_chair'],
                    'id_showtime' => $id_showtime
                  ]);
            }
        }

       if($orderded){
            UserFood::updateOrCreate([
                'user_id' => $userId,
                'quantity' => $orderded['quantity'], 
                'food_id' => $orderded['food_id'],
                'id_showtime' => $id_showtime,
            ]);
       }

        session()->forget(['data', 'order_successful', 'orderded']);
        return view('index');
    }

    
}
