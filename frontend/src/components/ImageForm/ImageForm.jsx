import { getS3Url } from "../../utilities/posts-service"
import { useState } from "react"
import "./ImageForm.css"

export default function ImageForm() {

    const [imageFormData, setImageFormData] = useState("")
    // const imageForm = document.querySelector("#imageForm")
    const imageInput = document.querySelector("#imageInput")

    async function handleSubmit(evt) {
        evt.preventDefault()
        const file = imageFormData

        // get secure url from our server
        const { url } = await getS3Url()
        console.log(url)
        // 
    }

    return (
        <section className="image-form-ctr">
            <h1>image form</h1>
            <input type="file" name="images" value={imageFormData} onChange={(evt) => setImageFormData(evt.target.value) } />
            <button onClick={handleSubmit}>submit</button>
        </section>
    )
}