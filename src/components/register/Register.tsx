import { useState } from "react";
import { Link } from "react-router-dom";
import './Register.css'

const Register = () => {
    const [selectedOption, setSelectedOption] = useState('organization');

    const handleOptionChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setSelectedOption(e.target.value);
    };

    return(
        
            <div className="signup-form">
            <h2 className="title">تسجيل الإشتراك</h2>
            <div className="options">
            
               <label htmlFor="organization"> جمعية  
                <input type="radio" id="organization" name="option" value="organization" checked={selectedOption === 'organization'}
                            onChange={handleOptionChange} />
                </label>
                <label htmlFor="individual"> فرد  
                <input type="radio" id="individual" name="option" value="individual" checked={selectedOption === 'individual'}
                            onChange={handleOptionChange} />
                </label>
               
            </div>
            {selectedOption === 'organization' && (
                    <form>
                        <label htmlFor="name">إسم الجمعية:</label>
                        <input id="name" name="name" />
                        <label htmlFor="email">البريد الإلكتروني:</label>
                        <input id="email" name="email" />
                        <label htmlFor="address">العنوان:</label>
                        <input id="address" name="address" />
                        <label htmlFor="phoneNumber">رقم الهاتف:</label>
                        <input id="phoneNumber" name="phoneNumber" />
                        <label htmlFor="responsible">إسم المشرف على الجمعية:</label>
                        <input id="responsible" name="responsible" />
                        <label htmlFor="password">كلمة المرور:</label>
                        <input id="password" name="password" type="password" />
                        <label htmlFor="confirmpwd">تأكيد كلمة المرور:</label>
                        <input id="confirmpwd" name="confirmpwd" type="password" />
                        <div className="form-bottom">
                        <button className="submit-btn">تسجيل</button>
                        <Link to="/login">لديك حساب؟ قم بتسجيل الدخول</Link>
                        </div>
                    </form>
                )}
                {selectedOption === 'individual' && (
                    <form>
                        <label htmlFor="firstName">الإسم :</label>
                        <input id="firstName" name="firstName" />
                        <label htmlFor="lastName"> اللَقب:</label>
                        <input id="lastName" name="lastName" />
                        <label htmlFor="email">البريد الإلكتروني:</label>
                        <input id="email" name="email" />
                        <label htmlFor="phoneNumber">رقم الهاتف:</label>
                        <input id="phoneNumber" name="phoneNumber" />
                        <label htmlFor="organization">إسم الجمعية:</label>
                        <input id="organization" name="organization" />
                        <div className="types">
                        <label htmlFor="student">
                            طالب
                            <input
                                type="radio"
                                id="student"
                                name="type"
                                value="student"
                            />
                        </label>
                        <label htmlFor="chikh">
                            شيخ
                            <input
                                type="radio"
                                id="chikh"
                                name="type"
                                value="chikh"
                            />
                        </label>
                        </div>
                        <label htmlFor="password">كلمة المرور:</label>
                        <input id="password" name="password" type="password" />
                        <label htmlFor="confirmpwd">تأكيد كلمة المرور:</label>
                        <input id="confirmpwd" name="confirmpwd" type="password" />
                        <div className="form-bottom">
                        <button className="submit-btn">تسجيل</button>
                        <Link to="/login" className="link">لديك حساب؟ قم بتسجيل الدخول</Link>
                        </div>
                    </form>
                )}
           
           
        
       
        </div>
        
        
    )
}
export default Register;