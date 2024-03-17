import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = () => {
	const [blogs, set_blogs] = useState([]);

	useEffect(() => {
		fetch("../../../public/blogs.json")
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
				></Blog>
			))}
		</div>
	);
};

export default Blogs;
