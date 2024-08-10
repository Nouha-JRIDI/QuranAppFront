import Navbar from './Navbar';
import {NavbarProps} from '../types';

const StudentProfile = ({ navigation }: NavbarProps) => {
  return (
    <div>
      <Navbar navigation={navigation} />
     
    </div>
  );
};

export default StudentProfile;
