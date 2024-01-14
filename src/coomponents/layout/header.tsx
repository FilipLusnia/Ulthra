import Link from "next/link";
import UserIcon from '~/icons/user_icon.svg';

const navLinkStyle = "mx-5 font-semibold"

function Header() {
	return (
		<header className="w-full sticky top-0 z-40 bg-slate-900/90 backdrop-blur border-b border-slate-900/90">
			<div className="max-w-screen-xl mx-auto h-16 px-10 box-border flex items-center justify-between">
				<div>
					<p className="text-3xl font-semibold tracking-[0.2em] text-slate-50">
						ul<span className="text-orange-500">t</span>hra
					</p>
				</div>
				<div className="flex">
					<nav>
						<Link href='/shop/shirts' className={navLinkStyle}>Shirts</Link>
						<Link href='/shop/pants' className={navLinkStyle}>Pants</Link>
						<Link href='/shop/sneakers' className={navLinkStyle}>Sneakers</Link>
						<Link href='/shop/accessries' className={navLinkStyle}>Accessories</Link>
					</nav>
					<div className="h-auto w-px mx-5 bg-orange-500 "/>
					<Link href='/login' className="group flex items-center">
						<UserIcon className="w-auto h-5 ml-5 fill-slate-50 group-hover:fill-orange-500"/>
						<p className="ml-3 font-semibold">Sign In</p>
					</Link>
				</div>
			</div>
		</header>
	)
} 

export default Header;