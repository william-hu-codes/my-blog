
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import { useState } from "react";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function AuthPage ({ setUser }) {
    const [showSignUp, setShowSignUp] = useState(false)
    

return (

    <section className="auth-page-ctr">
        <h1>AuthPage</h1>
        <button onClick={(() => setShowSignUp(!showSignUp))}>{ showSignUp ? "Alread a user?" : "Sign Up" }</button>
        {showSignUp ?
        <SignUpForm setUser={setUser} />
        :
        <LoginForm setUser={setUser} />
        }
    </section>

);
}