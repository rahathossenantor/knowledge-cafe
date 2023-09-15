import bookmarkIcon from "../../assets/bookmarkIcon.svg"
import PropTypes from 'prop-types'

const Blog = ({blog, addToBookmarks, markAsRead}) => {
    const {id, cover, author, author_img, title, posted_date, hashtags, reading_time} = blog;
    return (
        <div>
            <div className="w-full p-3">
                <div className="w-full">
                    <img src={cover} className="inline-block w-full" alt="blog-image" />
                </div>
                <div className="flex items-center justify-between my-3">
                    <div className="flex gap-3 items-center">
                        <div><img src={author_img} className="inline-block w-14" alt="author-image" /></div>
                        <div>
                            <h3 className="text-[20px] text-black font-semibold">{author}</h3>
                            {/* <p>Mar 14 (4 Days ago)</p> */}
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div>
                        <h4>{reading_time} min read <button onClick={() => addToBookmarks(blog)}><img className="inline-block" src={bookmarkIcon} alt="icon" /></button></h4>
                    </div>
                </div>
                <h1 className="text-4xl text-black my-3">{title}</h1>
                <div className="flex gap-4 my-2">
                    <p className="">#{hashtags[0]}</p>
                    <p className="">#{hashtags[1]}</p>
                </div>
                <button onClick={() => markAsRead(id, reading_time)}><span href="" className="text-blue-700 underline font-semibold">Mark as read</span></button>
            </div>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    addToBookmarks: PropTypes.func.isRequired,
    markAsRead: PropTypes.func.isRequired
}

export default Blog;