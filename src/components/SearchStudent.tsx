

import SearchBar from './SearchBar';

import Input from './Input';
import Title from './Title';
import LightBlueBtn from './LightBlueBtn';

const SearchStudent = () => {
  return (
    <div>
      <div className="w-[90vw] m-2.5 mx-auto max-w-[1170px] flex flex-col justify-center items-center">
        <div className="w-[80vw]">
          <Title>إبحث عن طالب</Title>
          <div className="flex justify-center items-center h-[120px] bg-[url('./assets/background3.jpg')] bg-center bg-cover bg-no-repeat rounded-md">
            <SearchBar />
          </div>
        </div>
        <div>
          <Title> أو قم بتسجيل طالب </Title>
          <div className="m-5 p-7 w-[80vw] rounded-md shadow-custom">
            <form className="grid grid-cols-2 gap-y-7 items-center">
              <label htmlFor="firstName">
                الإسم :
                <Input id="firstName" name="firstName" />
              </label>

              <label htmlFor="lastName">
                
                اللَقب :
                <Input id="lastName" name="lastName" />
              </label>

              <label htmlFor="email">
                البريد الإلكتروني :
                <Input id="email" name="email" />
              </label>

              <label htmlFor="phoneNumber">
                رقم الهاتف :
                <Input id="phoneNumber" name="phoneNumber" />
              </label>

              <label htmlFor="memorization">
                
                مقدار الحفظ :
                <Input id="memorization" name="memorization" />
              </label>

              <LightBlueBtn>تسجيل</LightBlueBtn>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStudent;
