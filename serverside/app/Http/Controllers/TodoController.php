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

    public function store()
    {
        $form = $this->request->all();
        $merged = array_merge([
            "id" => Str::uuid()
        ], $form);

        if ($this->todo->where('title', $this->request->title)->exists()) {
            return response()->json([
                "message" => "This task already exists!"
            ]);
        }
        $this->todo->create($merged);

        return response()->json([
            "data" => $merged,
            "response" => Response::HTTP_CREATED
        ]);
    }

    public function update($id)
    {
        $data = $this->request->all();
        $this->todo->where('id', $id)->update($data);
        return response()->json(array_merge(
            [
                "id" => $id,
                "response" => Response::HTTP_CREATED
            ],
            $data
        ));
    }

    public function destroy($id)
    {
        return $this->todo->where("id", $id)->delete();
    }
}
