const express = require('express')
const app = express();

const path = require('path')
const session = require('express-session')
app.use(express.urlencoded({extended:true}))


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))


app.post('/login',(req,res)=>{
    const {userName, password}= req.body;

    if (userName === 'admin' && password === '1234'){
        req.session.isAuth = true;
        res.redirect('/home')
    } else {
        res.render('/login', { error:'invalid credentials'})

    }
})


