const express = require('express');
const cors = require('cors');
const router = require('./Routes/routes');
const Connectdatabase = require('./Configs/db');
const passport = require('passport');
const passportSetUp = require('./Configs/passport');
const session = require('express-session');
const app = express();
app.use(express.json());
app.use(cors());
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: true }
  }))
app.use(passport.initialize());
app.use(passport.session());

app.use('/', router);
app.listen(3030,()=>{
    console.log('server connected to port 3030');
    Connectdatabase().then(console.log('database connected')).catch(err=>console.log(err));
})