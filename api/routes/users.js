import express from 'express';
import { updateUser, getUser, getUsers, deleteUser } from '../controller/user.js';
import { verifyToken } from '../utils/verifyToken.js';

const router = express.Router();

router.get("/checkauthentication", verifyToken, (req, res, next) => {
        res.send("Hey user, you are logged in.")
})

//UPDATE
router.put('/:id', updateUser);

//DELETE
router.delete('/:id', deleteUser);

//GET
router.get('/:id', getUser);

// GET ALL
router.get('/', getUsers);



export default router



