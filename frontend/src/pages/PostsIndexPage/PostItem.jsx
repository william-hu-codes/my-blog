import { useState } from "react"
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai"
import { incrementLike } from "../../utilities/posts-service"

export default function PostItem({post, idx}) {
    const [showMore, setShowMore] = useState(false)
    const [liked, setLiked] = useState(false)
    const [likes, setLikes] = useState(post.likes)
    
    async function handleLike(evt) {
        if (!liked) {
            setLiked(true)
            await incrementLike(post._id)
            setLikes(likes + 1)
        }        
    }

    console.log(post)
    return (
        <section className="post-item-ctr-background">
            <div className="post-item-ctr" key={idx}>
                <h3 className="post-title">{post.title}</h3>
                <p className="location">{post.location}</p>
                <p className="date">{new Date(post.date).toDateString()}</p>
                <img className="post-image" src={post.images[0]} alt="post image" />
                <div className="comment-like-ctr">
                        <p>{likes} {likes === 1 ? "like" : "likes"}</p>
                        <AiOutlineHeart className={`post-icon ${liked ? "hidden" : ""}`} onClick={handleLike}/>
                        <AiFillHeart className={`post-icon liked-icon ${liked ? "" : "hidden"}`}/>
                </div>
                <div className="post-tags">
                    {post.tags?.map((tag) => <p className="post-tag">{tag.tagName}</p>)}
                </div>
                {showMore ? 
                    <p className="post-body">{post.body}...</p>
                    :
                    <p className="post-body">{post.body.substring(0, 125)}...</p>
                }
                <button onClick={() => setShowMore(!showMore)}>{showMore ? "show less" : "show more"}</button>
            </div>
        </section>
    )
}