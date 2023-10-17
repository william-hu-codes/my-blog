import { useNavigate } from "react-router-dom"
import "./PostsNewPage.css"

export default function PostsNewPage({user}) {
    const navigate = useNavigate()
    return !user ? (
        <>
            <h1>NOT AUTHORIZED</h1>
            <button onClick={() => navigate("/")}>return to home</button>
        </>
    ) : (
        <section className="PostsNewPage">
            <h1>create post</h1>
            <form className="new-post">
                <label >Title</label>
            </form>
        </section>
    )
}