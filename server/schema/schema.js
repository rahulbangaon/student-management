import mongoose from "mongoose";

const studentsSchema = mongoose.Schema({
    fullName: String,
    rollNumber: Number,
    courseName: String,
    mobileNumber: Number,
    email: String,
});

const Students = mongoose.model('Student',studentsSchema);

export default Students;
