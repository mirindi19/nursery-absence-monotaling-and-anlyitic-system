import "./chart.scss";
import React from 'react'
import { Bar, Doughnut } from "react-chartjs-2";
import { useEffect, useState } from "react";
import axios from "axios";

function BarChart() {
  
    const [data, setData] = useState({datasets:[]});
  useEffect(() => {
    const fetchData = async () => {
      const labelSet = [];
      const dataSet1 = [];
      const dataSet2 = [];
      const examSet=[]
    let presentCount=0
    let absentCount=0
    let total= 0
    let finalt=0
    let parcentagePresent =0
    let parcentageAbsent =0
    const token = await localStorage.getItem("x-access-token");
    let headers;
    if (token) {
      headers = {
        "Content-Type": "application/json",
        token: `${token}`,
      };
    } else {
      headers = {
        "Content-Type": "application/json",
      };
    }
       await axios.get(`http://localhost:8000/api/attendances/by-class`,{headers:headers} ).then(function (response) {
        const res = response.data.data;
        return res;
        })
        .then(function (res) {
          labelSet.push(res.length + "  Students Attendance results ");
          for (const val of res) {
            const statusName=val.status
           // const finalTotal =( (val.total / (resCount * 100)) * 100).toFixed(2);
           if(statusName=='Present'){
            presentCount+=1
          
           }else{
            absentCount+=1
         
           }
          
           total= presentCount +   absentCount
            parcentagePresent =( (presentCount / (total * 100)) * 100).toFixed(2);
           parcentageAbsent=( ( absentCount / (total * 100)) * 100).toFixed(2);
         
          }
         const datas = [
            { name: "Present", value: parcentagePresent* 100 },
            {
              name: "Absent",
              value: parcentageAbsent* 100,
            }
          ];

          datas.map((d) => {
            examSet.push(d.name)
            dataSet1.push(d.value);
           
          });
          setData(
            {       
                labels: examSet,
                datasets: [{
                  label: labelSet,
                  data:dataSet1,
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
                }]
              }
          )
      
          
        
        })
        .catch(function (error) {
          console.log("error", error);
        });
        
    };
    fetchData();
  }, []);
  return (
    <div className="barChart">
    <span className="barChartTitle">Students Attendance % </span>
    <Doughnut
    data={data }
    
    >

    </Doughnut>
    </div>
  );
}

export default BarChart;