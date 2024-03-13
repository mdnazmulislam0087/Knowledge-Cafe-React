import PropTypes from 'prop-types';

const Bookmark = ({bookmark, readingTime}) => {
    const {title} = bookmark;
    

    return (
        <div className='bg-slate-200 p-4 m-4 rounded-xl'>
            <h2 className='text-2xl'>{title}</h2>
        </div>
    );
};



Bookmark.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    Bookmark: PropTypes.object.isRequired,
    handleAddToBookmarks : PropTypes.func
}
export default Bookmark;