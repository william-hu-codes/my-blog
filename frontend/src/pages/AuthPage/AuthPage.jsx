
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage ({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    

return (

    <section className="auth-page-ctr">
        {/* <h1>login</h1> */}
        <h4><em>note this login is for admins only</em></h4>
        {/* <button onClick={(() => setShowSignUp(!showSignUp))}>{ showSignUp ? "Alread a user?" : "Sign Up" }</button> */}
        {/* {showSignUp ?
        <SignUpForm setUser={setUser} />
        : */}
        <LoginForm setUser={setUser} />
        {/* } */}
    </section>

);
}