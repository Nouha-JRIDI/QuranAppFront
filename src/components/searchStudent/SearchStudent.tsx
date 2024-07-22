
import './SearchStudent.css';
import Navbar from '../navbar/Navbar';
import SearchBar from '../SearchBar';

const SearchStudent = () => {
  return (
    <div>
        <Navbar />
<div className='main'>
    <div className="search-student">
        <h1>إبحث عن طالب</h1>
        <div className='searchbar-container'>
        <SearchBar />
        </div>

    </div>
    <div className="register-student">
    <h1>  أو قم بتسجيل طالب </h1>
        <div className='register-form'>
            
        <form>
        <label htmlFor="firstName">الإسم :
        <input id="firstName" name="firstName" />
        </label>
        
        <label htmlFor="lastName"> اللَقب :
        <input id="lastName" name="lastName" />
        </label>
        
        <label htmlFor="email">البريد الإلكتروني :
        <input id="email" name="email" />
        </label>
        
        <label htmlFor="phoneNumber">رقم الهاتف :
        <input id="phoneNumber" name="phoneNumber" />
        </label>
        
        
        <label htmlFor="memorization"> مقدار الحفظ :
        <input id="memorization" name="memorization"/>
        </label>
     
        
        <button className="submit-btn">تسجيل</button>
        
        </form>

        </div>

    </div>
</div>

</div>
  )
}

export default SearchStudent