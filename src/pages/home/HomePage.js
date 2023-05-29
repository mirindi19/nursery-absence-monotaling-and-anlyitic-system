import "./homePage.scss"
import Sidebar from"../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Widget from "../../components/widget/Widget"
import Twidget from "../../components/widget/Twidget"
import Chart from "../../components/chart/Chart"
import Piechart from "../../components/pieChart/Piechart"
import TDoughnut from "../../components/chart/TDoughnut"
import Tchart from "../../components/chart/Tchart"
const HomePage = () => {
  const data= JSON.parse(localStorage.getItem("user-data"));
const role=data.role;
  return (
    <div className="homepage">
    <Sidebar/>
    <div className="container">
    <Navbar/>
    {
      role=="Admin"?
      <>
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
      </>
      
      :null}
      {
        role=="Teacher"?
      
      <>
  <div className="widgets">
  <Twidget type="user"/>
   <Twidget type="student"/>
 
   </div>
     <div className="charts">
    <Tchart/>
    <TDoughnut/>
   </div>
      </>
      :null
    }
    </div> 
    </div>
  )
}

export default HomePage