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
                <h4 className="nav-link">home</h4>
            </Link>
            <div className="right-align flex-ctr-ctr">
                <Link className="link about" to="/about" >
                    <h4 className="nav-link">about</h4>
                </Link>
                { user !== null ? 
                    <>
                        <Link className="link logout" to="/" onClick={handleLogOut}>
                            <h4><em>{user?.name}</em> log out</h4>
                        </Link>
                    </>
                    :
                    <Link className="link login-logout" to="/login" >
                        <h4>log in</h4>
                    </Link> 
                }
            </div>

        </nav>
    );
}

