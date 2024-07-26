import express from 'express'
import { placeBet } from '../controllers/gameController.js'
import auth from '../middlewares/auth.js'

const router = express.Router()

router.post('/placebet', auth, placeBet)

export {router as gameRoutes}