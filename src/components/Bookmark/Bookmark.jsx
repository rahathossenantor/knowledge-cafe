import PropTypes from 'prop-types'

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className="p-5 bg-white">
            <h3 className="text-xl text-gray-500">{title}</h3>
        </div>
    );
};

Bookmark.propTypes = {
    bookmark: PropTypes.object.isRequired
}

export default Bookmark;