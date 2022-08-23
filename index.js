const cookieSession = require("cookie-session");
const express = require("express");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");

const passportSetup = require("./passport");
const passport = require('passport');
const app = express();
const authRoute = require("./routes/auth");
const cors = require("cors");
const session = require('express-session');
app.use(cookieParser());
app.use(bodyParser());


// app.use(session({secret: 'my super secret'}));

app.use(cookieSession(
    {name: "session",
    keys: "lama",
    maxAge: 24*60*60*100
}))

// app.use(session({ secret: 'anything' }));
app.use(passport.initialize());
app.use(passport.session());

// app.use(
//     cors({
//     origin:"http://localhost:3001/",
//     methods:"GET,POST,PUT,DELETE",
//     credential: true,
//     })
// );

app.use("/auth", authRoute);

app.listen("5000",  ()=> {
    console.log("server is running");
})