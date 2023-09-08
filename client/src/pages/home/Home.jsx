import React, { useState } from "react";
import "./style.css";
import { useFormik } from "formik";
import InputField from "../../components/inputField/InputField";
import { validateStudent } from "../../utils/formValidation";
import { addStudents } from "../../utils/api";
import {useNavigate} from 'react-router-dom';

const Home = () => {

  const navigate = useNavigate();

  const studentInitialData = {
    fullName: "",
    rollNumber: "",
    courseName: "",
    mobileNumber: "",
    email: "",
  };

  const [students, setStudents] = useState([]);

  const { values, handleBlur, handleChange, handleSubmit, errors, touched, resetForm } =
    useFormik({
      initialValues: studentInitialData,
      validationSchema: validateStudent,
      onSubmit: (values) => {
        setStudents([...students,values]);
        resetForm();
        alert("Student Added Successfully");
      },
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

  const submitForm = async()=>{
    if(students.length==0){
      alert("Please Add Students");
      return;
    }
    students.map((student)=>{
      addStudents(student);
     })
     setStudents([]);
     navigate('/students');
  }

  return (
    <>
      <h1>Welcome to Agami Student Management Portal</h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <h3>Add Student Details</h3>
        {inputs.map((input) => {
          return (
            <InputField
              key={input.id}
              {...input}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[input.name]}
              error={errors[input.name]}
              isTouched={touched[input.name]}
            />
          );
        })}
        <button type="submit" className="btn">
          Add Student
        </button>
        <button type="button" className="btn" onClick={submitForm}>Submit Form</button>
      </form>
    </>
  );
};

export default Home;
