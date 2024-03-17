import { useEffect } from "react";
import { useState } from "react";

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
			<h2 className="text-4xl">Blogs: {blogs.length}</h2>
		</div>
	);
};

export default Blogs;
