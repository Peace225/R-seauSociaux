import { Link } from 'react-router-dom';
import './signup.css';

export default function Signup() {
  return (
    <div className="signup">
    <div className='card'>
        <div className="left">
            <h2> -<br/>TubCentro S'inscrire<br/>-</h2>
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Quam asperiores nostrum repudiandae!
            </p>
            <span>Vous Avez Un Compte?</span>
            <Link to='/login'>
                <button className='btn btn-primary'>Connexion</button>
            </Link>   
        </div>
        <form className="right">
            <input type='text' required placeholder='Nom d utilisateur'/>
            <input type='email' required placeholder='email'/>
            <input type='password' required placeholder='Mot de Passe'/>
            <button type='submit' className='btn'>S'inscrire</button>
        </form>
  
    </div>
</div>
  )
}
