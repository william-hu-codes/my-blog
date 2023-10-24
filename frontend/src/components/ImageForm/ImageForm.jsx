import { getS3Url } from "../../utilities/posts-service"
import { sendS3Url } from "../../utilities/posts-service"
import { useEffect, useState, useRef } from "react"
import useFirstRender from "../UseFirstRender/UseFirstRender"
import Loader from "../Loader/Loader"
import "./ImageForm.css"

export default function ImageForm({imageFormData, setImageFormData, imageUrl, setImageUrl}) {

    // below state has been moved to parent component
    // const [imageFormData, setImageFormData] = useState()
    // const [imageUrl, setImageUrl] = useState("")

    const firstRender = useFirstRender()
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        if (!firstRender) {
            handleSubmit()
        }
      }, [imageFormData])

    async function handleSubmit(evt) {
        // evt.preventDefault()
        const file = imageFormData
        try {
            setIsLoading(true)
            const { url } = await getS3Url()
            // console.log(url)
            setImageUrl(await sendS3Url(url, imageFormData))
            // console.log(imageUrl)
            setIsLoading(false)
        }catch (error) {
            console.log(error)
        }
    }

    function handleImageFormChange(evt) {
        if (evt.target.files && evt.target.files[0]) {
            setImageFormData(evt.target.files[0])
            // console.log(evt.target.files[0])
        }
    }

    // console.log(imageFormData)
    // console.log(!!imageUrl)
    // console.log("imageurl", imageUrl)

    return (
        <section className="image-form-ctr">
            <input type="file" name="images" accept="image/*" onChange={handleImageFormChange} />
            <br />
            {isLoading ? <Loader /> : null}
            <br />
            {imageUrl && <img width="250px" src={imageUrl} alt="uploaded image" /> }

            {/* <button onClick={handleSubmit}>upload</button> */}

        </section>
    )
}