import express from "express";
import cintRoutes from "./routes/cint.routes.js";
import indexRoutes from "./routes/index.routes.js";
import {PORT} from './config.js'


const app = express();

app.use(express.json())

app.use(indexRoutes);
app.use('/api', cintRoutes);

app.use((req, res, next) => {
    res.status(404).json({
        message: 'endpoint not found'
    })
})


export default app;