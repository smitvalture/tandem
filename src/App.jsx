import Login from "./pages/Login";
import Landing from "./pages/Landing";
import Signup from "./pages/Signup";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Biz_dash from "./components/Biz_dash";
import Bill_dash from "./components/Bill_dash";
import Contact_dash from "./components/Contact_dash";
import Refer_dash from "./components/Refer_dash";


function App() {
  return (
    <div>


      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/business-profile' element={<Biz_dash />} />
        <Route path='/billing' element={<Bill_dash />} />
        <Route path='/contact-us' element={<Contact_dash />} />
        <Route path='/refer' element={<Refer_dash />} />
        
      </Routes>
    </div>
  );
}

export default App;
