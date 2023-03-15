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
        
         <p>The Gender Promotion and Women Empowerment Directorate oversees all interventions<br></br> related to Gender Equality and Women Empowerment, develops all policies related to the<br></br> advancement of Gender equality and Women Empowerment. It also coordinates all partners<br></br> who intervene in the areas of Gender Promotion and Women Empowerment.</p>
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