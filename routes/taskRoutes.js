import express from 'express'
// import { getUser,getUserById,postUser,putUser,deleteUser } from '../Logic/userLogic.js';
import {addNewUser ,deleteUserById,getUser, getUserById, updateUser} from '../controller/userController.js'
const router = express.Router()

router.get("/users", getUser );


//         //get method
router.get("/user/:_id", getUserById);

//         //post method (create a new user)

router.post("/user", addNewUser);

//     //put method (update user)

router.put("/user/:_id", updateUser);

//     //delete method ( deleting user from array)
router.delete("/user/:_id", deleteUserById);


export default router;