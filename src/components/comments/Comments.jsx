import './comment.css'
import { Link } from 'react-router-dom'

//Fack Api.........
import CommetData from '../FackApis/CommetData'
import CurrentUserData from '../FackApis/CurrentUserData'

export default function Comments() {
  return (
    <div className='comments'>
        <div className="writebox">
            <form action='#'>
                <div className="user">
                    <img src={CurrentUserData.map(user=>(user.ProfieImage))} alt='' />
                    <input type='text' placeholder='écrire un commentaire' />
                    <button type='submit' className='btn btn-primary'>Envoyer</button>
                </div>
            </form>
        </div>
        {
            CommetData.map(comment=>(
                <Link to='/profile/id'>
                    <div className="user" key={comment.id}>
                        <img src={comment.commentProfile} alt=''/>
                       <div>
                       <h5>{comment.name} </h5>
                        <p>{comment.CommeText} </p>
                       </div>
                       <small>1h</small>
                    </div>

                </Link>
            ))
        }
    </div>
  )
}
