import Link from "next/link";
import Image from "next/image";

export default function Footer() {
	return (
		<>
			{/* mobile view */}
			<footer className="bg-[#028141] text-white font-heading p-5 py-10 text-[14px] xl:hidden flex flex-col gap-5">
				<div>
					<Image
						src="/images/TNFSSD LOGO.png"
						alt="none"
						width="100"
						height="100"
					/>
				</div>
				<div>
					P9B, BLK 44, LOTS 7-16, DECA Homes
					<br />
					Tacunan, Davao City, Davao del Sur, 8000
				</div>
				<div>
					Landline: (082) 291 - 5036
					<br />
					Mobile: 0995 - 269 - 1712
					<br />
					Email: thenewfields.school@yahoo.com
				</div>
				<div className="flex flex-row gap-5">
					<div className="flex flex-col gap-1">
						<Link href="/about">About Us</Link>
						<Link href="/admission">Admissions</Link>
						<Link href="/news">Events</Link>
					</div>
					<div className="flex flex-col gap-1">
						<Link href="/newfielders">NewFielders Life</Link>
						<Link href="/contact">Contact Us</Link>
					</div>
				</div>
				<div className="flex flex-row gap-1 text-2xl">
					<Link href="#">
						<i className="bx bxl-facebook-square"></i>
					</Link>
					<Link href="#">
						<i className="bx bxl-instagram"></i>
					</Link>
					<Link href="#">
						<i className="bx bxl-linkedin-square"></i>
					</Link>
				</div>
			</footer>

			{/* desktop view */}
			<footer className="bg-[#028141] text-white">
				<div className="h-[250px] font-heading p-5 text-sm hidden xl:flex flex-row justify-evenly items-center max-w-[1280px] mx-auto">
					<div>
						<Image
							src="/images/TNFSSD LOGO.png"
							alt="none"
							width="180"
							height="100"
						/>
					</div>
					<div className="flex flex-col justify-between h-[140px] text-center">
						<div>
							P9B, BLK 44, LOTS 7-16, DECA Homes
							<br />
							Tacunan, Davao City, Davao del Sur, 8000
						</div>
						<div>
							Landline: (082) 291 - 5036
							<br />
							Mobile: 0995 - 269 - 1712
							<br />
							Email: thenewfields.school@yahoo.com
						</div>
					</div>

					<div className="flex flex-col justify-between h-[140px]">
						<div className="flex flex-row gap-12">
							<div className="flex flex-col gap-3">
								<Link href="/about">About Us</Link>
								<Link href="/admission">Admissions</Link>
								<Link href="/news">Events</Link>
							</div>
							<div className="flex flex-col gap-3">
								<Link href="/newfielders">
									NewFielders Life
								</Link>
								<Link href="/contact">Contact Us</Link>
							</div>
						</div>

						<div className="flex flex-row gap-1 text-4xl">
							<Link href="#">
								<i className="bx bxl-facebook-square"></i>
							</Link>
							<Link href="#">
								<i className="bx bxl-instagram"></i>
							</Link>
							<Link href="#">
								<i className="bx bxl-linkedin-square"></i>
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
}
