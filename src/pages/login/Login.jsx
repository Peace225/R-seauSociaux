import { Link } from 'react-router-dom';
import './login.css';

export default function Login() {
  return (
    <div className="login">
        <div className='card'>
            <div className="left">
                <h2>-<br/>TubCentro <br/>-</h2>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Quam asperiores nostrum repudiandae!
                </p>
                <span>Tu Na Pas De Compte?</span>
                <Link to='/signup'>
                    <button className='btn btn-primary'>S'inscrire</button>
                </Link>
            </div>
            <form className="right">
                <input type='text' required placeholder='Nom d utilisateur'/>
                <input type='password' required placeholder='Mot de Passe'/>
                <button type='submit' className='btn'>Connexion</button>
            </form>
      
        </div>
    </div>
    
  )
}
