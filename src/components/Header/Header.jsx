import profile from "../../../src/assets/images/profile.png";

const Header = () => {
	return (
		<header className="flex items-center justify-between p-4 mx-auto border-b-2 max-w-7xl">
			<h1 className="text-4xl font-bold">Knowledge Cafe</h1>
			<img
				src={profile}
				alt=""
			/>
		</header>
	);
};

export default Header;
