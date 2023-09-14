import blogImage1 from "../../assets/images/2.png"
import authorImage1 from "../../assets/images/boy1.png"
import bookmarkIcon from "../../assets/bookmarkIcon.svg"

const Blog = () => {
    return (
        <div>
            <div className="w-full p-3 rounded-xl">
                <div className="w-full rounded-xl">
                    <img src={blogImage1} className="inline-block w-full" alt="blog-image" />
                </div>
                <div className="flex items-center justify-between my-3">
                    <div className="flex gap-3 items-center">
                        <div><img src={authorImage1} className="inline-block w-14" alt="author-image" /></div>
                        <div>
                            <h3 className="text-[20px] text-black font-semibold">Mr. Raju</h3>
                            <p>Mar 14 (4 Days ago)</p>
                        </div>
                    </div>
                    <div>
                        <h4>05 min read <button><img className="inline-block" src={bookmarkIcon} alt="icon" /></button></h4>
                    </div>
                </div>
                <h1 className="text-4xl text-black my-3">How to get your first job as a self-taught programmer</h1>
                <div className="flex gap-4 my-2">
                    <p className="">#beginners</p>
                    <p className="">#programming</p>
                </div>
                <a href="" className="text-blue-700 underline font-semibold">Mark as read</a>
            </div>
        </div>
    );
};

export default Blog;