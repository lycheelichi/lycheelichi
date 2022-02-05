const express = require("express");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const connectDB = require("./config/db");

const colors = require("color");
const path = require("path");
const fileUpload = require("express-fileupload");
const morgan = require("morgan");
const session = require("express-session");

const mongoSanitize = require("express-mongo-sanitize");
const helmet = require('helmet');
const xss = require("xss-clean");
const rateLimit = require("express-rate-limit");
const hpp = require("hpp");
const errorHandler = require("./middleware/error");

dotenv.config({path:"./config/config.env"});

app = express();

// connectDB();

const PORT = process.env.PORT || 3000;
// console.log(process.env.NODE_ENV);


app.use(express.urlencoded({extended:true}));

app.use('/portfolio',express.static('views/pages/frontend-projects'));
app.use('/', express.static('public'));

app.set("view engine","ejs");

app.set("views",path.join(__dirname,"views"));

// app.use(session({
//     secret: process.env.SESSION_SECRET,
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: true }
// }))


app.use(express.json());
//cookie parser
app.use(cookieParser());
//File Upload
app.use(fileUpload());
app.use(express.static(path.join(__dirname,'public')))

// security setup ----------------------------------------------------------
//add mongo data sanitizer 
app.use(mongoSanitize());
// add helmet middleware 
app.use(helmet());
// add cross-site scripting protection
app.use(xss());

// http parameter pollution attack
app.use(hpp());

//rate limit
app.enable('trust proxy');

const limiter = rateLimit({
    windowMs: 15*60*1000,
    max:10000
})

app.use(limiter);
app.use('/',limiter);

// security setup end
//----------------------------------------------------------
// Dev loggin middleware
if(process.env.NODE_ENV ==='development'){
    app.use(morgan('dev'))
}

// home route
const homeRoutes = require("./routes/homeRoutes")
app.use('/',homeRoutes);

// portfolio route

const portfolioRoutes = require("./routes/portfolioRoutes")
app.use('/portfolio',portfolioRoutes);

// user register/ login routes
const authRoutes = require("./routes/authRoutes");
app.use('/auth',authRoutes); 


// so error message gets modified properly
app.use(errorHandler);

//404 page not found (default)
app.use((req,res)=>{
    res.status(404).send('404, Page not found!')
})

const server = app.listen(PORT,()=>{
    console.log(`Server is awake at ${process.env.NODE_ENV} MODE ON PORT ${PORT}`);
})

process.on("unhandledRejection",(err,promise)=>{
    console.log(`Error: ${err.message}`);
    server.close(()=>{
        process.exit(1);
    })
})