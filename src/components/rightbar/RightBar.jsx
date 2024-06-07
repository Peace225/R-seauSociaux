import './rightbar.css';

//Components..............
import Message from '../message/Message';
import FirendReq from '../firendReqe/FirendReq';

export default function RightBar() {
  return (
    <div className='rightBar'>
      <div className="rightbar-container">
        <Message/>
        <FirendReq/>
      </div>
    </div>
  )
}
