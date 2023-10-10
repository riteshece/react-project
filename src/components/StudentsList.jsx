
import "../style/studentList.css";
const list = [
  { id: 1, name: "Ritesh" },
  { id: 2, name: "Vikash" },
  { id: 3, name: "Sumit" },
  { id: 4, name: "Baba" },
];

function StudentList() {
  return (
    <div>
      {list.map((student) => (
        <div key={student.id} className="List-item-container">
          <p className="student-id"> {student.id}</p>
          <p> {student.name}</p>
        </div>
      ))}
    </div>
  );
}

export default StudentList;
