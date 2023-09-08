import React, { useState } from 'react'
import {searchStudent} from '../../utils/api'

const Search = () => {
    const [querry,setQuerry] = useState("");
    const [student,setStudent] = useState({});

const handleChange = (e)=>{
    setQuerry(e.target.value)
}

const handleSubmit = async()=>{
   const data = await searchStudent(querry);
   setStudent(data.data[0]);
}

console.log(student);

  return (
    <>
      <h1>Please Search Here</h1>
      <form className='search-form'>
        <label>Search</label>
        <input
        className='search-bar'
          type="text"
          value={querry}
          placeholder="Search here by Roll No"
          onChange={handleChange}
        />
      </form>
      <button onClick={handleSubmit} className="btn">Search</button>

      {student && <div>
        <h3>Student Details</h3>

        <p>Name: {student.fullName}</p>
        <p>Roll Number: {student.rollNumber}</p>
        <p>Course: {student.courseName}</p>
        <p>Mobile Number: {student.mobileNumber}</p>
        <p>Email: {student.email}</p>
        </div>}



    </>
  );
}

export default Search;