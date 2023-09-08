import React, { useEffect, useState } from "react";
import "./style.css";
import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import { GrCheckbox } from "react-icons/gr";
import { ImCheckboxChecked } from "react-icons/im";
import { Link } from "react-router-dom";
import { deleteStudent } from "../../utils/api";

const TableRow = ({del, setDel, ...props}) => {
  const handleClick = async (id) => {
    await deleteStudent(id);
    window.location.reload();
  };

  const [isSelected,setIsSelected] = useState(false);



  const handleSelect = ()=>{
    if(isSelected){
      setIsSelected(false)
    }else{
      setIsSelected(true);
      setDel([...del, props._id])
    }
  }

  return (
    <>
      <tr>
        <td>
          <span onClick={() => handleSelect()}>
            {isSelected ? <ImCheckboxChecked /> : <GrCheckbox />}
          </span>
        </td>
        <td>{props.fullName}</td>
        <td>{props.rollNumber}</td>
        <td>{props.courseName}</td>
        <td>{props.mobileNumber}</td>
        <td>{props.email}</td>
        <td>
          <div className="buttons">
            <Link to={`/editStudent/${props._id}`}>
              <span className="update-btn">
                <BiEdit />
              </span>
            </Link>
            <span onClick={() => handleClick(props._id)} className="delete-btn">
              <MdDelete />
            </span>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TableRow;
