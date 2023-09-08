import axios from "axios";

const URL = "http://localhost:9000";

export const addStudents = async (student) => {
  try {
    await axios.post(`${URL}/addStudents`, student);
    console.log("Students added successfully");
  } catch (error) {
    console.log("Error while calling addStudents api ", error);
  }
};

export const getAllStudents = async () => {
  try {
    return axios.get(`${URL}/getAllStudents`);
  } catch (error) {
    console.log("Error while calling getAllStudents api ", error);
  }
};

export const getStudent = async (id) => {
  try {
    return await axios.get(`${URL}/getStudent/${id}`);
  } catch (error) {
    console.log("Error while getting student info ", error);
  }
};

export const editStudent = async (id, studentData) => {
  try {
    return await axios.put(`${URL}/editStudent/${id}`, studentData);
  } catch (error) {
    console.log("error while edit student ", error);
  }
};

export const deleteStudent = async (id) => {
  try {
    return await axios.delete(`${URL}/deleteStudent/${id}`);
  } catch (error) {
    console.log("Error while deleting ", error);
  }
};

export const searchStudent = async (rollNumber) => {
  try {
    return await axios.get(`${URL}/searchStudent/${rollNumber}`);
  } catch (error) {
    console.log("Error while searching student");
  }
};
