import { useState } from "react"

export default function PostItem({post, idx}) {
    const [showMore, setShowMore] = useState(false)
    console.log(post)
    return (
        <section className="post-item-ctr" key={idx}>
            <h3>{post.title}</h3>
            <h4 className="location">{post.location}</h4>
            <h4 className="date">{new Date(post.date).toDateString()}</h4>
            <img className="post-image" src={post.images[0]} alt="post image" />
            <div className="post-tags">
                {post.tags?.map((tag) => <p className="post-tag">{tag.tagName}</p>)}
            </div>
            {showMore ? 
                <p className="post-body">{post.body}...</p>
                :
                <p className="post-body">{post.body.substring(0, 125)}...</p>
            }
            <button onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</button>
        </section>
    )
}