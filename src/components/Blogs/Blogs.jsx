import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import Bookmark from "../Bookmark/Bookmark";

const Blogs = () => {

    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch("https://raw.githubusercontent.com/ProgrammingHero1/react-knowledge-cafe/main/public/blogs.json")
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);

    return (
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5">
            <div className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[100%] w-[100%] border rounded-xl">
                <Blog></Blog>
                <Blog></Blog>
            </div>
            <div className="border 2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] w-[100%] p-3 rounded-xl">
                <div className="border p-3 text-center mb-3 rounded-xl">
                    <h3 className="text-2xl text-[#6047EC] font-semibold">Spent time on read : <span>177</span> min</h3>
                </div>

                <div className="bg-[#1111110D] p-3 rounded-xl">
                    <div className="p-3">
                        <h3 className="text-2xl text-black font-semibold">Bookmarked Blogs: <span>8</span></h3>
                    </div>

                    <div className="flex flex-col gap-3">
                        <Bookmark></Bookmark>
                        <Bookmark></Bookmark>
                        <Bookmark></Bookmark>
                        <Bookmark></Bookmark>
                        <Bookmark></Bookmark>
                        <Bookmark></Bookmark>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;