import './firendreq.css';
import { Link} from 'react-router-dom';

//FackApis.............
import FirendReqData from '../FackApis/FirendReqData'

export default function FirendReq() {
  return (
    <div className='Firend-Request'>
        <h4>Firend Requests</h4>
        {
             FirendReqData.map(firend=>(
                <div className="request">
                    <Link to='/profile/id'>
                        <div className="info" key={firend.id}>
                            <div className="user">
                                <img src={firend.img} alt=''/>
                                <h5>{firend.name}</h5>
                            </div>
                            <div className='info-name'>
                                
                                <p>{firend.info}</p>
                            </div>
                        </div>
                    </Link>

                    <div className="action">
                        <button className='btn btn-primary'>Accepter</button>
                        <button className='btn btn-red'>Supprimer</button>
                    </div>
                </div>
                
             ))
        }
    </div>
  )
}
