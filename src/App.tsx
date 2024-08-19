import { useEffect } from 'react';
import './App.css';
import Home from './components/Home';
import Register from './components/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import SearchStudent from './components/SearchStudent';
import Students from './components/Students';
import Memorization from './components/Memorization';
import MemoProgram from './components/MemoProgram';
import Revision from './components/Revision';
import Exams from './components/Exams';
import StudentInfo from './components/StudentInfo';
import StudentProfile from './components/StudentProfile';
import Quran from './components/Quran';
import './index.css';
import Layout from './components/Layout';
function App() {
  useEffect(() => {
    document.documentElement.lang = 'ar';
    document.documentElement.dir = 'rtl';
  }, []);

  const teacherNavigation = [
    { name: 'الطلبة', href: '/organization/students' },
    { name: 'الحفظ', href: '/organization/memorization' },
    { name: 'المراجعة', href: '/organization/revision' },
    { name: 'الإمتحانات', href: '/organization/exams' },
  ];
  const studentNavigation = [
    { name: 'القرآن', href: '/student/quran' },
    { name: 'الحفظ', href: '/student/memorizationS' },
    { name: 'المراجعة', href: '/student/revisionS' },
    { name: 'الإمتحانات', href: '/student/examsS' },
  ];
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/organization" element={<Layout navigation={teacherNavigation}/>}>
          
          <Route
          path="memorization"
          element={<Memorization />}
          
        />
        <Route
          path="revision"
          element={<Revision />}
        />
        <Route
          path="exams"
          element={<Exams />}
        />
         <Route
          path="students"
          element={<Students />}
        />

          <Route
          path="memo-program/:id"
          element={<MemoProgram />}
        />
        <Route
          path="student-info/:fullname/:email"
          element={<StudentInfo />}
        />
      
        <Route
          path="search-student"
          element={<SearchStudent />}
        />
          
        </Route>


        <Route path="/student" element={<Layout navigation={studentNavigation}/>}>
        <Route
          path="quran"
          element={<Quran />}
        />
        <Route
          path="profile"
          element={<StudentProfile />}
        />
        </Route>
        
   
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
