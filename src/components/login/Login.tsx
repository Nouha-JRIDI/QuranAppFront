import { Link } from "react-router-dom";
import './Login.css'
const Login = () => {
    return(
        
            <div className="login-form">
            <h2 className="title">تسجيل الدخول</h2>
            <form>
        
            <label htmlFor="email">البريد الإلكتروني:</label>
            <input id="email" name="email" />
            
            <label htmlFor="password">كلمة المرور:</label>
            <input id="password" name="password" type="password" />
            
            <div className="form-bottom">
            <button className="submit-btn">تسجيل</button>
            <Link to="/register" className="link">أو قم بتسجيل حساب جديد</Link>
            </div>
            </form>
            
                    
                
           
           
        
       
        </div>
        
        
    )
}

export default Login;