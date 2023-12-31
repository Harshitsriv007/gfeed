import React from "react";
import dataset from "./data.json";
import Image1 from "../../images/imge1.jpg";
// import Image2 from "../../images/image2.jpg";
import Image3 from "../../images/image3.jpg.avif";
import "./dashboard.css";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);
const count = dataset.length;
const data = {
    labels: [],
    datasets: [
      {
        label: 'product',
        data: [count, 19, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 0.2)',
        ],
        borderWidth: 1,
      },
    ],
  };



const Dashboard = () =>
{
    // const Productcount = data.length;
    // const Productcount=10;
    var d = (new Date()).toString().split(' ').splice(1,3).join(' ');
    return <>
        <div className="container col-sm-12">
            <div className="row">
                <div className="col-sm-5 productdonut" style={{width:"33%",height:"200px"}}>
                    <Doughnut data={data} />
                </div>
                <div className="col-sm-5 orderdonut" style={{width:"33%",height:"200px"}}>
                    <Doughnut data={data} />
                </div>
                <div className="col-sm-5  creditdonut" style={{width:"33%",height:"200px"}}>
                    <Doughnut data={data} />
                </div>
            </div>
        </div>
        <div className="container promote_section1">
            <div className="row">
                <div className="col-sm-8">
                    <div className="row">
                        <div className="col-wm-12">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img className="bannerImage" src={Image1} alt="banner"/>
                                </div>
                                <div className="col-sm-6">
                                    <img className="bannerImage" src={Image1} alt="banner"/>
                                </div>
                            </div>
                        </div>
                        <div className="col-wm-12 second_promotions">
                            <div className="row">
                                <div className="col-sm-6">
                                    <img  className="promotionsImage" src={Image3} alt="promotions"/>
                                </div>
                                <div className="col-sm-6">
                                    <img className="bannerImage" src={Image1} alt="banner"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-sm-4 plan">
                    <div className="plan_1">
                        Active Plan
                    </div>
                    <div className="plan_2">
                        Plan : Gold
                    </div>
                    <div className="plan_3">
                        Plan started Date : {d}
                    </div>
                    <div className="plan_4">
                        Plan Ending Date : {d}
                    </div>
                </div>
            </div>
            <div className="container">
                <p className="footer">@copywrite by Harshit Srivastava</p>
            </div>
        </div>
        </>
}


export default Dashboard;