import express from "express";

import { addStudents,getAllStudents,getStudent,editStudent,deleteStudent,searchStudent} from "../controller/controller.js";

const routes = express.Router();

routes.post('/addStudents',addStudents);

routes.get('/getAllStudents',getAllStudents);


routes.get('/getStudent/:id',getStudent);

routes.put('/editStudent/:id',editStudent);

routes.delete('/deleteStudent/:id', deleteStudent);

routes.get('/searchStudent/:id',searchStudent);


export default routes;