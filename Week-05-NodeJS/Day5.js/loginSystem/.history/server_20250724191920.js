const express = require ('express')
const app = express();


const path = require('path')


const session = require('express-session');



app.use(express.urlencoded({ extended: true }));

app.use(session({
    secret : 'shanuSecretKey',
    resave : false,
    saveUninitialized : true
}))


app.set('view engine', 'ejs');
app.set('views',path.join(__dirname,'views'))


const USER = {username: 'admin' , password: '1234'}

app.get('/login',(req,res)=>{
    res.render('login',{error:null})
})

app.post('/login',(req,res)=>{
    const {username,password} = req.body;
    if (username === USER.username && password === USER.password){
        req.session.isAuth = true;
        res.redirect('/home')
    } else {
        res.render('login',{ error:'Invalid Credentials'})
    }
})


function isAuthenticated(req,res,next){
    if (req.session.isAuth === true){
       next();
    }   else{
        res.redirect('/login')
    }

}

app.get('/home', isAuthenticated, (req, res) => {
  res.render('home');  // Renders views/home.ejs
});


app.post('/signout', (req, res) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err);
      return res.redirect('/home');
    }
    res.redirect('/login');
  });
});



app.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
    
})