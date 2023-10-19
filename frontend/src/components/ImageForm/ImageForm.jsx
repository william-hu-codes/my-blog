import { getS3Url } from "../../utilities/posts-service"
import { useState } from "react"
import { sendS3Url } from "../../utilities/posts-service"
import "./ImageForm.css"

export default function ImageForm() {

    const [imageFormData, setImageFormData] = useState()
    // const [showImage, setShowImage] = useState(false)
    // const [newurl, setnewurl] = useState(null)
    // const imageForm = document.querySelector("#imageForm")
    // const imageInput = document.querySelector("#imageInput")

    async function handleSubmit(evt) {
        evt.preventDefault()
        const file = imageFormData
        try {
            const { url } = await getS3Url()
            console.log(url)
            const imageUrl = await sendS3Url(url, imageFormData)
            console.log(imageUrl)
            // setnewurl(imageUrl)
            // setShowImage(true)
        }catch (error) {
            console.log(error)
        }
        // get secure url from our server
        // 
    }

    // function handleImageFormChange(evt) {
    //     if (evt.target.files && evt.target.files[0]) {
    //         setImageFormData(URL.createObjectURL(evt.target.files[0]))
    //         console.log(URL.createObjectURL(evt.target.files[0]))
    //     }
    // }
    function handleImageFormChange(evt) {
        if (evt.target.files && evt.target.files[0]) {
            setImageFormData(evt.target.files[0])
            console.log(evt.target.files[0])
        }
    }

    console.log(imageFormData)

    return (
        <section className="image-form-ctr">
            <h1>image form</h1>

            <input type="file" name="images" accept="image/*" onChange={handleImageFormChange} />

            {/* <input type="file" name="images" accept="image/*" onChange={(evt) => setImageFormData(evt.target.files[0]) } /> */}

            <button onClick={handleSubmit}>submit</button>
            {/* <img src="https://william-hu-codes-my-blog-bucket.s3.ca-central-1.amazonaws.com/8086d559e78bc38f0716bb47255f3e4b"/> */}
        </section>
    )
}