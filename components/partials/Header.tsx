"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	function handleClick() {
		setShowMenu((x) => !x);
	}

	return (
		<>
			<header className="sticky top-0 bg-white flex flex-row justify-between p-5 z-50 font-heading lg:hidden w-full">
				<div className="flex flex-row gap-2">
					<div className="flex items-center">
						<Image
							src="/images/TNFSSD LOGO.png"
							alt="none"
							width="60"
							height="100"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<div className="text-sm font-medium text-[#00582C]">
							The NewFields STEM School of Davao
						</div>
						<div className="text-[10px] text-[#333333]">
							Operated by ACCESSEDU, INC.
						</div>
					</div>
				</div>
				<button
					onClick={handleClick}
					className="flex flex-col justify-center items-end gap-1"
				>
					<div
						className={`w-6 h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "-rotate-45 translate-y-2" : ""
						}`}
					></div>
					<div
						className={`h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "w-0" : "w-6"
						}`}
					></div>
					<div
						className={`w-6 h-1 bg-black transition-all duration-300 ease-in-out ${
							showMenu ? "rotate-45 -translate-y-2" : ""
						}`}
					></div>
				</button>
			</header>

			<menu className="lg:hidden fixed top-20 z-20 w-full">
				<div
					className={`z-10 absolute w-screen max-w-full bg-[#F0F0F0] text-[#333333]  flex flex-col items-end p-5 transition-all duration-300 ease-in-out ${
						showMenu ? "" : "-translate-y-64"
					} font-heading gap-3 text-sm`}
				>
					<Link href="/">Home</Link>
					<Link href="/about">About Us</Link>
					<Link href="/admission">Admissions</Link>
					<Link href="/news">News</Link>
					<Link href="/newfielders">NewFielder&apos;s Life</Link>
					<Link href="/contact">Contact Us</Link>
				</div>
			</menu>

			<header className="bg-white z-50 font-heading sticky top-0 w-full">
				<div className="hidden lg:flex flex-row justify-between py-5 px-4 xl:px-0 max-w-[1440px] mx-auto">
					<Link href={`/`} className="flex flex-row gap-4">
						<div className="flex items-center">
							<Image
								src="/images/TNFSSD LOGO.png"
								alt="none"
								width="70"
								height="70"
							/>
						</div>
						<div className="flex flex-col justify-center">
							<div className="text-[20px] font-medium text-[#00582C]">
								The NewFields STEM School of Davao
							</div>
							<div className="text-[16px] text-[#333333]">
								Operated by ACCESSEDU, INC.
							</div>
						</div>
					</Link>
					<div className="flex flex-row items-center gap-6 text-[#017E3F] text-[14.5px]">
						<Link href="/">Home</Link>
						<Link href="/about">About Us</Link>
						<Link href="/admission">Admissions</Link>
						<Link href="/news">News</Link>
						<Link href="/newfielders">NewFielder&apos;s Life</Link>
						<Link href="/contact">Contact Us</Link>
					</div>
				</div>
			</header>
		</>
	);
}
