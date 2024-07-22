import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import './Home.css'
import logo from '../../assets/logo.png';
const Home = () =>{
    const navigate = useNavigate();

    return (
        <div>
        <header>
        <nav>
            <div className="nav-center">
                <div className="nav-header">
                    <img className="logo" src={logo} alt="logo" />
                    
                </div>
                <div className="links-container">
                    <ul className="links">
                        <li>
                          <a href="#home">الصفحة الرئيسية</a>
                        </li>
                        <li>
                          <a href="#quran">القرآن الكريم</a>
                        </li>
                        <li>
                          <a href="#hadith">الحديث</a>
                        </li>
                        <li>
                          <a href="#about">عن الموقع</a>
                        </li>
                      </ul>

                </div>
                <div className="signup-section">
                 <FontAwesomeIcon icon={faUser} /> 
                    <button onClick={() => {
                    
                    navigate("/login");
                  }} >تسجيل الدخول</button> 
                    <span> | </span>
                    
                    <button onClick={() => {
                    
                    navigate("/register");
                  }}>الإنضمام</button>


                </div>

            </div>

        </nav>
        <div className="banner">
            <div className="container">
                <p>يهدف تطبيق <span className="brand-name">وردي</span> إلى مساعدة مشايخنا الكرام و طلابنا الأعزاء في متابعة الحفظ و لمراجعة و تنظيم الإمتحانات. </p>
                
            </div>

        </div>
    </header>
    
    <footer className="section">
        <p>
        حقوق النشر &copy; جمعيات قرآنية
2024
. جميع الحقوق محفوظة

        </p>
    </footer>
        </div>
    )
}

export default Home;