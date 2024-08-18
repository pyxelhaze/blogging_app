import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Magnus Carlsen');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };
        fetch('https://blogging-point-server-0v9e.onrender.com.blogs', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(() => {
            navigate('/');
        })
    }
    return (<div className="create">
        <h2>Add a new blog</h2>
        <form onSubmit={handleSubmit}>
            <label>Blog title:</label>
            <input type="text"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)} />
            <label >Blog content:</label>
            <textarea className="textarea"
                required
                value={body}
                onChange={(e) => setBody(e.target.value)} >
            </textarea>
            <label >Blog author:</label>
            <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)} >
                <option value="Magnus Carlsen">Magnus Carlsen</option>
                <option value="Garry Kasparov">Garry Kasparov</option>
                <option value="Hikaru Nakamura">Hikaru Nakamura</option>
                <option value="Judit Polgar">Judit Polgar</option>
            </select>
            <button>Add blog</button>
        </form>
    </div >);
}

export default Create;
