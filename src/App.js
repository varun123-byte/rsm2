import './App.css';
import Home from "./pages/Home";
import Proserv from "./pages/Proserv";
import Product from "./pages/Product";
import Service from "./pages/Service";
import Prod from "./pages/Prod";
import Serv from "./pages/Serv";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Apply from "./pages/Apply";
import Tcs from "./pages/Tcs";
import Infosys from "./pages/Infosys";
import Hcl from "./pages/Hcl";
import Adobe from "./pages/Adobe";
import Amaz from "./pages/Amaz";
import Goog from "./pages/Goog";
import Success from "./pages/Success";



import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/proserv" element={< Proserv />} />
      <Route path="/product" element={< Product />} />
      <Route path="/service" element={< Service />} />
      <Route path="/prod" element={< Prod />} />
      <Route path="/serv" element={< Serv />} />
      <Route path="/login" element={< Login />} />
      <Route path="/register" element={< Register />} />
      <Route path="/apply" element={< Apply />} />
      <Route path="/tcs" element={< Tcs />} />
      <Route path="/infosys" element={< Infosys />} />
      <Route path="/Hcl" element={< Hcl />} />
      <Route path="/adobe" element={< Adobe />} />
      <Route path="/amaz" element={< Amaz />} />
      <Route path="/goog" element={< Goog />} />
      <Route path="/success" element={< Success />} />
      </Routes>
      </BrowserRouter>
  );
}

export default App;
