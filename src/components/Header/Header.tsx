import Link from "next/link";
import ThemeToggleButton from "../customui/ThemeToggleButton";
import { AuroraText } from "../magicui/aurora-text";

const Header = () => {
	return (
		<header
			className="border-b shadow"
			aria-label="app-header">
			<div className="container mx-auto flex items-center justify-between px-6 py-3">
				<Link href={"/"}>
					<AuroraText
						className="text-2xl font-semibold"
						aria-label="App Name">
						Digital Clock
					</AuroraText>
				</Link>

				<nav className="flex items-center gap-4">
					<ThemeToggleButton />
				</nav>
			</div>
		</header>
	);
};

export default Header;
