import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks, readingTime}) => {
    // console.log(readingTime)
    return (
        


        <div className="md:w-1/3 bg-gray-300 ml-4 mt-10 p-4">
            <div className="bg-white">
                <h3 className="text-4xl text-center">Reading Time : {readingTime}</h3>
            </div>
            
            <h2 className="text-3xl text-center ">Bookmarked Blogs: {bookmarks.length} </h2>
            {
                bookmarks.map((bookmark,idx) =><Bookmark  key= {idx} bookmark= {bookmark}></Bookmark>)
            }


        </div>
    );
};

Bookmarks.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    Bookmarks: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func
}

export default Bookmarks;