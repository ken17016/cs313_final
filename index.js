/* Constants */
const { createServer } = require("http");
const express = require("express");
const path = require("path");
const cors = require("cors");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const normalizePort = port => parseInt(port, 10);
const session = require("express-session");
const PORT = normalizePort(process.env.PORT || 5000);
const app = express();

/** Routes */
const createContact = require("./routes/contactinfo.js");
const contactUs = require("./routes/contactUs.js");
const contactDashboard = require("./routes/contactDashboard.js");

app.use(cors());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

// app.use(pino);
app.use(morgan("dev"));

// parse application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Sessions
app.use(
    session({
        secret: "keyboard cat",
        resave: false,
        saveUninitialized: true,
        //cookie: { secure: true }
        cookie: { maxAge: 6000000 }
    })
);

if (true) {
    // Serve any static files
    app.use(express.static(path.resolve(__dirname, "client/build")));
    app.get("/test", (req, res) => {
        res.send({ success: true });
        console.log("req: ", req.body.email);
    });
}

// Router connections.
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");
app.use("/api/createContact", cors(), createContact);
//app.get('/contact', (req, res) => res.render('pages/contactUs'));
app.use("/contact", cors(), contactUs);
app.use("/contact_dashboard", contactDashboard);

const server = createServer(app);

server.on("listening", (req, res) => {
    res.end("test");
});

app.listen(PORT, err => {
    if (err) {
        throw err;
    }
});
