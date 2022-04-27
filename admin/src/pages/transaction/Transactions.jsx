import { useEffect, useState } from "react";
import { userRequest } from "../../requestMethods";
import "./transactions.css";
import { format } from "timeago.js";
import axios from "axios";

const Transactions =()=> {
    const [orders, setOrders] = useState([]);
    const status = ["Pending", "Approved", "Delivered"]

  useEffect(() => {
    const getOrders = async () => {
      try {
        const res = await userRequest.get("orders");
        setOrders(res.data);
      } catch {}
    };
    getOrders();
  }, []);
    
    const handleStatus = async (id) => {
        
        const item = orders.filter(order => order._id === id)[0]
        const currentStatus = item.status
        try {
            const res = await axios.put("http://localhost:6001/api/orders/" + id, { status: currentStatus + 1 });
            setOrders([
                res.data,
                ...orders.filter((order)=>order._id !==id)
            ])
        } catch (err) {
            
        }
    }


  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
    return (
      
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Customer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Amount</th>
                    <th className="widgetLgTh">Status</th>
                    <th className="widgetLgTh"> Action </th>
                   
        </tr>
        {orders.map((order) => (
            <tr className="widgetLgTr" key={order._id.slice(0, 10)}>
            <td className="widgetLgUser">
              <span className="widgetLgName">{order.userId}</span>
            </td>
            <td className="widgetLgDate">{format(order.createdAt)}</td>
                <td className="widgetLgAmount">${order.amount}</td>
                <td>{order.method === 0 ?(<span>Cash</span>) : (<span>Paid</span>)}</td>
            <td className="widgetLgStatus">
              <Button type={order.status} />
              
            </td>
            <td className="widgetLgStatus">
               <Button type="UPDATE" onClick ={()=>handleStatus(order._id)}></Button>
              
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
}

// export const getServerSideProps = async () => {
//     const productRes = await axios.get("http://localhost:5001/api/products")
//     const orderRes = await axios.get("http://localhost:5001/api/orders")

//     return {
//         props: {
//             orders: orderRes.data,
//             products: productRes.data
//         }
//     }
// }

export default Transactions;