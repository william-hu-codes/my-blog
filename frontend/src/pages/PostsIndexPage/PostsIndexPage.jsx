import "./PostsIndexPage.css"
import { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import { Link } from "react-router-dom";
import { getPosts } from "../../utilities/posts-service";
import PostItem from "./PostItem";

export default function PostIndexPage ({user}) {
    const [posts, setPosts] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    async function handleRequest() {
        const response = await getPosts();
        if (typeof response === "object") {
            setPosts(response)
            setIsLoading(false)
        } else {
            console.log("error: ", response)
        }
    }
    useEffect(() => {
        handleRequest();
      }, [])

    const postsList = posts?.map((post, idx) => < PostItem post={post} idx={idx} handleRequest={handleRequest} />)

    return isLoading ? <Loader /> :
      (
        <section className="post-index-page-ctr">
            <h1>posts</h1>
            {postsList}
        </section>
      )
}