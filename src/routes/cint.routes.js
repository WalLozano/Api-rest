import { Router } from "express";
import { getCint, postCint } from '../controllers/cint.controllers.js'

const router = Router()

router.get('/cint', getCint);
router.post('/cint', postCint );


    export default router