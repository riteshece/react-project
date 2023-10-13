import "../style/studentList.css";
import  { useState } from "react";
const list = [
  { id: 1, name:"Ritesh" },
  { id: 2, name:"Vikash" },
  { id: 3, name:"Sumit" },
  { id: 4, name:"Babaa" },
];

function StudentList() {
  let [sList, setSList] = useState(list);
  function deleteItem(index ){
    let temp=[...sList]
    temp.splice(index,1)
    setSList(temp)
    // console.log("calling function",sList)

  }

  function updateItem(index,value){
    const temp=[...sList]
    temp[index]["name"]=value 
    setSList(temp)

  }
  return (
    <div>
      {sList.map((student, idx) => {
        console.log(idx)
        return <ListItem index={idx} key={idx} student={student}deleteItem={deleteItem}/>;
      })}
    </div>
  );
}

function ListItem({ index, student,deleteItem }) {
  return (
    <div className="List-item-container">
      <p className="student-id">{student.id}</p>
      <p className="name">{student.name}</p>
      <button onClick={()=>deleteItem(index)}>Delete</button>
      <button onClick={()=>updateItem(index)}>Update</button>
    </div>
  );
}

export default StudentList;
