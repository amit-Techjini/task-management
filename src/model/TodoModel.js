import BaseModel from "./BaseModel";
import { default as todoSchema } from "../schema/todoSchema";

export default class TodoModel extends BaseModel {
    constructor(connection){
        super('todo', connection);
        this.name = 'todo';
        this.schema = todoSchema;
        this.model = this.connection.model(this.name, this.schema);
    }

    /**
     * createTodo - function to create a todo
     * 
     * @param {*} user 
     * @param {*} todoInfo 
     */
    async createTodo(user, todoInfo) {
        try {
            const todo = await this.model.create({user, ...todoInfo});
            // console.log(todo);
            return todo;
        } catch(err) {
            return err;
        }
    }

    /**
     * updateTodoById - to update todo
     * @param {*} todoId 
     * @param {*} todoInfo 
     */
    async updateTodoById(todoId, todoInfo) {
        try {
            return await this.model.findByIdAndUpdate(
                todoId,
                todoInfo,
                {
                    new: true
                }
            )
        } catch (err) {
            console.log(err);
            return err;
        }
    }
}