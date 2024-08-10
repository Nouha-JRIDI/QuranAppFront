import Navbar from "../navbar/Navbar";
import avatar from '../../assets/avatar.jpg'
import './StudentInfo.css'
import { useParams } from "react-router-dom";
import charts from '../../assets/charts.jpeg'

const StudentInfo = () => {
    const { fullname,email } = useParams();
    return(
        <div>
      <Navbar />
      <div className='main-section'>
      <div className="profile-header">
            <img className="avatar-img" src={avatar} />
            <div>
                <h2 className="student-name"> {fullname}</h2>
                <h3>{email}</h3>
                
            </div>

        </div>
        <div className='flex-sa'>
          <div className='student-info'>
            <h2>الحفظ</h2>
            <h2>المراجعة</h2>
            <h2>العلامات</h2>

          </div>
          <div className='student-progress'>
            <h2>وتيرة الحفظ</h2>
            <img className="charts" src={charts} alt="charts"/>

          </div>
        </div>
      
        
    </div>
    </div>

    );
}
export default StudentInfo