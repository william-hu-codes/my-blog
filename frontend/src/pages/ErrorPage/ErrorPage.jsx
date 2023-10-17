import { useNavigate } from "react-router-dom";

export default function ErrorPage () {
    const navigate = useNavigate()

    return (

    <section className="error-page-ctr">
        <h1>error 404 not found</h1>
        <button onClick={() => navigate("/")}>return to home</button>
    </section>

    );

}