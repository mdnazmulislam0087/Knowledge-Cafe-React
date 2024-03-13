import PropTypes from 'prop-types';

const Blog = ({ blog }) => {

    console.log(blog)
    return (
        <div>
            
        </div>
    );
};

Blog.propTypes = {
    // You can declare that a prop is a specific JS primitive. By default, these
    // are all optional.
    blog: PropTypes.object.isRequired
}

export default Blog;