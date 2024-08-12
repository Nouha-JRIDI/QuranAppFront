import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Title from './Title';
import LightBlueBtn from './LightBlueBtn';
import backgroundImage from '../assets/background2.png';

type LoginInputs = {
  email: string;
  password: string;
};

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginInputs>();

  const onSubmit: SubmitHandler<LoginInputs> = (data) => {
    console.log('Login data:', data);
  };

  return (
    <div
      className="w-full h-screen flex justify-center items-center flex-col m-0 p-0"
      style={{
        background: `linear-gradient(rgba(63, 208, 212, 0.5), rgba(0, 0, 0, 0.7)), url(${backgroundImage}) center/cover no-repeat`,
      }}
    >
      <Title>تسجيل الدخول</Title>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="rounded-md bg-[#edf7f8] shadow-[0px_0px_12px_#aaa,-0px_-0px_12px_#ada6a6] w-[500px] p-[15px_25px_20px_25px] flex flex-col gap-2 mb-7"
      >
        <label htmlFor="email">البريد الإلكتروني:</label>
        <input
          id="email"
          type="email"
          {...register('email', { required: 'البريد الإلكتروني مطلوب' })}
          className={`p-2 ${errors.email ? 'border-red-500' : ''}`}
        />
        {errors.email && (
          <span className="text-red-500 text-sm">{errors.email?.message}</span>
        )}

        <label htmlFor="password">كلمة المرور:</label>
        <input
          id="password"
          type="password"
          {...register('password', { required: 'كلمة المرور مطلوبة' })}
          className={`p-2 ${errors.password ? 'border-red-500' : ''}`}
        />
        {errors.password && (
          <span className="text-red-500 text-sm">{errors.password?.message}</span>
        )}

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
