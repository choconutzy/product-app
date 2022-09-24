import express, { Application } from "express"
import bodyParser from "body-parser";
import {config as dotenv} from "dotenv"
import cors from "cors"
import Routers from "./routes";
const cookieParser = require('cookie-parser');

// const passport = require('passport');
// const cookieSession = require('cookie-session');
// require('./middleware/passport')

class App {
    public app: Application;

    constructor() {
        this.app = express()
        this.plugins()
        this.routes()
    }

    protected plugins() {
        this.app.use(cookieParser())
        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({extended: true}))
        this.app.use(express.json())
        this.app.use(cors())
        dotenv()
    }

    protected routes(): void {
        this.app.use("/api/v1", Routers)
    }
}

const PORT: number = 3002;
const app = new App().app;
var server = app.listen(PORT, ()=>{
    console.log(`server listen on port ${PORT}`)
});
server.setTimeout(0)
