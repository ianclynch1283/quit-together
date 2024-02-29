import { Link, Outlet } from "react-router-dom";
export default function Layout() { 
    return(
      <>  
        <nav>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/login">Log in</Link></li>
                <li><Link to="test1">Test 1</Link></li>
            </ul>
        </nav>

        <Outlet />
      </>
    )
}



