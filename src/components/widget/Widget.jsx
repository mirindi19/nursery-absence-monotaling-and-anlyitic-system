import './widget.scss'

const Widget = ({ type }) => {

  let data;
   switch(type){
    case "user":
      data ={
      title: "USERS",
      counter: "90",
    };
    break;
    case "parent":
      data ={
      title: "PARENT",
      counter: "19",
      
    };
    break;
    case "student":
      data ={
      title: "STUDENT",
      counter: "70",
    };
    break;
    case "course":
      data ={
      title: "COURSE",
      counter: "50",
    };
    break;
    default:
      break;
   }

  return (
    <div className='widget'>
    <div className='left'>
    <span className='counter'>{data.counter}</span>
    <span className='title'>{data.title}</span>
    </div>
    </div>
  )
}

export default Widget