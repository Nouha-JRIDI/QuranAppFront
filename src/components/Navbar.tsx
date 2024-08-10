import {
  faGear,
  faGlobe,
  faRightFromBracket,
  faUserCheck,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';
import { NavbarProps } from '../types';
import Logo from './Logo';
import classNames from 'classnames';

const Navbar = ({ navigation }: NavbarProps) => {
  return (
    <div>
      <nav className="p-2 bg-gray-100">
        <div className="w-[95vw] max-w-[1370px] mx-auto flex items-center justify-between">
          <div>
            <Logo />
          </div>
          <div>
            <ul className="flex">
              <li>
                {navigation.map((item) => (
                  <NavLink
                    key={item.name}
                    to={item.href}
                    className={({ isActive }) =>
                      classNames(
                        'text-[#424150] text-[1.1rem] transition-all duration-300 mx-4 font-bold py-1 px-2.5',
                        {
                          'text-[#50b3b3]': isActive,
                          'hover:text-[#a8b3c0]': !isActive,
                        }
                      )
                    }
                  >
                    {item.name}
                  </NavLink>
                ))}
              </li>
            </ul>
          </div>
          <div className="flex gap-5">
            <FontAwesomeIcon icon={faUserCheck} className="text-[18px] p-2 transition-all duration-300 hover:text-[#D1D6DB] hover:cursor-pointer" />
            <FontAwesomeIcon icon={faGlobe} className="text-[18px] p-2 transition-all duration-300 hover:text-[#D1D6DB] hover:cursor-pointer" />
            <FontAwesomeIcon icon={faGear} className="text-[18px] p-2 transition-all duration-300 hover:text-[#D1D6DB] hover:cursor-pointer" />
            <Link to="/">
              <FontAwesomeIcon
                icon={faRightFromBracket}
                className="text-[18px] p-2 transition-all duration-300 hover:text-[#D1D6DB] hover:cursor-pointer text-black transform scale-x-[-1]"
              />
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
