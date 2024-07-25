import express from 'express';
import mongoose from "mongoose";
import { eventRoutes } from './routes/eventRoutes.js';
import { authRoutes } from './routes/authRoutes.js';

import passport from 'passport';
import {Strategy as GoogleStrategy} from 'passport-google-oauth';
import session from 'express-session';
import { addUser, getUserByStringID } from './controllers/authController.js';

const app = express()
const uri = "mongodb+srv://thadmegchelsen:4KzDyrGqtYbAll35@cluster0.xafcuv1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: `${process.env.APPURL}/auth/google/callback`
        },
        async (accessToken, refreshToken, profile, done) =>{
           if(await getUserByStringID(profile.id)){
                console.log("User already exists in DB")
           } else{
                console.log("Adding User to Database")
                addUser(profile)
           }
           return done(null, profile)
        }
    )
)

passport.serializeUser((user, done) =>{
    done(null, user);
});

passport.deserializeUser((user, done) =>{
    done(null, user);
});

app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: true,
        saveUninitialized: true,
        cookie: {maxAge:1000*60*60*48}
    })
)

app.use(passport.initialize());
app.use(passport.session());
app.use(express.json())

const port = process.env.PORT || 4000

app.use('/api/events', eventRoutes)
app.use('/api/auth', authRoutes )

app.get('/auth/google',passport.authenticate('google',{scope:['profile']}));

app.get(
    '/auth/google/callback',
    passport.authenticate('google',{failureRedirect:'/'}),
    (req, res) =>{
        res.redirect('/rings')
    }
)

app.get('/logout',(req,res)=>{
    req.logout();
    req.session.destroy((err)=>{
        if (err){
            console.error(err);
            return res.status(500).send('Internal Server Error')
        }
        res.clearCookie('connect.sid')
        res.redirect('/')
    })
});

mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to DB yo");
        app.listen(port,'localhost',()=>console.log("Listening on port 4000"))
    })
    .catch((err)=>console.log(err));



