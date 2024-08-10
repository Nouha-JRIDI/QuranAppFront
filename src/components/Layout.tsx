
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import { NavbarProps } from '../types';

const Layout = ({ navigation }: NavbarProps) => {
  return (
    <div>
      <Navbar navigation={navigation} />
     
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
