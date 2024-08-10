import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from 'react-router-dom';
import backgroundImage from './../assets/background.png'
import Logo from './Logo';
const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="min-h-screen bg-center bg-cover bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <nav className="p-2 bg-gray-100">
          <div className="w-[95vw] max-w-[1370px] mx-auto flex items-center justify-between">
            <div className="flex items-center justify-between">
              <Logo />
            </div>
            <div>
              <ul className="list-none flex">
                <li>
                  <a className="no-underline text-[#424150] text-[1.1rem] capitalize transition-all duration-300 
             mx-4 font-bold py-1 px-2.5 hover:text-[#a8b3c0] active:text-[#50b3b3]" href="#home">الصفحة الرئيسية</a>
                </li>
                <li>
                  <a className="no-underline text-[#424150] text-[1.1rem] capitalize transition-all duration-300 
             mx-4 font-bold py-1 px-2.5 hover:text-[#a8b3c0] active:text-[#50b3b3]" href="#quran">القرآن الكريم</a>
                </li>
                <li>
                  <a className="no-underline text-[#424150] text-[1.1rem] capitalize transition-all duration-300 
             mx-4 font-bold py-1 px-2.5 hover:text-[#a8b3c0] active:text-[#50b3b3]" href="#hadith">الحديث</a>
                </li>
                <li>
                  <a className="no-underline text-[#424150] text-[1.1rem] capitalize transition-all duration-300 
             mx-4 font-bold py-1 px-2.5 hover:text-[#a8b3c0] active:text-[#50b3b3]" href="#about">عن الموقع</a>
                </li>
              </ul>
            </div>
            <div>
              <FontAwesomeIcon icon={faUser} />
              <button className="bg-transparent border-none text-lg p-2 transition-all duration-300 hover:text-[#4EACAC]"
                onClick={() => {
                  navigate('/login');
                }}
              >
                تسجيل الدخول
              </button>
              <span className="bg-transparent border-none text-lg p-2 transition-all duration-300"> | </span>

              <button className="bg-transparent border-none text-lg p-2 transition-all duration-300 hover:text-[#4EACAC]"
                onClick={() => {
                  navigate('/register');
                }}
              >
                الإنضمام
              </button>
            </div>
          </div>
        </nav>
        <div className="min-h-screen grid items-center justify-start">
          <div className="mr-10 text-center">
            <p className="text-white max-w-[35rem] text-2xl mb-5">
              يهدف تطبيق <span className="text-2xl font-extrabold text-[#50B3B3]">وردي</span> إلى مساعدة
              مشايخنا الكرام و طلابنا الأعزاء في متابعة الحفظ و لمراجعة و تنظيم
              الإمتحانات.
            </p>
          </div>
        </div>
      </header>

      <footer className="bg-[#EAEFF4] p-8">
        <p className="text-black text-center mb-0">حقوق النشر &copy; جمعيات قرآنية 2024 . جميع الحقوق محفوظة</p>
      </footer>
    </div>
  );
};

export default Home;
