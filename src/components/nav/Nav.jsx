import './nav.css';
import {Link} from 'react-router-dom';

//Facke Api Data...........
import CurrentUser from '../FackApis/CurrentUserData';

//Components..................
import DarkMoode from '../darkmod/DarkMoode';

//FontAwersome Icon...........
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBars, faBell, faEnvelope, faHome, faSearch, faUser} from '@fortawesome/free-solid-svg-icons';



export default function () {
  return (
    <nav>
      <div className="nav-container">
    {/* ..........Nav Right......... */}
        <div className="nav-left">
          <Link to='/'>
            <h3 className='logo'>TubCentro</h3>
          </Link>
          <Link to='/'>
            <FontAwesomeIcon icon={faHome}/>
          </Link>
          <Link to='/profile/:id'>
            <FontAwesomeIcon icon={faUser}/>
          </Link>
          <div className="Nav-Searchbar">
          <FontAwesomeIcon icon={faSearch}/>
          <input type='search'/>
          </div>

        </div>
   {/* .........Nav Right.......... */}
        <div className="nav-right">
          <Link to='/chatbox/:id'>
          <FontAwesomeIcon icon={faEnvelope}/>
          </Link>
          <Link to='/'>
          <FontAwesomeIcon icon={faBell}/>
          </Link>
          <DarkMoode />
          <Link to='/'>
          <FontAwesomeIcon icon={faBars}/>
          </Link>
          <div className="user">
            <img src={CurrentUser.map(user=>(user.ProfieImage))} alt=''/>
            <h4>Aline Joker</h4>

          </div>
        </div>
      </div>
    </nav>
  )
}
