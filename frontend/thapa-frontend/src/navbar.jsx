import { NavLink } from "react-router-dom";
import { useAuth } from "./store/auth";
// import "./navbar.css"
// nav link is a form of link 

const Navbar=()=>{

  // login krte tim etoken set nhikr rhe hm turant that is why 
  // turant logout me convert nhi ho rha register,login
const{isLoggedIn}=useAuth();
// console.log(isLoggedIn);


    return (<> 
        <header>
          <div className="container">
            <div className="logo-brand">
              <NavLink to="/">The Analytics</NavLink>
            </div>
  
            <nav>
              <ul>
                <li>
                  <NavLink to="/"> Home </NavLink>
                </li>
                <li>
                  <NavLink to="/about"> About </NavLink>
                </li>
                <li>
                  <NavLink to="/service"> Services </NavLink>
                </li>
                <li>
                  <NavLink to="/contact"> Contact </NavLink>
                </li>
                {/* at a time ya toh mujhe logout dikhe ya phir log in ,register */}
                
                  {/* conditional operating or ternary operator */}
                  {isLoggedIn ? <li><NavLink to="/logout">Logout</NavLink>  </li>:<>
                  <li>
                  <NavLink to="/register"> Register </NavLink>
                </li>
                <li>
                  <NavLink to="/login"> Login </NavLink>
                </li>
                  </>}
                 
               
               
              </ul>
            </nav>
          </div>
        </header>
      </>)
}

export default Navbar