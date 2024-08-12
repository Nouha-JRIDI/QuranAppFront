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
    { name: 'الطلبة', href: '/students' },
    { name: 'الحفظ', href: '/memorization' },
    { name: 'المراجعة', href: '/revision' },
    { name: 'الإمتحانات', href: '/exams' },
  ];
  const studentNavigation = [
    { name: 'القرآن', href: '/quran' },
    { name: 'الحفظ', href: '/memorizationS' },
    { name: 'المراجعة', href: '/revisionS' },
    { name: 'الإمتحانات', href: '/examsS' },
  ];
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/organization" element={<Layout navigation={teacherNavigation}/>}>
          
          <Route
          path="/organization/memorization"
          element={<Memorization />}
          
        />
        <Route
          path="/organization/revision"
          element={<Revision />}
        />
        <Route
          path="/organization/exams"
          element={<Exams />}
        />
         <Route
          path="/organization/students"
          element={<Students />}
        />
          
        </Route>
        <Route
          path="/quran"
          element={<Quran navigation={studentNavigation} />}
        />
        <Route
          path="/student-profile"
          element={<StudentProfile />}
        />
        <Route
          path="/memo-program/:id"
          element={<MemoProgram navigation={teacherNavigation} />}
        />
        <Route
          path="/student-info/:fullname/:email"
          element={<StudentInfo navigation={teacherNavigation} />}
        />
      
        <Route
          path="/search-student"
          element={<SearchStudent navigation={teacherNavigation} />}
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
