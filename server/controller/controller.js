import Students from "../schema/schema.js";

export const addStudents = async(req,res)=>{
    const students = req.body;
    const studentsData = new Students(students);
    try {
        await studentsData.save();
        res.status(201).json(studentsData);
        
    } catch (error) {
        console.log("Error While adding Students");
    }

}

export const getAllStudents = async(req,res)=>{

    try {

        const students = await Students.find({});
        console.log(students);
        res.status(200).json(students);

        
    } catch (error) {
        console.log("Error while getting all students ",error)
    }

}

export const getStudent = async(req,res)=>{
    try {
        const student = await Students.find({_id: req.params.id});
        res.status(200).json(student);
    } catch (error) {
        console.log("Error in getting student ", error);
    }
}

export const editStudent = async(req,res)=>{
    try {

        const student = new Students(req.body);
        await Students.replaceOne({_id: req.params.id},student);
        res.status(201).json(student);
        
    } catch (error) {
        console.log("Error while editing student ",error)
    }
}

export const deleteStudent = async(req,res)=>{
    try {
        await Students.deleteOne({_id: req.params.id});
        res.status(201).json({message: "Student Deleted Successfully"});
    } catch (error) {
        console.log("error while deleting student ",error);
    }
}

export const searchStudent = async (req, res) => {
  try {
    const student = await Students.find({rollNumber: req.params.id });
    res.status(200).json(student);
  } catch (error) {
    console.log("Error in searching student ", error);
  }
};