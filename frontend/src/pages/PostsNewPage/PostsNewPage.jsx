import { useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import Loader from "../../components/Loader/Loader";
import { getTags, createTag } from "../../utilities/tags-service"
import TagItem from "./TagItem";
import "./PostsNewPage.css"
import ImageForm from "../../components/ImageForm/ImageForm";

export default function PostsNewPage({user}) {
    const navigate = useNavigate()

    // image form states
    const [imageFormData, setImageFormData] = useState()
    const [imageUrl, setImageUrl] = useState(null)
    const [isLoading, setIsLoading] = useState(false)
    const [tags, setTags] = useState([])
    const [formData, setFormData] = useState({
        date: currentDate(),
        tags: []
    })
    const [tagFormData, setTagFormData] = useState("")
    // image form states

    async function handleRequest() {
        const response = await getTags();
        if (typeof response === "object") {
            setTags(response)
            setIsLoading(false)
        } else {
            console.log("error: ", response)
        }
    }

    function handleChange(evt) {
        const newFormData = {...formData, [evt.target.name]: evt.target.value}
        setFormData(newFormData)
    }

    async function handleAddTag(evt) {
        evt.preventDefault()
        const tagData = {tagName: tagFormData.toLowerCase()}
        try {
            await createTag(tagData)
            await handleRequest()
        }catch(error) {
            console.log(error)
        }
    }

    console.log("tags", tags)
    console.log("tags form", tagFormData)

    useEffect(() => {
        handleRequest();
      }, [])

    function currentDate() {
        return new Date().toISOString().slice(0, 10);
    }

    const tagsList = tags?.map((tag, idx) => <TagItem tag={tag} idx={idx} />)
    console.log("Tagslist" ,tagsList)

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
                <input type="text" name="title" value={formData.title} onChange={handleChange} />
                <label >date</label>
                <input type="date" name="date" value={formData.date} onChange={handleChange} />
                <label >location</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
                <label >upload image</label>
                <ImageForm imageFormData={imageFormData} setImageFormData={setImageFormData} imageUrl={imageUrl} setImageUrl={setImageUrl}/>
                {/* add cloudinary api here */}
                <label >body</label>
                <textarea name="body" cols="30" rows="10" value={formData.body} onChange={handleChange} ></textarea>
            </form>
            <form className="tags-ctr" onSubmit={handleAddTag}>
                <label >tags</label>
                <input type="text" name="tagName" value={tagFormData} onChange={(evt) => setTagFormData(evt.target.value)} />
                <button type="submit">add tag</button>
                <div></div>
                {isLoading ? 
                    <Loader />
                    :
                    <div className="rendered-tags">
                        {tagsList}
                    </div>
                }
            </form>

                {/* tags here here */}

        </section>
    )
}