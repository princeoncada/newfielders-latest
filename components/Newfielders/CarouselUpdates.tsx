"use client";

import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
	const slides = [
		{
			image: "/images/updates/1.jpg",
			name: "first-slide",
		},
		{
			image: "/images/updates/2.jpg",
			name: "second-slide",
		},
		{
			image: "/images/updates/3.jpg",
			name: "third-slide",
		},
		{
			image: "/images/updates/4.jpg",
			name: "fourth-slide",
		},
		{
			image: "/images/updates/5.jpg",
			name: "fifth-slide",
		},
		{
			image: "/images/updates/6.jpg",
			name: "sixth-slide",
		},
		{
			image: "/images/updates/7.jpg",
			name: "seventh-slide",
		},
		{
			image: "/images/updates/8.jpg",
			name: "eighth-slide",
		},
		{
			image: "/images/updates/9.jpg",
			name: "ninth-slide",
		},
		{
			image: "/images/updates/10.jpg",
			name: "tenth-slide",
		},
	];


	const [currentSlide, setCurrentSlide] = useState(0);

	function prev() {
		setCurrentSlide((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
	}

	function next() {
		setCurrentSlide((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
	}

	return (
		<div className="w-full flex flex-row justify-between gap-4 relative mb-5">
			<button
				className=" flex justify-center items-center transition-colors hover:bg-[#686868] bg-[#333333] text-white p-1"
				onClick={prev}
			>
				<i className="bx bx-caret-left"></i>
			</button>

			<div className="flex flex-row overflow-hidden bg-[#F0F0F0] flex-grow">
				{slides.map((slide, index) => (
					<div
						key={slide.name}
						className="flex flex-col md:flex-row min-w-full h-full transition-transform ease-in-out duration-500 md:w-[3.9rem]"
						style={{
							transform: `translateX(${-currentSlide * 100}%)`,
						}}
					>
						<div className="h-full w-full flex flex-col justify-center items-center">
							<Image
								src={slide.image}
								alt={slide.name}
								width={1000}
								height={10}
								className="h-auto object-cover object-center my-0!"
							/>
						</div>
					</div>
				))}
			</div>

			<button
				className="flex justify-center items-center transition-colors hover:bg-[#686868] bg-[#333333] text-white p-1"
				onClick={next}
			>
				<i className="bx bx-caret-right"></i>
			</button>
		</div>
	);
};

export default Carousel;
