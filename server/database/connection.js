import mongoose from "mongoose";

const Connection = async()=>{

    const URI =
      "mongodb+srv://rahuldhaka:rahul99919@agamistudentmanagement.r7l7uby.mongodb.net/?retryWrites=true&w=majority";

    try {
        await mongoose.connect(URI);
        console.log("Connected to Database Successfully");
    } catch (error) {
        console.log("Error while connecting with Database ",error)
    }
}

export default Connection;