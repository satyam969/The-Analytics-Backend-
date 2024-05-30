
import { NavLink, Outlet } from "react-router-dom"
// import { FaHouseUser } from "react-icons/fa";
import { useAuth } from "../store/auth"
import { Navigate } from "react-router-dom";




const AdminLayout=()=>{

const{user,isloading}=useAuth();



// pehli bar me user ka data aane me time lgegea tbtk wo chl jyega
// that is why is loading wle cheez
if(isloading){

return <h1>Loading...</h1>

}
if(!(user.userData.isAdmin)){

    return <Navigate to="/" />

}

    return(<>
    
    <header>
    <div className="container">
        <nav>
            <ul>
            <NavLink to="/admin/users"><li> Users</li></NavLink>
            <NavLink to="/admin/contacts"><li>Contacts</li></NavLink>
            <NavLink to="/service"><li>Services</li></NavLink>
            <NavLink to="/"><li>Home</li></NavLink>
            </ul>
        </nav>
    </div>
</header>
{/* nested elemnt ke content dikhane ka km krta hai */}
    <Outlet/>
    </>)
}


export default AdminLayout