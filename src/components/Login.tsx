import { Link } from 'react-router-dom';
import Title from './Title';
import LightBlueBtn from './LightBlueBtn';
import backgroundImage from '../assets/background2.png'

const Login = () => {
  return (
    <div className="w-full h-screen flex justify-center items-center flex-col m-0 p-0" style={{
       background: `linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) center/cover no-repeat`
    }}>
      <Title>تسجيل الدخول</Title>
      <form className="rounded-md bg-[#edf7f8] shadow-[0px_0px_12px_#aaa,-0px_-0px_12px_#ada6a6] w-[500px] p-[15px_25px_20px_25px] flex flex-col gap-2 mb-7">
        <label htmlFor="email">البريد الإلكتروني:</label>
        <input id="email" name="email" />

        <label htmlFor="password">كلمة المرور:</label>
        <input id="password" name="password" type="password" />

        <div className="flex justify-around items-center">
          <LightBlueBtn>تسجيل</LightBlueBtn>
          <Link to="/register" className="text-[15px]">
            أو قم بتسجيل حساب جديد
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
