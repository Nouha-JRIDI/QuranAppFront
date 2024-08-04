import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../navbar/Navbar"
import SearchBar from "../SearchBar"
import './Students.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"


const students=[{id:1,fullname:"جميلة عامري",email:"jamilaamri@gmail.com",memoQuantity:"3 صفحات",disciplineMark:"+++"},
    {id:2,fullname:"مريم بن سالم",email:"meriembensalem@gmail.com",memoQuantity:"2 أجزاء",disciplineMark:"++"},
    {id:3,fullname:"أحمد السريدي",email:"ahmedsridi@gmail.com",memoQuantity:"5 صفحات",disciplineMark:"++"},
    {id:4,fullname:"محسن بن قاسم",email:"mohsenbenkacem@gmail.com",memoQuantity:"3 أجزاء",disciplineMark:"+++"},
]

const Students = () => {
  return (
    <div>
        <Navbar />
        <div className="flex-sa">
            <Link to="/searchStudent" >
            <button className="white-btn">
                 <FontAwesomeIcon icon={faUserPlus} />
                 إضافة طالب

            </button></Link>
            <SearchBar />
            </div>
        <div className="main">
            <div>
            <h2>لائحة الطلبة</h2>
           
            <table className="blue-table">
            <tr>
                <th>الإسم</th> 
                <th>البريد الإلكتروني</th>
                <th>مقدار الحفظ</th>
                <th>علامة الإنظباط</th>
            </tr>
            {students.map((student) => (
                <tr key={student.id}>
                <td><Link className="student-name" to={`/studentInfo/${student.fullname}/${student.email}`}>{student.fullname}</Link></td>
                <td>{student.email}</td>
                <td>{student.memoQuantity}</td>
                <td>{student.disciplineMark}</td>
            </tr>
            ))}
           
            </table>
            </div>
            <div>

            </div>

        </div>
    </div>
  )
}

export default Students