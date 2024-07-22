import { Link, useParams } from "react-router-dom";
import Navbar from "../navbar/Navbar";
import SearchBar from "../SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";



const MemoProgram = () => {
    const { id } = useParams();
  return (
    <div>
        <Navbar />
        <div className="main-section">
        <div style={{alignSelf:"center"}}>
        <h1>برنامج الحفظ رقم {id}</h1>
        <SearchBar />
        </div>
        <table className="students-list">
            <tr>
                <th>الطالب</th> 
                <th>التاريخ </th>
                <th> رأس الوقف</th>
                <th> التكرار</th>
                <th> العرض</th>
                <th> الملاحظة</th>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">جميلة</Link></td>
                <td>2024-07-22</td>
                <td>سورة يوسف - الآية 37 </td>
                <td>10</td>
                <td>لا</td>
                <td><FontAwesomeIcon style={{color:"red"}} icon={faCircleXmark} /></td>
            </tr>
            <tr>
                <td><Link className="student-name" to="/studentProfile">مريم</Link></td>
                <td>2024-07-22</td>
                <td>سورة يوسف - الآية 20 </td>
                <td>10</td>
                <td>نعم</td>
                <td><FontAwesomeIcon style={{color:"green"}} icon={faCircleCheck} /></td>
            </tr>
            
            </table>

    </div>
    </div>
    
  )
}

export default MemoProgram