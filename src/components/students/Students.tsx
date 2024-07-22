import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import Navbar from "../navbar/Navbar"
import SearchBar from "../SearchBar"
import './Students.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"

const Students = () => {
  return (
    <div>
        <Navbar />
        <div className="main">
            <div>
            <h2>لائحة الطلبة</h2>
            <div className="flex-sa">
            <Link to="/searchStudent" >
            <button className="white-btn">
                 <FontAwesomeIcon icon={faUserPlus} />
                 إضافة طالب

            </button></Link>
            <SearchBar />
            </div>
            <table className="students-list">
            <tr>
                <th>الإسم</th> 
                <th>البريد الإلكتروني</th>
                <th>مقدار الحفظ</th>
                <th>علامة الإنظباط</th>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">جميلة</Link></td>
                <td>jamila@gmail.com</td>
                <td>3 صفحات</td>
                <td>++</td>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">مريم</Link></td> 
                <td>meriem@gmail.com</td>
                <td>2 أجزاء</td>
                <td>++</td>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">سناء</Link></td>
                <td>sana@gmail.com</td>
                <td>2 أجزاء</td>
                <td>+++</td>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">فلان</Link></td>
                <td>foulen@gmail.com</td>
                <td>2 أجزاء</td>
                <td>++</td>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">فلان</Link></td>
                <td>foulen@gmail.com</td>
                <td>2 أجزاء</td>
                <td>++</td>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">فلان</Link></td>
                <td>foulen@gmail.com</td>
                <td>2 أجزاء</td>
                <td>++</td>
            </tr>
            </table>
            </div>
            <div>

            </div>

        </div>
    </div>
  )
}

export default Students