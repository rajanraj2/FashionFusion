import express from 'express';
import * as user from '../controllers/userController.js';
import * as auth from  '../middlewares/auth.js';

const router = express.Router();

router.route('/create-account')
    .post(user.createAccount);

router.route('/activate-user')
    .post(user.activateUser);

router.route( '/login' )
    .post(user.login);

router.route('/getuser')
    .get(auth.isAuthenticated, user.loadUser)



export default router;