import BaseModel from "./BaseModel";
import userSchema from "../schema/userSchema";
import jwt from "jsonwebtoken";

export default class UserModel extends BaseModel {
    constructor(connection) {
        super('user',connection);
        this.name = 'user'
        this.schema = userSchema;
        this.model = this.connection.model(this.name, this.schema);
    }
    
    /**
     * createUser - function to create a user
     * @param {*} userInfo 
     */
    async createUser(userInfo) {
        try{
            const user = await this.model.create({
                email: userInfo.email,
                password: userInfo.password
            });
            await this.createAuthToken(user);
            return await this.getUserData(user._id);    
        } catch(err) {
            return err;
        }
    }

    /**
     * createAuthToken - function to createAuthToken     
     * @param {*} user 
     */
    async createAuthToken(user) {
        try{
            const token = jwt.sign({_id:user._id},"thisissecret");
            user.tokens = user.tokens.concat({ token });
            user.save(); //built - in function to save the user
            return token;

        } catch (err) {
            return err;
        }
    }

    /**
     * getUserByCredentials - fetch user using their credentials 
     * @param {*} userInfo 
     */
    async getUserByCredentials(userInfo) {

        try{    
            const chkUser = await this.model.findOne({ email: userInfo.email });

            if (!chkUser) {
                return null;//user not found
            }

            if(chkUser.password !== userInfo.password) {
                return null;
            }
            return chkUser;

        } catch (err) {
            return err;
        }
    }

    async getUserData(_id) {

        const data = await this.model.findOne(
            { _id }, {
                email: 1
            }
        );
        return data;
    }

    async findUserById(_id) {
        try {
            return await this.model.findById(_id);
        } catch(err) {
            return err;
        }
    }
}