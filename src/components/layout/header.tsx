"use client"
import { mobileBreakPoint } from "../../../constants";
import Link from "next/link";
import { useLayoutEffect, useState } from "react";

import UserIcon from '~/icons/user_icon.svg';

function Header() {
	const [ mobileNav, setMobileNav ] = useState(false)
	const [ isMobileNavOpen, setIsMobileNavOpen ] = useState(false)

	useLayoutEffect(() => {
		function checkWidth () {
			const isMobile = window.innerWidth <= mobileBreakPoint
			setMobileNav(isMobile)
			!isMobile && setIsMobileNavOpen(false)
		};
		checkWidth()

		window.addEventListener('resize', checkWidth);
		return () => {
			window.removeEventListener('resize', checkWidth);
		}
	}, []);

	return (
		<header className="w-full fixed flex justify-center z-40 bg-slate-900/90 backdrop-blur border-b border-slate-900/90">
			<div className="max-w-screen-2xl w-full h-16 px-10 box-border flex items-center justify-between">
				<div>
					<p className="text-3xl font-semibold tracking-[0.1em] text-slate-50">
						ult<span className="text-orange-500">h</span>ra
					</p>
				</div>
				{!mobileNav
					?
						<div className="flex">
							<nav>
								<Link href='/shop/shirts' className="mx-5 ">Shirts</Link>
								<Link href='/shop/pants' className="mx-5 ">Pants</Link>
								<Link href='/shop/sneakers' className="mx-5 ">Sneakers</Link>
								<Link href='/shop/accessries' className="mx-5 ">Accessories</Link>
							</nav>
							<div className="h-auto w-px mx-5 bg-orange-500 "/>
							<Link href='/login' className="group flex items-center ml-5">
								<UserIcon className="w-auto h-5 fill-slate-50 group-hover:fill-orange-500"/>
								<p className="ml-3">Sign In</p>
							</Link>
						</div>
					:
						<>
							<button className="w-5 group bg-transparent rounded-none px-0 py-0 hover:bg-transparent" onClick={() => setIsMobileNavOpen(true)}>
								<div className="w-full h-1 bg-slate-50 rounded group-hover:bg-orange-500"/>
								<div className="w-full h-1 bg-slate-50 rounded group-hover:bg-orange-500 mt-1"/>
							</button>
							{isMobileNavOpen &&
								<div className="h-screen w-56 fixed top-0 right-0 p-5 box-border bg-slate-900/90 backdrop-blur shadow-xl overflow-y-auto">	
									<div className="flex justify-between items-center">
										<p>Menu</p>
										<button className="w-5 relative group bg-transparent rounded-none px-0 py-0 hover:bg-transparent" onClick={() => setIsMobileNavOpen(false)}>
											<div className="w-full h-1 m-auto bg-slate-50 rounded group-hover:bg-orange-500 rotate-45"/>
											<div className="w-full h-1 absolute top-0 bottom-0 m-auto left-0 bg-slate-50 rounded group-hover:bg-orange-500 -rotate-45"/>
										</button>
									</div>
									<div className="h-px w-full mt-5 bg-orange-500"/>
									<div className="mt-7">
										<nav className="flex flex-col">
											<Link href='/shop/shirts' className="my-3 ">Shirts</Link>
											<Link href='/shop/pants' className="my-3 ">Pants</Link>
											<Link href='/shop/sneakers' className="my-3 ">Sneakers</Link>
											<Link href='/shop/accessries' className="my-3 ">Accessories</Link>
										</nav>
									</div>
								</div>
							}
						</>
				}
				</div>
		</header>
	)
} 

export default Header;