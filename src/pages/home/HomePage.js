import "./homePage.scss"
import Sidebar from"../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Chart from "../../components/chart/Chart"
import Piechart from "../../components/pieChart/Piechart"
const HomePage = () => {
  return (
    <div className="homepage">
    <Sidebar/>
    <div className="container">
    <Navbar/>
   <div className="widgets">
    <Widget type="user"/>
   <Widget type="parent"/>
   <Widget type="student"/>
   <Widget type="course"/>
   </div>
   <div className="charts">
    <Chart/>
    <Piechart/>
   </div>
    </div> 
    </div>
  )
}

export default HomePage