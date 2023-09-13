import PropTypes from 'prop-types'
import Bookmark from '../bookmark/Bookmark';
const Bookmarkes = ({bookmark}) => {
    return (
        <div className="md:w-1/3 bg-gray-400 ml-10 rounded p-4 mt-4 text-center">
            <h2 className="text-3xl font-bold">Bookmarked Blogs : {bookmark.length}</h2>
            {
                bookmark.map(bookmarks =><Bookmark key={bookmark.id} bookmark={bookmarks}></Bookmark>)
            }
        </div>
    );
};

Bookmarkes.propTypes = {
    bookmark:PropTypes.array
}

export default Bookmarkes;