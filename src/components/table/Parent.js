import "./parent.scss"
import Sidebar from "../sidebar/Sidebar";
import Navbar from "../navbar/Navbar";
const Parent = () => {
  return (
    <div className="parent">
    <Sidebar/>
    <div className="navParent">
    <Navbar/>
    <div className="parentTable">
    jimmy
    </div>
    </div>
    </div>
  )
}

export default Parent