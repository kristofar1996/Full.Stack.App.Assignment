const express = require('express') //imports express package
const app = express()//initilise a variable referensing express
const mongoose = require("mongoose");
const userLoginControllers = require("./Controllers/userLogin")
//conection to my database 
mongoose.connect("mongodb+srv://kristofar:Kristofar@cluster0.ydwoeix.mongodb.net/?retryWrites=true&w=majority").
    then(() => console.log("Connection succsessful")).
    catch(err => console.log(err))

    //sset views and access
app.set("view engine", "ejs")
app.set("views", "views")
app.use(express.static('public'))
app.use(express.urlencoded({extended: false}))//give us accsess to recieve from html in ajs

const expressSession = require('express-session');

app.use(expressSession({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true
  }))

global.loggedIn = null;
app.use("*", (req, res, next) => {
    //console.log(req.session)
    loggedIn = req.session.userId;
   // userType = req.session.userType;
    next()
  });
//  app.use("*", (req, res, next) => {
//    //console.log(req.session)
///    userType = req.session.userType;
   
 //   next()
// });

//boking request
const bookingController = require('./Controllers/booking')
app.get('/booking', bookingController)



//mongoose.createConnection("");


//user Register process
const newUserController = require('./Controllers/newUser')
app.get('/auth/Register', newUserController) 
//post request
const storeUserController = require('./Controllers/storeUser')
app.post('/users/Register', storeUserController)


// user log in process
const loginController = require('./Controllers/login')
app.get('/auth/login', loginController);

//post request
app.post('/users/loginpage',userLoginControllers)



//})


//rendering home page
app.get("/home", (req, res )=> {
    
    res.render("home")

})

app.get("/", (req, res )=> {
    
    res.render("home")

})

///rendering 
app.get("/Register", (req, res )=> {

    res.render("Register")

})

 
app.get("/loginpage", (req, res )=> {
    res.render("loginpage")
})

app.get("/book", (req, res )=> {
    res.render("book")
})


let port = process.env.PORT;
if (port == null || port == "") {
  port = 301;
}
app.listen(port, ()=>{
  console.log('Server Started')
})

// to start the main page npm start port im using is 301
// to start the server cd and the directory and npm start
//to start all pages we need to change just home with the name of the page, or navigate from the navigation bar on the top
///heroku link https://newappqho.herokuapp.com/home
//github link  https://github.com/kristofar1996/Full.Stack.App.Assignment.git