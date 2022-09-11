
const booking = (req,res) => {
    console.log(req.session)
    //loggedIn = req.session.userId;
    if(loggedIn){
        //console.log("you need to login first")
      //return  res.redirect("/book")
      res.render("book")
    }
    else {
        res.redirect("/loginpage")
    }
}
module.exports = booking;




//global.loggedIn = null;
//  global.userType = null;
//  app.use("*", (req, res, next) => {
//    //console.log(req.session)
///    userType = req.session.userType;
   
 //   next()
// });