import PropTypes from "prop-types";
import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark, handleMarkAsRead }) => {
	const [blogs, set_blogs] = useState([]);

	useEffect(() => {
		fetch("blogs.json")
			.then((res) => res.json())
			.then((data) => set_blogs(data))
			.catch((err) => console.error("err", err));
	}, []);

	return (
		<div className="md:w-2/3">
			<h1 className="text-4xl">Blogs: {blogs.length}</h1>
			{blogs?.map((blog) => (
				<Blog
					key={blog.id}
					blog={blog}
					handleAddToBookmark={handleAddToBookmark}
					handleMarkAsRead={handleMarkAsRead}
				></Blog>
			))}
		</div>
	);
};

Blogs.propTypes = {
	handleAddToBookmark: PropTypes.func,
	handleMarkAsRead: PropTypes.func,
};

export default Blogs;
