import { Link } from "react-router-dom";
import * as userService from "../../utilities/users-service"
import "./NavBar.css"


export default function NavBar ({ user, setUser }) {
    function handleLogOut() {
        userService.logOut()
        setUser(null)
    }

    return (

        <nav className="flex-row-start">
            <Link className="link" to="/">
                <h4 className="nav-link">HOME</h4>
            </Link>
            { user !== null ? 
                <>
                    <Link className="link" to="/user">
                        <h4>PROFILE: {user?.name}</h4>
                    </Link>
                    {/* <span><strong>Welcome, {user?.name}</strong> </span> */}
                    <Link className="link logout" to="/" onClick={handleLogOut}>
                        <h4>LOG OUT</h4>
                    </Link>
                </>
                :
                <Link className="link login-logout" to="/login" >
                    <h4>LOGIN</h4>
                </Link> 
            }

        </nav>
    );
}

