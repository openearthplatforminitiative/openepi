function Header() {
	return (
		<div>
			<header>
				<nav className=" border-gray-200 px-4 lg:px-6 py-2.5 bg-gradient-to-tr from-gray-900 to-gray-800 w-full">
					<div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
						<a href="/" className="flex items-center">
							<span className="self-center text-xl font-semibold whitespace-nowrap text-white">
								Open
							</span>
							<span className="self-center text-xl font-semibold whitespace-nowrap text-white">
								EPI
							</span>
						</a>

						<div className="flex items-center lg:order-2">
							<a
								href="/"
								className="text-white  font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 hover:bg-gray-700 focus:outline-none focus:ring-gray-800"
							></a>
						</div>
						<div
							className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
							id="mobile-menu-2"
						></div>
					</div>
				</nav>
			</header>
		</div>
	);
}

export default Header;
