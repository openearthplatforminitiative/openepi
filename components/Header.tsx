export default function Header() {
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
					</div>
				</nav>
			</header>
		</div>
	);
}
