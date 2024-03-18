import PropTypes from "prop-types";

const Bookmark = ({ bookmark }) => {
	const { title } = bookmark;

	return (
		<div>
			<h3 className="p-4 m-4 text-2xl bg-white rounded-xl">{title}</h3>
		</div>
	);
};

Bookmark.propTypes = {
	bookmark: PropTypes.object,
};

export default Bookmark;
