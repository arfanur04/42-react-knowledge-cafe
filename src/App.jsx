import { useState } from "react";
import "./App.css";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

function App() {
	const [bookmarks, set_bookmarks] = useState([]);
	const [readingTime, set_readingTime] = useState(0);

	const handleAddToBookmark = (blog) => {
		const isAddedBookmark = bookmarks.find((bl) => bl.id === blog.id);
		if (!isAddedBookmark) {
			const newBookmark = [...bookmarks, blog];
			set_bookmarks(newBookmark);
		}
	};

	const handleMarkAsRead = (id, time) => {
		set_readingTime(readingTime + time);

		// remove the read blog from bookmark
		console.log("remove bookmark", id);
		const remainingBookmark = bookmarks.filter(
			(bookmark) => bookmark.id !== id
		);
		set_bookmarks(remainingBookmark);
	};

	return (
		<>
			<Header></Header>
			<div className="mx-auto md:flex max-w-7xl">
				<Blogs
					handleAddToBookmark={handleAddToBookmark}
					handleMarkAsRead={handleMarkAsRead}
				></Blogs>
				<Bookmarks
					readingTime={readingTime}
					bookmarks={bookmarks}
				></Bookmarks>
			</div>
		</>
	);
}

export default App;
