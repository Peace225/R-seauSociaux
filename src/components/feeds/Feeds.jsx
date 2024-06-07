import './feeds.css'

//Compents.......
import Feed from './Feed'

//FackApi.......
import HomeFeedData from '../FackApis/HomeFeedData'

export default function Feeds() {
  return (
    <div className='feeds'>
        {
            HomeFeedData.map(fed=>(
                <Feed fed={fed} key={fed.key} />

            ))
        }
    </div>
  )
}
