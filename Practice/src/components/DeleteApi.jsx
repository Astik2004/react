import React, { useEffect, useState } from 'react';

function PostManager() {
    const [posts, setPosts] = useState([]);
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [selectedId, setSelectedId] = useState(null);

    useEffect(() => {
        getPosts();
    }, []);

    function getPosts() {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(result => result.json())
            .then(resp => {
                setPosts(resp);
                if (resp.length > 0) {
                    setUserId(resp[0].userId || "");
                    setTitle(resp[0].title || "");
                    setBody(resp[0].body || "");
                    setSelectedId(resp[0].id || null);
                }
            })
            .catch(error => console.error("Error fetching posts:", error));
    }

    function deletePost(id) {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
            method: 'DELETE'
        })
            .then(result => result.json())
            .then(resp => {
                console.log("Deleted:", resp);
                getPosts();
            })
            .catch(error => console.error("Error deleting post:", error));
    }

    function selectPost(id) {
        const item = posts.find(post => post.id === id);
        if (item) {
            setUserId(item.userId || "");
            setTitle(item.title || "");
            setBody(item.body || "");
            setSelectedId(item.id || null);
        }
    }

    function updatePost() {
        if (selectedId === null) {
            console.warn("No post selected for update.");
            return;
        }

        const item = { userId, title, body };
        fetch(`https://jsonplaceholder.typicode.com/posts/${selectedId}`, {
            method: 'PUT',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(result => result.json())
            .then(resp => {
                console.log("Updated:", resp);
                getPosts();
            })
            .catch(error => console.error("Error updating post:", error));
    }

    return (
        <div className="App">
            <h1>Manage Posts</h1>
            <table border="1" style={{ float: 'left' }}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>User ID</th>
                        <th>Title</th>
                        <th>Body</th>
                        <th>Operations</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((item) => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.userId}</td>
                            <td>{item.title}</td>
                            <td>{item.body}</td>
                            <td>
                                <button onClick={() => deletePost(item.id)}>Delete</button>
                                <button onClick={() => selectPost(item.id)}>Update</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <input
                    type="number"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    placeholder="User ID"
                /> <br /><br />
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Title"
                /> <br /><br />
                <textarea
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    placeholder="Body"
                /> <br /><br />
                <button onClick={updatePost}>Update Post</button>
            </div>
        </div>
    );
}

export default PostManager;
