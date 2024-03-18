import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
	return (
		<div className="pt-4 mt-2 ml-4 bg-gray-300 md:w-1/3 rounded-xl">
			<h2 className="text-3xl text-center ">Bookmarks: {bookmarks.length}</h2>
			{bookmarks?.map((bookmark) => (
				<Bookmark
					key={bookmark.id}
					bookmark={bookmark}
				></Bookmark>
			))}
		</div>
	);
};

Bookmarks.propTypes = {
	bookmarks: PropTypes.array,
};

export default Bookmarks;
