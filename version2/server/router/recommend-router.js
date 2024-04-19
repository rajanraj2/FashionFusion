import express from 'express';
import recommendCloth from '../controllers/recommend-controller.js';

const router = express.Router();

router.route("/").post(recommendCloth);

export default router;
