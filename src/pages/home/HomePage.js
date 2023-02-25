import "./homePage.scss"
import Sidebar from"../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
const HomePage = () => {
  return (
    <div className="homepage">
    <Sidebar/>
    <div className="container">
    <Navbar/>
   <div className="widgets">
   <Widget/>
   <Widget/>
   <Widget/>
   <Widget/>
   </div>
   <div className="charts">
    <Chart/>
   </div>
    </div> 
    </div>
  )
}

export default HomePage