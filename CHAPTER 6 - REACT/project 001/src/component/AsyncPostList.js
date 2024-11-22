import React, { useEffect, useState } from "react";

function AsyncPostList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchPosts() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('error:', error);
            }
        }
        fetchPosts();
    }, []); 
    return (
        <div>
            <ul>
                {posts.map((post) => {
                    return <li key={post.id}>{post.title}</li>
                })}
            </ul>
        </div>
    )

}

export default AsyncPostList;