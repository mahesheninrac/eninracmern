import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const StudentContext = createContext();

export const useStudentData = () => {
  return useContext(StudentContext);
};

export const StudentProvider = ({ children }) => {
  const [students, setStudents] = useState([]);

  const fetchStudentData = async () => {
    const response = await axios.get("http://localhost:5000/api/users");
    if (response.status === 200) {
      setStudents(response);
    }else{
      console.log(response);
    }
    
  };

  const deleteStudentData = (id) => {
    const users = students.filter((student) => student.id !== id);
    setStudents(users);
  };

  useEffect(() => {
    fetchStudentData();
  }, []);

  return (
    <StudentContext.Provider value={{ students, deleteStudentData }}>
      {children}
    </StudentContext.Provider>
  );
};
