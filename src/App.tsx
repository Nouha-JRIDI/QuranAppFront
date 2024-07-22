
import { useEffect } from 'react';
import './App.css';
import Home from './components/home/Home';
import Register from './components/register/Register';
import { BrowserRouter, Routes, Route  } from "react-router-dom";
import Login from './components/login/Login';
import SearchStudent from './components/searchStudent/SearchStudent';
import Students from './components/students/Students';
import Memorization from './components/memorization/Memorization';
import StudentProfile from './components/studentProfile/StudentProfile';
import MemoProgram from './components/MemoProgram.css/MemoProgram';
import Revision from './components/revision/Revision';
import Exams from './components/exams/Exams';

function App() {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);
  return (
    
      <BrowserRouter>
      <Routes>
              <Route path="/memoProgram/:id" element={<MemoProgram />} />
              <Route path="/studentProfile" element={<StudentProfile />} />
              <Route path="/revision" element={<Revision />} />
              <Route path="/exams" element={<Exams />} />
              <Route path="/memorization" element={<Memorization />} />
              <Route path="/students" element={<Students />} />
              <Route path="/searchStudent" element={<SearchStudent />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
            </Routes>
      </BrowserRouter>
      
    
  );
}

export default App;
