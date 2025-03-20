"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { HEADER_CONTENT } from "@/lib/constants";

export default function Header() {
	const [showMenu, setShowMenu] = useState(false);

	function toggleMenu() {
		setShowMenu((prev) => !prev);
	}

	function closeMenu() {
		setShowMenu(false);
	}

	return (
		<>
			{/* Mobile Header */}
			<header className="sticky top-0 bg-white flex flex-row justify-between p-5 z-50 font-heading lg:hidden w-full">
				<div className="flex flex-row gap-2">
					<div className="flex items-center">
						<Image
							src="/images/TNFSSD LOGO.png"
							alt="The NewFields STEM School of Davao"
							width={60}
							height={100}
						/>
					</div>
					<div className="flex flex-col justify-center">
						<h1 className="text-sm font-medium text-[#00582C]">
							{HEADER_CONTENT.title}
						</h1>
						<h2 className="text-[10px] text-[#333333]">
							{HEADER_CONTENT.subtitle}
						</h2>
					</div>
				</div>
				<button
					onClick={toggleMenu}
					className="flex flex-col justify-center items-end gap-1 cursor-pointer"
					aria-label="Toggle Menu"
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

			{/* Mobile Menu */}
			<menu className="lg:hidden fixed top-20 z-20 w-full">
				<div
					className={`absolute w-screen max-w-full bg-[#F0F0F0] text-[#333333] flex flex-col items-end p-5 transition-all duration-300 ease-in-out ${
						showMenu ? "translate-y-0" : "-translate-y-64"
					} font-heading gap-3 text-sm`}
				>
					{HEADER_CONTENT.nav_links.map(({ href, label }) => (
						<Link key={href} href={href} onClick={closeMenu}>
							{label}
						</Link>
					))}
				</div>
			</menu>

			{/* Desktop Header */}
			<header className="bg-white z-50 font-heading sticky top-0 w-full">
				<div className="hidden lg:flex flex-row justify-between py-5 px-4 max-w-[1440px] mx-auto">
					<Link href="/" className="flex flex-row gap-4">
						<div className="flex items-center">
							<Image
								src="/images/TNFSSD LOGO.png"
								alt="The NewFields STEM School of Davao"
								width={70}
								height={70}
							/>
						</div>
						<div className="flex flex-col justify-center">
							<h1 className="text-[20px] font-medium text-[#00582C]">
								{HEADER_CONTENT.title}
							</h1>
							<h2 className="text-[16px] text-[#333333]">
								{HEADER_CONTENT.subtitle}
							</h2>
						</div>
					</Link>
					<nav className="flex flex-row items-center gap-6 text-[#017E3F] text-[14.5px]">
						{HEADER_CONTENT.nav_links.map(({ href, label }) => (
							<Link key={href} href={href}>
								{label}
							</Link>
						))}
					</nav>
				</div>
			</header>
		</>
	);
}
