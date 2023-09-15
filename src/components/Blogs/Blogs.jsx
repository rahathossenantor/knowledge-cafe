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

    const [bookmarks, setBookmarks] = useState([]);

    const addToBookmarks = (bookmark) => {
        setBookmarks([...bookmarks, bookmark]);
    }

    const [readingTime, setReadingTime] = useState(0);

    const markAsRead = (id, time) => {
        setReadingTime(readingTime+time);
        const udatedBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
        setBookmarks(udatedBookmarks);
    }

    return (
        <div className="flex 2xl:flex-row xl:flex-row lg:flex-row md:flex-col flex-col gap-5">
            <div className="2xl:w-[65%] xl:w-[65%] lg:w-[65%] md:w-[100%] w-[100%] border">
                {blogs.map(blog => <Blog key={blog.id} blog={blog} addToBookmarks={addToBookmarks} markAsRead={markAsRead}></Blog>)}
            </div>
            <div className="border 2xl:w-[35%] xl:w-[35%] lg:w-[35%] md:w-[100%] w-[100%] p-3">
                <div className="border p-3 text-center mb-3">
                    <h3 className="text-2xl text-[#6047EC] font-semibold">Spent time on read: {readingTime} min</h3>
                </div>

                <div className="bg-[#1111110D] p-3">
                    <div className="p-3">
                        <h3 className="text-2xl text-black font-semibold">Bookmarked Blogs: {bookmarks.length}</h3>
                    </div>

                    <div className="flex flex-col gap-3">
                        {bookmarks.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;