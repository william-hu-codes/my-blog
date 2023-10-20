export default function TagItem({tag, idx, formData, setFormData}) {
    // console.log(tag)

    function handleClick(evt) {
        // console.log(evt.target.id)
        const tagId = evt.target.id
        if (formData.tags.includes(tagId)) {
            const newFormData = {...formData}
            const index = newFormData.tags.indexOf(tagId)
            newFormData.tags.splice(index, 1)
            setFormData(newFormData)
            // console.log(index)
            // console.log(formData)
        } else {
            const newFormData = {...formData}
            newFormData.tags.push(tagId)
            setFormData(newFormData)
            // console.log(formData)
        }
    }
 return (
    <p key={idx} id={tag._id} onClick={handleClick} className={`tag-card ${formData.tags.includes(tag._id) ? "active-tag" : "inactive-tag"}`}>{tag.tagName}</p>
    // <p></p>
 )
}