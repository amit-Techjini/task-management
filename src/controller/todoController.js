import TodoModel from "../model/TodoModel";

let todoModel = new TodoModel;

export async function createTodo(req, res) {
    const user = req.user;
    const todoCreateStatus = await todoModel.createTodo(user, req.body);
    console.log(todoCreateStatus);
    res.status(201).json({
        todoCreateStatus
    })
}