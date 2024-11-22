import React, { useEffect, useState } from "react";

const ErrorHandling = () => {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                return response.json();
            })
            .then(data => setPosts(data))
            .catch(err => setError(err.message));
    }, []);
    return (
        <div>
            <h1>Post Titles (ErrorHandling)</h1>
            {error ? (
                <p style={{ color: 'red' }}>Fetch error: {error}</p>
            ) : (
                <ol className="postList">
                    {posts.map(post => {
                        return (
                            <li key={post.id} className="postTitle">
                                {post.title}
                            </li>
                        );
                    })}
                </ol>
            )}
        </div>
    );
}
export default ErrorHandling;