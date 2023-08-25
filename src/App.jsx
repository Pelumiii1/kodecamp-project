import './App.css'
import profile from './img/profile__img.png'
import slack from './img/slack.png'
import socialIcon from './img/Social_icon.png' 

function App() {
  return (
    <>
       <div className="container">
      <div>
        <div className="head-box">
          <div><img src={profile} alt='Profile' className='head-image'/>
          <h3 className="head-text">John Doe</h3>
          </div>
          <div>
            <div className="list">Twitter Link</div>
            <div className='list'>KodeCamp Team</div>
                <div className='list'>KodeCamp Books</div>
                <div className='list'>Python Books</div>
                <div className='list'>Background Check for Coder</div>
                <div className='list'>Design Books</div>
          </div>
          <div className="footer">
             <img src={slack} alt="slack" />
                <img src={socialIcon} alt="icon" />
          </div>
        </div>
        </div>  
        
    </div>
    </>
  )
}

export default App
