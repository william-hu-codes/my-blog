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
    const regex = new RegExp(`.*${tagFormData}.*`)
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
            // const newFormData = {...formData}
            // newFormData.tags.push(newTag._id)
            // setFormData(newFormData)
        }catch(error) {
            console.log(error)
        }
    }
    
    const newTag = tags?.find((tag) => tag.tagName === tagFormData.toLowerCase())
    console.log("newtag", newTag)
    
    useEffect(() => {
        handleRequest();
      }, [])

    function currentDate() {
        return new Date().toISOString().slice(0, 10);
    }

    // const filteredTags = tags?.filter((tag) => console.log(tag.tagName.match(regex)))
    const filteredTags = tags?.filter((tag) => regex.test(tag.tagName))
    // console.log("tagformdata", tagFormData)
    // console.log("tags", tags)
    // console.log("filteredtags", filteredTags)

    // const tagsList = tags?.map((tag, idx) => <TagItem tag={tag} idx={idx} formData={formData} setFormData={setFormData} />)
    const filteredTagsList = filteredTags?.map((tag, idx) => <TagItem tag={tag} idx={idx} formData={formData} setFormData={setFormData} />)
    const allTagNames = tags?.map((tag) => tag.tagName)
    console.log("allTagNames",allTagNames)
    // console.log("Tagslist" ,tagsList)

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
                <input required placeholder="search tag" type="text" name="tagName" value={tagFormData} onChange={(evt) => setTagFormData(evt.target.value)} />
                <button type="submit" disabled={allTagNames.includes(tagFormData)}>add tag</button>
                <div></div>
                {isLoading ? 
                    <Loader />
                    :
                    <div className="rendered-tags">
                        {filteredTagsList}
                    </div>
                }
            </form>

                {/* tags here here */}

        </section>
    )
}