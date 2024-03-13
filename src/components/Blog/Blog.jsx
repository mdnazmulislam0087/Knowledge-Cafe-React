import PropTypes from 'prop-types';
import { FaBookmark } from "react-icons/fa6";
// import bookMark from '..//..//assets/book'

const Blog = ({ blog, handleAddToBookmarks }) => {
    const {title, cover, reading_time, author, author_img, posted_date, hashtags} = blog;

    console.log(blog)
    return (
        <div className='mb-20'>
            <img className="w-full mb-8" src={cover} alt={`cover picture of the title ${title}`} />
            <div className='flex justify-between mb-4'>
                <div className='flex'>
                    <img className='w-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h3 className='text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>

                </div>
                <div>
                    <span>{reading_time} min read</span>
                    <button onClick={handleAddToBookmarks}
                    className='ml-4 text-2xl text-red-600'><FaBookmark /></button>
                </div>
            </div>
            <h2 className="text-rxl">Title: {title}</h2>
            {/* Hashtags */}

            <p>
                {
                    hashtags.map((hash, idx) => <span key = {idx}><a href="">#{hash}</a> </span>)
                }
            </p>


        </div>
    );
};

Blog.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    blog: PropTypes.object.isRequired
}

export default Blog;