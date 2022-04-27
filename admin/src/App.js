import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./App.css";
import Home from "./pages/home/Home";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Routes
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Transactions from "./pages/transaction/Transactions";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useState(true)
  return (
    <Router>
      <Routes>
        <Route exact path="/login" element={ <Login />}/>
      </Routes>
       
        
            <Topbar />
            <div className="container">
              <Sidebar />
      <Routes>
          
          
              <Route exact path="/" element= {<Home />}/>
              <Route exact path="/userList" element= {<userList />}/>
              <Route exact path="/user/:userId" element= {<User/>}/>
              <Route exact path="/newUser" element= {<NewUser/>}/>
              <Route exact path="/products" element= {<ProductList/>}/>
              <Route exact path="/products" element= {<ProductList/>}/>
              <Route exact path="/product/:productId" element= {<Product/>}/>
          <Route exact path="/newproduct" element={<NewProduct />} />
          <Route exact path="/transactions" element={<Transactions />} />
          
  
            
      
        </Routes>
        </div>
    </Router>
  );
}

export default App;
