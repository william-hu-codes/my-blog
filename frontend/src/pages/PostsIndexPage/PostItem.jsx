export default function PostItem({post, idx}) {
    return (
        <section className="post-item-ctr" key={idx}>
            <h3>{post.title}</h3>
            <h4 className="location">{post.location}</h4>
            <h4 className="date">{new Date(post.date).toDateString()}</h4>
            <img className="post-image" src={post.images[0]} alt="post image" />
        </section>
    )
}