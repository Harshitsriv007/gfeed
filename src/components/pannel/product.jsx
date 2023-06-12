import React,{useState} from "react"; 
import data from "./datatable"; 
import columns from "./columntable"; 
import { Table } from "antd"; 
const Product = () => { 
const [Data, setData] = useState(data); 
return ( 
    <> 
        <div className="app"> 
            <div className="table"> 
                <Table 
                    dataSource={Data} 
                    columns={columns} 
                    pagination={{ pageSize: 10, total: Data.length, showSizeChanger: true }} 
                /> 
            </div> 
        </div> 
    </> 
    ); 
};

export default Product;


