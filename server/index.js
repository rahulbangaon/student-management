import express from 'express';
import Connection from './database/connection.js';
import routes from './routes/routes.js';
import cors from 'cors';
import bodyParser from 'body-parser';


const app = express();
Connection();
app.use(cors());

app.use(bodyParser.json({extended: true}));
app.use(bodyParser.urlencoded({extended: true}));

app.use('/',routes);












const PORT=9000;

app.listen(PORT,()=>{
    console.log("Server running Succesfully on Port ", PORT);
})