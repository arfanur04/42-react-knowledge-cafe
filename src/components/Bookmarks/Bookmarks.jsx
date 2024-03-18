import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
	return (
		<div className="pt-4 mt-2 ml-4 bg-gray-300 md:w-1/3 rounded-xl">
			<div>
				<h4 className="text-4xl">Reading Time: {readingTime}</h4>
			</div>
			<h2 className="text-3xl text-center ">Bookmarks: {bookmarks.length}</h2>
			{bookmarks?.map((bookmark, idx) => (
				<Bookmark
					key={idx}
					bookmark={bookmark}
				></Bookmark>
			))}
		</div>
	);
};

Bookmarks.propTypes = {
	bookmarks: PropTypes.array,
	readingTime: PropTypes.number,
};

export default Bookmarks;
