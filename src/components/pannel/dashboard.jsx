import React from "react";
import dataset from "./data.json";
import Image1 from "../../images/imge1.jpg";
import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/image3.jpg.avif";
import "./dashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const count = dataset.length;
const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: 'product import',
        data: [count, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };



const Dashboard = () =>
{
    // const Productcount = data.length;
    const Productcount=10;
    return <>
        <div>
            <h1> this is a dashboard!</h1>
            <div>
                {/* <h4>Total product count is - {Productcount}</h4> */}
                <Doughnut data={data} />
            </div>
            <div>
                <h4>Total Order count is - {Productcount}</h4>
            </div>
            <div>
                <h4>Total Credits count is - {Productcount}</h4>
            </div>
        </div>
        <div className="container promote_section1">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-wm-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img classNmae="bannerImage" src={Image1} alt="banner"/>
                                </div>
                                <div className="col-sm-6">
                                    <img classNmae="bannerImage" src={Image1} alt="banner"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-wm-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img  classNmae="promotionsImage" src={Image3} alt="promotions"/>
                                </div>
                                <div className="col-sm-6">
                                    <img classNmae="bannerImage" src={Image1} alt="banner"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4">
                    <table style={{border:"2px solid black",height:"20em"}}>
                        <tr >
                            <td>Name:</td>
                            <th>Harshit</th>
                            <td>Plan:</td>
                            <th>Gold</th>
                        </tr>
                        <tr >
                            <td>Name:</td>
                            <th>Harshit</th>
                            <td>Plan:</td>
                            <th>Gold</th>
                        </tr>
                        <tr >
                            <td>Name:</td>
                            <th>Harshit</th>
                            <td>Plan:</td>
                            <th>Gold</th>
                        </tr>
                    </table>
                </div>
            </div>
            <div className="container">
                <p className="footer">@copywrite by Harshit Srivastava</p>
            </div>
        </div>
        </>
}


export default Dashboard;