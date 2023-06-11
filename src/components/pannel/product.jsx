import React from "react";
import data from "./data.json";

const Product = () =>
{
    return <>
            <h1> this is a dashboard!</h1>
            <table>
        <thead>
          <tr>
            <th>Image </th>
            <th> Title </th>
            <th> Quantity </th>
            <th> Parent ID </th>
          </tr>
        </thead>
            <tbody>
            <div>
                {data.map((item,keys)=>{
                  return (<div key={keys}>
                        <tr>
                            <td><img src={item.details.all_images[0]} alt="images"/></td>
                            <td>{item.details.title}</td>
                            <td>{item.variants[0].quantity}</td>
                            <td>{item.variants[0].id}</td>
                        </tr>
                    </div>)  
                })}
            </div>
                </tbody>
            </table>
        </>
}


export default Product;