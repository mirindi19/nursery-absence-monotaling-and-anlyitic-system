import "./piechart.scss"
import React, { useEffect, useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';
import axios from "axios";
ChartJS.register(ArcElement, Tooltip, Legend);



const Piechart = () => {
  const [data, setData] = useState({ datasets: [] });
 
  useEffect(()=>{
    async function fetchData(){
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];
      const genderSet = [];
      await axios.get('http://localhost:8000/api/students/students-parcentage').then(res => {
       
        labelSet.push(" ");
        const numberOfMale=parseInt(res.data.data[0].myCount);
        const numberofFemale =  parseInt( res.data.data[1].myCount);
        const resCount=numberOfMale + numberofFemale;
         const maleTotal=parseInt(res.data.data[0].myCount);
         const femaleTotal=parseInt(res.data.data[1].myCount);
        for (const val of res.data.data) {
       
          let genderValue = val._id;
          let total=0
          if(genderValue=="Male"){
           total=((maleTotal*100)/resCount).toFixed(2)
            dataSet1.push(total);
          }
          else{
            total=((femaleTotal*100)/resCount).toFixed(2)
            dataSet1.push(total);
          }

          genderSet.push(genderValue);
        }

        setData({
          labels: genderSet,

          datasets: [
            {
              label: "",
              data: dataSet1,
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(255, 159, 64, 0.2)',
                'rgba(255, 205, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(201, 203, 207, 0.2)'
              ],
           borderColor: [
                'rgb(255, 99, 132)',
                'rgb(75, 192, 192)',
                'rgb(255, 205, 86)',
                'rgb(255, 159, 64)',
                'rgb(54, 162, 235)',
                'rgb(153, 102, 255)',
                'rgb(201, 203, 207)'
              ],
              borderWidth: 1,
              options: {
                layout: {
                  padding: 20
              },
                animation: true,
                plugins: {
                  legend: {
                      labels: {
                          font: {
                              size: 14
                          }
                      }
                  }
              },
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            },
             
            }]
          }
      );
        console.log("arrData", dataSet1, dataSet2, labelSet);
      });
          }
          fetchData()
  },[])

 

  return (
    <div className="piechart">
    <div className="title">Percentage of student by Gender</div>
    <Pie data={data} />
    </div>
  )
}

export default Piechart