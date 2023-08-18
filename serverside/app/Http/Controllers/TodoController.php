<?php

namespace App\Http\Controllers;

use App\Models\Todo;
use Illuminate\Http\Request;
use Illuminate\Support\Str;
use Illuminate\Http\Response;

class TodoController extends Controller
{
    public function __construct(private Request $request, private Todo $todo)
    {
    }
    public function index()
    {
        return $this->todo::orderBy('created_at', 'desc')->get();
    }

    /**
     * Store a newly created resource in storage.
     */

    public function store()
    {
        $form = $this->request->all();
        $merged = array_merge([
            "id" => Str::uuid()
        ], $form);
        $this->todo->create($merged);

        return response()->json([
            "data" => $merged,
            "response" => Response::HTTP_CREATED
        ]);
    }

    /**
     * Display the specified resource.
     */
    public function show(Todo $todo)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update($id)
    {
        $data = $this->request->all();
        return $this->todo->where('id', $id)->update($data);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        return $this->todo->where("id", $id)->delete();
    }
}
