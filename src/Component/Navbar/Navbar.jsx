import React from "react";
import "./Navbar.css";
import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
function Navbar() {
	const [click, setClick] = React.useState(false);

	const handleClick = () => setClick(!click);
	const Close = () => setClick(false);
	return (
		<>
			<div className="navbar">
				<ul>
					<li>
						<Link
							to="/"
							className="nav-links"
							onClick={click ? handleClick : null}
						>
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/shader"
							className="nav-links"
							onClick={click ? handleClick : null}
						>
							Shaders
						</Link>
					</li>
					<li>
						<Link
							to="/model"
							className="nav-links"
							onClick={click ? handleClick : null}
						>
							3D-Model
						</Link>
					</li>
					{localStorage.token && (
						<>
							<li>
								<Link
									to="/owned"
									className="nav-links"
									onClick={click ? handleClick : null}
								>
									Owned Items
								</Link>
							</li>
							<li>
								<Link
									to="/sold"
									className="nav-links"
									onClick={click ? handleClick : null}
								>
									Created Items
								</Link>
							</li>
						</>
					)}

					{localStorage.token ? (
						<>
							<Button radius="xl">
								<Link
									to="/sell"
									className="nav-links"
									onClick={click ? handleClick : null}
								>
									Sell Asset
								</Link>
							</Button>
							<Button
								radius="xl"
								onClick={() => {
									localStorage.clear();
									window.location = "/";
								}}
							>
								Log Out
							</Button>
						</>
					) : (
						<>
							<Button radius="xl">
								<Link
									to="/signup"
									className="nav-links"
									onClick={click ? handleClick : null}
								>
									Signup
								</Link>
							</Button>
							<Button radius="xl">
								<Link
									to="/login"
									className="nav-links"
									onClick={click ? handleClick : null}
								>
									Login
								</Link>
							</Button>
						</>
					)}
				</ul>
			</div>
		</>
	);
}

export default Navbar;
