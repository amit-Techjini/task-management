import UserModel from "../model/UserModel";

let userModel = new UserModel;

/**
 * register - to register the user
 * 
 * @param {*} req 
 * @param {*} res 
 */
export async function register(req, res) {
    const createStatus = await userModel.createUser(req.body);
    res.status(201).json(createStatus);
}

/**
 * login - to login a user
 * 
 * @param {*} req 
 * @param {*} res 
 */
export async function login (req, res) {
    try{
        
        const user = await userModel.getUserByCredentials(req.body);

        if (!user) {
            return res.status(404).json({
                message: "User Not Found"
            })
        }

        const token = await userModel.createAuthToken(user);

        // user = await userModel.getUserData(user._id);

        res.status(200).json({
            user,
            token
        });
    }catch (err) {
        
        res.status(500).json(err);
    }
}
