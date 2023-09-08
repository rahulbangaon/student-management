import React, { useEffect, useState } from 'react'
import './style.css';
import InputField from '../../components/inputField/InputField';
import { useFormik } from 'formik';
import {useParams} from "react-router-dom";
import {validateStudent} from "../../utils/formValidation";
import { getStudent } from '../../utils/api';
import {useNavigate} from "react-router-dom";
import { editStudent } from '../../utils/api';

const EditStudent = () => {

    const params = useParams();
    const navigate = useNavigate();


        const [student, setStudent] = useState({
          fullName: "",
          rollNumber: "",
          courseName: "",
          mobileNumber: "",
          email: "",
        });





     const inputs = [
       {
         id: 0,
         name: "fullName",
         type: "text",
         placeholder: "Please Enter Your Full Name:",
         value: "",
         label: "Full Name",
       },
       {
         id: 1,
         name: "rollNumber",
         type: "number",
         placeholder: "Please Enter Your Full Name",
         value: "",
         label: "Roll Number",
       },
       {
         id: 2,
         name: "courseName",
         type: "text",
         placeholder: "Please Enter Your Course Name",
         value: "",
         label: "Course Name",
       },
       {
         id: 3,
         name: "mobileNumber",
         type: "number",
         placeholder: "Please Enter Your Mobile Number",
         value: "",
         label: "Mobile Number",
       },
       {
         id: 4,
         name: "email",
         type: "email",
         placeholder: "Please Enter Your Email",
         value: "",
         label: "Email",
       },
     ];

     const getData = async()=>{
            const data = await getStudent(params.id)
            setStudent(data.data[0]);
     }

     useEffect(()=>{
            getData();
     },[])


     const handleSubmit = async()=>{
        try {
            await editStudent(student._id,student)
            navigate('/students');
            
        } catch (error) {
            console.log("Error while updating");
        }
     }

    const handleChange = (e)=>{
        const {name,value} = e.target;
        setStudent({...student, [name]: value})

    }


  return (
    <>
      <h1>Welcome to Agami Student Management Portal</h1>
      <form className="form-container">
        <h3>Add Student Details</h3>
        {inputs.map((input) => {
          return (
            <InputField
              key={input.id}
              {...input}
              onChange={handleChange}
              value={student[input.name]}
            />
          );
        })}
      </form>
      <button onClick={handleSubmit} className="btn">
        Update Details
      </button>
    </>
  );
}

export default EditStudent;