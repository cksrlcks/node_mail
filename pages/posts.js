import React, { useState, useEffect } from 'react';
import fetch from 'isomorphic-fetch';

const Posts = () => {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        const loadPosts = async () => {
            const response = await fetch('https://batdog.kr/wp-json/wp/v2/posts/');
            const posts = await response.json();
            setPosts(posts);
        };
        loadPosts();
    }, []);
    return (
        <div>
            {posts.map((item, index) => (
                <div key={index}>
                    <p>{item.id}</p>
                    <p>{item.date}</p>
                    <p>{item.title.rendered}</p>
                </div>
            ))}
        </div>
    );
};

export default Posts;
