import './hero.css'
import Topnav from "../../components/topnav/Topnav"
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    
 <div className='hero'>
    <Topnav/>
    <div className='hero-image'>
      <div className='hero-text'>
        <h2>Nursery Absence Monotaling and<br></br> Anlyitic System</h2>
        
         <p>Welcome to Groupe Scolaire APACOPE where the bright future of your child Begins. You are<br></br> all encouraged to enroll and entrust the education of your beloved children with us..</p>
         <Link to="/login-form" style={{textDecoration:"none"}}>
         <button className='btn'>
         Start
         </button>
         </Link>
      </div>
    </div>
    </div>
  )
}

export default Hero