import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div></div>
    );
};

export default Blogs;