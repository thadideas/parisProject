import "dotenv/config";
import express from 'express';
import mongoose from "mongoose";
import { eventRoutes } from './routes/eventRoutes.js';
import { authRoutes } from './routes/authRoutes.js';
import passport from "passport";
import {Strategy as GoogleStrategy} from 'passport-google-oauth20';
import session from 'express-session';

const app = express();
const uri = process.env.DB_URI;
const port = process.env.PORT || 4000

app.use(express.json())


passport.use(
    new GoogleStrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callBackURL: "http://localhost:4000/auth/google/callback",
            passReqToCallback: true,
        },
        async (request, accessToken, refreshToken, profile, done) => {

            return done(null, profile)
        }
    )
);

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

app.use('/api/events', eventRoutes)
app.use('/api/auth', authRoutes )

app.get('/auth/google', passport.authenticate('google',{scope:['email']}));

app.get(
    '/auth/google/callback',
    passport.authenticate('google',{failureRedirect:'/'}),
    (req, res) =>{
        if(!req.user){
            res.status(400).json({error: "Auth Failed"})
        }
        res.status(200).json(req.user)
        res.redirect('/rings')
    }
)

app.get('/logout',(req,res)=>{
    req.logout();
    req.session.destroy((err)=>{
        if (err){
            console.error(err);
            return res.status(500).send('Internal Server Error');
        }
        res.clearCookie('connect.sid');
        res.redirect('/');
    })
});

mongoose.connect(uri)
    .then(()=>{
        console.log("Connected to DB yo");
        app.listen(port,'localhost',()=>console.log("Listening on port 4000"))
    })
    .catch((err)=>console.log(err));



