import BaseModel from "./BaseModel";
import { default as todoSchema } from "../schema/todoSchema";

export default class TodoModel extends BaseModel {
    constructor(connection){
        super('todo', connection);
        this.name = 'todo';
        this.schema = todoSchema;
        this.model = this.connection.model(this.name, this.schema);
    }

    async createTodo(user, todoInfo) {
        try{
            const todo = await this.model.create({user, ...todoInfo});
            console.log(todo);
            return todo;
        } catch(err) {
            return err;
        }
    }
}