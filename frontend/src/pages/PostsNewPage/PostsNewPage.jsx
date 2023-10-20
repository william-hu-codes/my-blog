import { useNavigate } from "react-router-dom"
import { useState } from "react"
import "./PostsNewPage.css"
import ImageForm from "../../components/ImageForm/ImageForm";

export default function PostsNewPage({user}) {
    const navigate = useNavigate()

    // image form states
    const [imageFormData, setImageFormData] = useState()
    const [imageUrl, setImageUrl] = useState(null)
    // image form states


    function currentDate() {
        return new Date().toISOString().slice(0, 10);
    }

    return !user ? (
        <>
            <h1>NOT AUTHORIZED</h1>
            <button onClick={() => navigate("/")}>return to home</button>
        </>

    ) : (
        <section className="posts-new-page-ctr">
            <h1>create post</h1>
            <form className="new-post">
                <label >title</label>
                <input type="text" name="title"/>
                <label >date</label>
                <input type="date" name="date"/>
                <label >location</label>
                <input type="text" name="location" />
                <label >upload image</label>
                <ImageForm imageFormData={imageFormData} setImageFormData={setImageFormData} imageUrl={imageUrl} setImageUrl={setImageUrl}/>
                {/* add cloudinary api here */}
                <label >body</label>
                <textarea name="body" cols="30" rows="10"></textarea>
            </form>
                <label >tags</label>
                {/* tags here here */}

        </section>
    )
}