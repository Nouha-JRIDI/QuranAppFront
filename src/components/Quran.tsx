import { NavbarProps } from './../types';
import Navbar from './Navbar';

const Quran = ({ navigation }: NavbarProps) => {
  return (
    <div>
      <Navbar navigation={navigation} />
    </div>
  );
};

export default Quran;
