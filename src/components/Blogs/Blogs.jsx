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

	return <div></div>;
};

export default Blogs;
