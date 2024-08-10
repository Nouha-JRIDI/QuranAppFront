import { useState } from 'react';
import { Link } from 'react-router-dom';
import Title from './Title';
import LightBlueBtn from './LightBlueBtn';
import backgroundImage from '../assets/background2.png'

const Register = () => {
  const [selectedOption, setSelectedOption] = useState('organization');

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  return (
    <div className="w-full flex justify-center items-center flex-col m-0 p-0" style={{
      background: `linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) center/cover no-repeat`
    }}>
      <Title>تسجيل الإشتراك</Title>
      <div className="flex gap-2.5 mb-2.5">
        <label htmlFor="organization">
          {' '}
          جمعية
          <input
            type="radio"
            id="organization"
            name="option"
            value="organization"
            checked={selectedOption === 'organization'}
            onChange={handleOptionChange}
          />
        </label>
        <label htmlFor="individual">
          {' '}
          فرد
          <input
            type="radio"
            id="individual"
            name="option"
            value="individual"
            checked={selectedOption === 'individual'}
            onChange={handleOptionChange}
          />
        </label>
      </div>
      {selectedOption === 'organization' && (
        <form className="rounded-md bg-[#edf7f8] shadow-[0px_0px_12px_#aaa,-0px_-0px_12px_#fff] w-[500px] p-[15px_25px_20px_25px] flex flex-col gap-2 mb-7">
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
          <div className="flex justify-around items-center">
            <LightBlueBtn>تسجيل</LightBlueBtn>
            <Link to="/login">لديك حساب؟ قم بتسجيل الدخول</Link>
          </div>
        </form>
      )}
      {selectedOption === 'individual' && (
        <form className="rounded-md bg-[#edf7f8] shadow-[0px_0px_12px_#aaa,-0px_-0px_12px_#fff] w-[500px] p-[15px_25px_20px_25px] flex flex-col gap-2 mb-7">
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
          <div className="flex gap-5">
            <label htmlFor="student">
              طالب
              <input type="radio" id="student" name="type" value="student" />
            </label>
            <label htmlFor="chikh">
              شيخ
              <input type="radio" id="chikh" name="type" value="chikh" />
            </label>
          </div>
          <label htmlFor="password">كلمة المرور:</label>
          <input id="password" name="password" type="password" />
          <label htmlFor="confirmpwd">تأكيد كلمة المرور:</label>
          <input id="confirmpwd" name="confirmpwd" type="password" />
          <div className="flex justify-around items-center">
            <LightBlueBtn>تسجيل</LightBlueBtn>
            <Link to="/login" className="text-[15px]">
              لديك حساب؟ قم بتسجيل الدخول
            </Link>
          </div>
        </form>
      )}
    </div>
  );
};
export default Register;
