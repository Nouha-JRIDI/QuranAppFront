
import avatar from '../../assets/avatar.jpg'
import Navbar from '../navbar/Navbar';
import './StudentProfile.css'



const StudentProfile = () => {
  
  return (
    <div>
      <Navbar />
      <div className='main-section'>
      <div className="profile-header">
            <img className="avatar-img" src={avatar} />
            <div>
                <h2 className="student-name">مريم بن سالم</h2>
                <h3>meryem@gmail.com</h3>
                
            </div>

        </div>
        <div>
          <div className='student-info'>
            <h2>الحفظ</h2>
            <h2>المراجعة</h2>
            <h2>العلامات</h2>

          </div>
          <div className='student-progress'>

          </div>
        </div>
      
        
    </div>
    </div>
  );
};

export default StudentProfile;
