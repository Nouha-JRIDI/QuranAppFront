import { faGear, faGlobe, faRightFromBracket, faUserCheck} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Navbar.css'

const Navbar = () => {

  const navigation=[
    {name:"الطلبة",href:"/students"},
    {name:"الحفظ",href:"/memorization"},
    {name:"المراجعة",href:"/revision"},
    {name:"الإمتحانات",href:"/exams"},
  ]
  return (
    <div>
        <nav className='nav-bar'>
    <div className="nav-center">
        <div className="nav-header">
        <img className="logo" src={logo} alt="logo" />
        
        </div>
        <div className="links-container">
            <ul className="links">
                <li>
                  {navigation.map((item) => (
                    <NavLink key={item.name} 
                    to={item.href}
                    className={({ isActive }) =>
                      
                      isActive ? "active" : ""
                    }>
                      {item.name}</NavLink>
                  ))}
                </li>
            
              </ul>

        </div>
        <div className="nav-icons">
        <FontAwesomeIcon icon={faUserCheck} className='icon'/>
        <FontAwesomeIcon icon={faGlobe} className='icon'/>
        <FontAwesomeIcon icon={faGear} className='icon' />   
        <Link to='/' ><FontAwesomeIcon icon={faRightFromBracket} className='icon logout-btn' /></Link>

        </div>

    </div>

</nav>
    </div>
  )
}

export default Navbar