import './leftbar.css';
import {Link} from 'react-router-dom';

//Components..............
import CurrentProfile from '../../assets/img/CurrentProfile.jpeg';

//Icon Image............
import Firend from '../../assets/icon/iconFriend.png';
import Groups from '../../assets/icon/iconFriend.png';
import Market from '../../assets/icon/iconMarket.jpg';
import watch from '../../assets/icon/iconWatch.png';
import gallery from '../../assets/icon/iconGallery.png';
import video from '../../assets/icon/iconVideo.png';
import message from '../../assets/icon/iconMessage.png';

export default function LeftBar() {
  return (
    <div className='leftBar'>
      <div className="left-container">
        <div className="menu">
          <Link to='/profile/id'>
            <div className="user">
              <img src={CurrentProfile} alt=''/>
              <h4>Aline Joker</h4>
            </div>
          </Link>
          <Link to='/'>
            <div className="item">
              <img src={Firend} alt=''/>
              <h4>Firends</h4>
            </div>
            <div className="item">
              <img src={Groups} alt=''/>
              <h4>Groupes</h4>
            </div>
            <div className="item">
              <img src={Market} alt=''/>
              <h4>Market</h4>
            </div>
            <div className="item">
              <img src={watch} alt=''/>
              <h4>Watch</h4>
            </div>
            <div className="item">
              <img src={gallery} alt=''/>
              <h4>Gallery</h4>
            </div>
            <div className="item">
              <img src={video} alt=''/>
              <h4>Video</h4>
            </div>
            <div className="item">
              <img src={message} alt=''/>
              <h4>Message</h4>
            </div>
          </Link>
        </div>

        <hr/>
        <div className="menu">
          <h4 className='other'> Vos Raccourcis</h4>
          <Link to='/'>
          <div className="item">
              <img src={gallery} alt=''/>
              <h4>Galerry</h4>
            </div>
          </Link>

          <Link to='/'>
          <div className="item">
              <img src={video} alt=''/>
              <h4>Video</h4>
            </div>
          </Link>

          <Link to='/chatbox/id'>
          <div className="item">
              <img src={message} alt=''/>
              <h4>Message</h4>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}
