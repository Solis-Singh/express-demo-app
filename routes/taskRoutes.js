import express from 'express'
import { getUser,getUserById,postUser,putUser,deleteUser } from '../Logic/userLogic.js';
const router = express.Router()

router.get("/user", getUser );


        //get method
router.get("/user/:id", getUserById);

        //post method (create a new user)

router.post("/user", postUser);

    //put method (update user)

router.put("/user/:id", putUser);

    //delete method ( deleting user from array)
router.delete("/user/:id/delete", deleteUser);


export default router;