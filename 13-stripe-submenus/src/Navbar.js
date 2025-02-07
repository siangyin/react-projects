import React from "react";
import logo from "./images/logo.svg";
import { FaBars } from "react-icons/fa";
import { useGlobalContext } from "./context";

const Navbar = () => {
	const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();

	function displaySubmenu(e) {
		const page = e.target.textContent;
		const tempBtn = e.target.getBoundingClientRect();
		const centerpoint = (tempBtn.left + tempBtn.right) / 2;
		const bottompoint = tempBtn.bottom - 3;
		openSubmenu(page, { centerpoint, bottompoint });
	}

	function handleSubmenu(e) {
		if (!e.target.classList.contains("link-btn")) {
			closeSubmenu();
		}
	}

	return (
		<nav className="nav">
			<div className="nav-center">
				<div className="nav-header">
					<img className="nav-logo" src={logo} alt="stripelogo"></img>
					<button className="btn toggle-btn" onClick={openSidebar}>
						<FaBars />
					</button>
				</div>
				<ul className="nav-links">
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							products
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							developers
						</button>
					</li>
					<li>
						<button className="link-btn" onMouseOver={displaySubmenu}>
							company
						</button>
					</li>
				</ul>
				<button className="btn signin-btn">Sign in</button>
			</div>
		</nav>
	);
};

export default Navbar;
