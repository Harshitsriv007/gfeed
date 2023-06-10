import React from "react";
import data from "./data.json";

const Product = () =>
{
    return <>
            <h1> this is a dashboard!</h1>
            <div>
                {data.map((item,keys)=>{
                  return (<div key={keys}>
                        <h4>{item.details.title}</h4>
                        <h4>{item.details.description}</h4>
                        <h4><img src={item.details.all_images[0]}/></h4>
                        <h4>{item.variants[0].id}</h4>
                        <h4>{item.variants[0].title}</h4>
                        <h4>{item.variants[0].sku}</h4>
                        <h4>{item.variants[0].price}</h4>
                        <h4>{item.variants[0].quantity}</h4>
                    </div>)  
                })}
            </div>
        </>
}


export default Product;