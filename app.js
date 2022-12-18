if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require("express");
const app = express();
const mongoose = require('mongoose');
const passport = require('passport');
const session = require('express-session')
const uri = "mongodb+srv://TOF:TOF1761@cluster0.mzkc4h3.mongodb.net/?retryWrites=true&w=majority"
async function connect() {
    try {
        await mongoose.connect(uri);
        console.log('DB Connected successfully')
    }
    catch (err) {
        console.error(err);
    }
}
connect();


require('./passport-config.js')(passport)

app.set('view engine', 'ejs');
app.use(express.json());//middleware to convert req.body m to json


app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));
app.use(session({
    secret: 'asdh',
    resave: false,
    saveUninitialized: false
}));

app.use(passport.initialize());
app.use(passport.session());



let request = require('./models/requests');



app.get('/', (req, res) => {
    res.render('index')
});



app.get('/login', (req, res) => {
    res.render('login')
});

app.post('/login', passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/',

}))

app.get('/admin', checkAuth, (req, res) => {
    res.render('admin')
})

app.get('/areqs', checkAuth, async (req, res) => {
    try {
        let result = await request.find();
        res.render('areqs', { rqs: result });

    }
    catch (err) {
        console.log(err)
        res.render('areqs', { rqs: [] })
    }
})
app.get('/farm', checkAuth, (req, res) => {
    res.render('farm')
})


function checkAuth(req, res, next) {

    if (req.isAuthenticated()) {
        return next()
    }

    res.redirect('/login')

}

app.post('/logout', function (req, res, next) {
    req.logout(function (err) {
        if (err) { return next(err); }
        res.redirect('/');
    });
});


let freq = new request(
    {

        name : "omar ayman",
        phone : "01099032198",
        animal : "190123"

    }
);
freq.save();

const adopt = require('./routes/adopt');
app.use('/adopt', adopt);

const port = process.env.PORT || 3000;
app.listen(port, console.log("LISTENING ON PORT : ", port));
