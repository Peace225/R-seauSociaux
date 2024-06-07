import './darkmood.css';

//FontAwersome Icon............
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

export default function DarkMoode() {

    const DarkHandele=()=>{
        document.querySelector('body').classList.toggle('darkmood');
    }
  return (
    <div className='dark-mood_icon'>
        <FontAwesomeIcon icon={faLightbulb} onClick={DarkHandele} />
    </div>
  )
}
