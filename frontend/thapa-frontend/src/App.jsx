import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  Home  from "./Home";
import  About  from "./About";
import  Contact  from "./contact";
import  Service  from "./Service";
import  Register  from "./register";
import  Login  from "./login";
import Navbar from "./navbar";
import Error from "./error";
import Logout from "./Logout";
import AdminLayout from "./layouts/Admin-Layout";
import AdminContacts from "./Admincontacts";
import AdminUsers from "./Adminusers";
import AdminUpdate from "./Admin-Update";

const App = () => {



  return (
    <Router>
<Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service" element={<Service />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={ <Logout/>}/>
        <Route path="*" element={<Error/>}/>
        {/* nested route  */}
        <Route path="/admin" element={<AdminLayout></AdminLayout>}>
<Route path="users" element={<AdminUsers/>}/>
<Route path="contacts" element={<AdminContacts/>}/>
<Route path="users/:id/edit" element={<AdminUpdate/>}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;