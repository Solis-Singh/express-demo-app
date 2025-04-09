import User from '../models/userModel.js'

export const addNewUser = async(req , res) => {
    const user = new User(req.body);
    console.log(req.body);
    await user.save();

    res.send(user);
}
