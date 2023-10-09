
import "../style/studentList.css";
const list = [
  { id: 1, name: "Ritesh" },
  { id: 2, name: "vikash" },
  { id: 3, name: "sumit" },
  { id: 4, name: "baba" },
];

function StudentList() {
  return (
    <div>
      {list.map((student) => (
        <div key={student.id} className="List-item-container">
          <p>ID: {student.id}</p>
          <p>Name: {student.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
