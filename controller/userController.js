import User from '../models/userModel.js'


     //Post Method   ( adding a new user to the database )
export const addNewUser = async(req , res) => {
    const user = new User(req.body);
    console.log(req.body);
    await user.save();

    res.send(user);
}

        //Get Method  ( Getting user in database )
export const getUser = async(req , res) => {    
    const data = await User.find();
    res.send(data);
}

export const getUserById = async(req , res) => {
    const id = req.params._id;
    const data = await User.find({_id : id});
    res.status(200).send(data);
}

    // Put Method ( Updating User in Database)
    export const updateUser = async(req, res) => {
        try{
            let userData = await User.findByIdAndUpdate(req.params._id, req.body,{new :true});
            console.log(userData);
            res.send(userData);
        }catch (err){
            res.send(err);
        }
        
    };
    

        //Delete Method (Deleting User from database)
    export const deleteUserById = async (req,res) => {
        try {
            let userData = await User.findByIdAndDelete(req.params._id,{new : true});
            console.log("Gettting Data : ", userData);

        res.send(userData)
        } catch {
            res.send(err);
        }
        
    };    
            