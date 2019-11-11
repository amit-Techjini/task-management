import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mongoose.set('useCreateIndex', true);
const mongoConnect = mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

/**
 * @class BaseModel
 */
export default class BaseModel {
    constructor(name, connection) {
        this.name = name;
        if (mongoConnect) {
            this.connection = mongoose.connection;
        }
    }

    async _getModel() {
        this.model = this.connection.model(this.name, this.schema);
    }
}