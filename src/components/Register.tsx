import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Title from './Title';
import LightBlueBtn from './LightBlueBtn';
import backgroundImage from '../assets/background2.png';

type OrganizationFormInputs = {
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  responsible: string;
  password: string;
  confirmpwd: string;
};

type IndividualFormInputs = {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  organization: string;
  type: 'student' | 'chikh';
  password: string;
  confirmpwd: string;
};

const Register = () => {
  const [selectedOption, setSelectedOption] = useState('organization');

  const {
    register: registerOrganization,
    handleSubmit: handleSubmitOrganization,
    formState: { errors: errorsOrganization },
  } = useForm<OrganizationFormInputs>();

  const {
    register: registerIndividual,
    handleSubmit: handleSubmitIndividual,
    formState: { errors: errorsIndividual },
  } = useForm<IndividualFormInputs>();

  const handleOptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedOption(e.target.value);
  };

  const onSubmitOrganization: SubmitHandler<OrganizationFormInputs> = (data) => {
    console.log('Organization data:', data);
  };

  const onSubmitIndividual: SubmitHandler<IndividualFormInputs> = (data) => {
    console.log('Individual data:', data);
  };

  return (
    <div
      className="w-full flex justify-center items-center flex-col m-0 p-0"
      style={{
        background: `linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) center/cover no-repeat`,
      }}
    >
      <Title>تسجيل الإشتراك</Title>
      <div className="flex gap-2.5 mb-2.5">
        <label htmlFor="organization">
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
        <form
          onSubmit={handleSubmitOrganization(onSubmitOrganization)}
          className="rounded-md bg-[#edf7f8] shadow-[0px_0px_12px_#aaa,-0px_-0px_12px_#fff] w-[500px] p-[15px_25px_20px_25px] flex flex-col gap-2 mb-7"
        >
          <label htmlFor="name">إسم الجمعية:</label>
          <input
            id="name"
            {...registerOrganization('name', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.name ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.name && (
            <span className="text-red-500 text-sm">{errorsOrganization.name.message}</span>
          )}

          <label htmlFor="email">البريد الإلكتروني:</label>
          <input
            id="email"
            {...registerOrganization('email', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.email ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.email && (
            <span className="text-red-500 text-sm">{errorsOrganization.email.message}</span>
          )}

          <label htmlFor="address">العنوان:</label>
          <input
            id="address"
            {...registerOrganization('address', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.address ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.address && (
            <span className="text-red-500 text-sm">{errorsOrganization.address.message}</span>
          )}

          <label htmlFor="phoneNumber">رقم الهاتف:</label>
          <input
            id="phoneNumber"
            {...registerOrganization('phoneNumber', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.phoneNumber ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.phoneNumber && (
            <span className="text-red-500 text-sm">{errorsOrganization.phoneNumber.message}</span>
          )}

          <label htmlFor="responsible">إسم المشرف على الجمعية:</label>
          <input
            id="responsible"
            {...registerOrganization('responsible', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.responsible ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.responsible && (
            <span className="text-red-500 text-sm">{errorsOrganization.responsible.message}</span>
          )}

          <label htmlFor="password">كلمة المرور:</label>
          <input
            id="password"
            type="password"
            {...registerOrganization('password', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.password ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.password && (
            <span className="text-red-500 text-sm">{errorsOrganization.password.message}</span>
          )}

          <label htmlFor="confirmpwd">تأكيد كلمة المرور:</label>
          <input
            id="confirmpwd"
            type="password"
            {...registerOrganization('confirmpwd', { required: 'This field is required' })}
            className={`p-2 ${errorsOrganization.confirmpwd ? 'border-red-500' : ''}`}
          />
          {errorsOrganization.confirmpwd && (
            <span className="text-red-500 text-sm">{errorsOrganization.confirmpwd.message}</span>
          )}

          <div className="flex justify-around items-center">
            <LightBlueBtn>تسجيل</LightBlueBtn>
            <Link to="/login">لديك حساب؟ قم بتسجيل الدخول</Link>
          </div>
        </form>
      )}

      {selectedOption === 'individual' && (
        <form
          onSubmit={handleSubmitIndividual(onSubmitIndividual)}
          className="rounded-md bg-[#edf7f8] shadow-[0px_0px_12px_#aaa,-0px_-0px_12px_#fff] w-[500px] p-[15px_25px_20px_25px] flex flex-col gap-2 mb-7"
        >
          <label htmlFor="firstName">الإسم:</label>
          <input
            id="firstName"
            {...registerIndividual('firstName', { required: 'This field is required' })}
            className={`p-2 ${errorsIndividual.firstName ? 'border-red-500' : ''}`}
          />
          {errorsIndividual.firstName && (
            <span className="text-red-500 text-sm">{errorsIndividual.firstName.message}</span>
          )}

          <label htmlFor="lastName">اللقب:</label>
          <input
            id="lastName"
            {...registerIndividual('lastName', { required: 'This field is required' })}
            className={`p-2 ${errorsIndividual.lastName ? 'border-red-500' : ''}`}
          />
          {errorsIndividual.lastName && (
            <span className="text-red-500 text-sm">{errorsIndividual.lastName.message}</span>
          )}

          <label htmlFor="email">البريد الإلكتروني:</label>
          <input
            id="email"
            {...registerIndividual('email', { required: 'This field is required' })}
            className={`p-2 ${errorsIndividual.email ? 'border-red-500' : ''}`}
          />
          {errorsIndividual.email && (
            <span className="text-red-500 text-sm">{errorsIndividual.email.message}</span>
          )}

          <label htmlFor="phoneNumber">رقم الهاتف:</label>
          <input
            id="phoneNumber"
            {...registerIndividual('phoneNumber', { required: 'This field is required' })}
            className={`p-2 ${errorsIndividual.phoneNumber ? 'border-red-500' : ''}`}
          />
          {errorsIndividual.phoneNumber && (
            <span className="text-red-500 text-sm">{errorsIndividual.phoneNumber.message}</span>
          )}

          <label htmlFor="organization">إسم الجمعية:</label>
          <input
            id="organization"
            {...registerIndividual('organization')}
            className="p-2"
          />

<div className="flex gap-5">
            <label htmlFor="student">
              طالب
              <input
                type="radio"
                id="student"
                {...registerIndividual('type')}
                value="student"
                className="ml-2"
              />
            </label>
            <label htmlFor="chikh">
              شيخ
              <input
                type="radio"
                id="chikh"
                {...registerIndividual('type')}
                value="chikh"
                className="ml-2"
              />
            </label>
          </div>

          <label htmlFor="password">كلمة المرور:</label>
          <input
            id="password"
            type="password"
            {...registerIndividual('password', { required: 'This field is required' })}
            className={`p-2 ${errorsIndividual.password ? 'border-red-500' : ''}`}
          />
          {errorsIndividual.password && (
            <span className="text-red-500 text-sm">{errorsIndividual.password.message}</span>
          )}

          <label htmlFor="confirmpwd">تأكيد كلمة المرور:</label>
          <input
            id="confirmpwd"
            type="password"
            {...registerIndividual('confirmpwd', { required: 'This field is required' })}
            className={`p-2 ${errorsIndividual.confirmpwd ? 'border-red-500' : ''}`}
          />
          {errorsIndividual.confirmpwd && (
            <span className="text-red-500 text-sm">{errorsIndividual.confirmpwd.message}</span>
          )}

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
