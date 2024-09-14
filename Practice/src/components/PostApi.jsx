import React, { useState } from 'react';

function PostApi() {
    const [userId, setUserId] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [id,setId]=useState("");
    const [message, setMessage] = useState("");

    async function saveUser() {
        let data = { userId, title, body };
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                throw new Error('Network response was not ok');
            }

            const result = await response.json();
            console.log("result", result);
            setMessage("User saved successfully!");

            // Clear input fields
            setId("")
            setUserId("");
            setTitle("");
            setBody("");
        } catch (error) {
            console.error("Error:", error);
            setMessage("An error occurred while saving the user.");
        }
    }

    return (
        <>
            <h1>POST API Example</h1>
            <input 
                type="text" 
                name="id" 
                value={id} 
                onChange={(e) => setId(e.target.value)} 
                placeholder="ID"
            />
            <br /><br />
            <input 
                type="text" 
                name="userId" 
                value={userId} 
                onChange={(e) => setUserId(e.target.value)} 
                placeholder="User ID"
            /> 
            <br /> <br />
            <input 
                type="text" 
                name="title"  
                value={title} 
                onChange={(e) => setTitle(e.target.value)} 
                placeholder="Title"
            /> 
            <br /> <br />
            <input 
                type="text" 
                name="body"  
                value={body} 
                onChange={(e) => setBody(e.target.value)} 
                placeholder="Body"
            /> 
            <br /> <br />
            <button type="button" onClick={saveUser}>Save New User</button>
            <p>{message}</p>
        </>
    );
}

export default PostApi;
