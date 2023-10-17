import "./ImageForm.css"

export default function ImageForm() {
    const imageForm = document.querySelector("#imageForm")
    const imageInput = document.querySelector("#imageInput")

    async function handleSubmit(evt) {
        evt.preventDefault()
        const file = imageInput.files[0]

        // get secure url from our server
        const { url } = await fetch("/s3Url").then(res => res.json())
        console.log(url)
        // 
    }

    return (
        <section className="image-form-ctr">
            <h1>image form</h1>
            <button onClick={handleSubmit}>submit</button>
        </section>
    )
}