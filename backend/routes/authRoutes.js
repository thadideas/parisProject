import express from 'express'

const router = express.Router()

router.get('/login', function(req, res, next){
    res.render('login');

})

export {router as authRoutes}