import TodoModel from "../model/TodoModel";

let todoModel = new TodoModel;

/**
 * createTodo - function to create a todo for a user
 * 
 * @param {*} req 
 * @param {*} res 
 */
export async function createTodo(req, res) {
    try{
        const user = req.user;
        const todoCreateStatus = await todoModel.createTodo(user, req.body);
        
        res.status(201).json({
            todoCreateStatus
        });
    } catch (err) {
        res.status(500).json({err});
    }
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */
export async function updateTodo(req, res) {
    try {
        const todoId = req.params.id;
        const todoInfo = req.body;

        const updateStatus = await todoModel.updateTodoById(todoId, todoInfo);

        res.status(200).json({
            updateStatus
        })
    } catch (err) {
        console.log(err);
        res.status(400).json({err});
    }
}