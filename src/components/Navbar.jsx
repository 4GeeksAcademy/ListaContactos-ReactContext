import { Link } from "react-router-dom";

export const Navbar = () => {

	return (
		<nav className="navbar navbar-light bg-light">

			<Link to="/">
				<span className="navbar-brand mb-0 h1 ms-5">🏠Home</span>
			</Link>


		</nav>
	);
};