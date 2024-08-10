import Navbar from './Navbar';
import avatar from './../assets/avatar.jpg';

import { useParams } from 'react-router-dom';
import charts from './../assets/charts.jpeg';
import {NavbarProps} from '../types';
import Title from './Title';

const StudentInfo = ({ navigation }: NavbarProps) => {
  const { fullname, email } = useParams();
  return (
    <div>
      <Navbar navigation={navigation} />
      <div className="w-[80vw] p-2.5 my-2.5 mx-auto max-w-[1170px] flex flex-col justify-center">
        <div className="flex gap-5">
          <img className="w-100px rounded-full" src={avatar} />
          <div>
            <Title> {fullname}</Title>
            <h3>{email}</h3>
          </div>
        </div>
        <div className="w-[60vw] p-2.5 m-2.5 mx-auto max-w-[1170px] flex justify-around">
          <div>
            <h2>الحفظ</h2>
            <h2>المراجعة</h2>
            <h2>العلامات</h2>
          </div>
          <div>
            <Title>وتيرة الحفظ</Title>
            <img className="w-[300px]" src={charts} alt="charts" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StudentInfo;
