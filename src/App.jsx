import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
	const [bookmarks, set_bookmarks] = useState([]);

	const handleAddToBookmark = (blog) => {
		console.log("bookmarks adding soon");
	};

	return (
		<>
			<Header></Header>
			<div className="md:flex max-w-7xl mx-auto">
				<Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
				<Bookmarks></Bookmarks>
			</div>
		</>
	);
}

export default App;
