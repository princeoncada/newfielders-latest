"use client";

import { useState } from "react";
import Image from "next/image";

const Carousel = () => {
    const slides = [
        {
            image: "/images/add-pre-1.jpg",
            name: "Canlas, Alexia Corserds",
            batch: "Batch 2021",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Bedia, Ulpiano III",
            batch: "Batch 2021",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Coloscos, Lyra",
            batch: "Batch 2022",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Silvallana, Ethan",
            batch: "Batch 2022",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Merquita, Yuri Fevrier",
            batch: "Batch 2023",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Agrazamendez, Amek Marileon",
            batch: "Batch 2023",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Esteban, Ghavin Zelton",
            batch: "Batch 2024",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
        {
            image: "/images/add-pre-2.jpg",
            name: "Bucoya, Princess Holleberry Khexian",
            batch: "Batch 2024",
            description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    function prev() {
        setCurrentSlide((curr) => curr === 0 ? slides.length - 1 : curr - 1);
    }

    function next() {
        setCurrentSlide((curr) => curr === slides.length - 1 ? 0 : curr + 1);
    }

    return (
        <div className="w-full flex flex-row justify-between gap-4 relative">
            <button className=" flex justify-center items-center transition-colors hover:bg-[#686868] bg-[#333333] text-white p-1" onClick={prev}>
                <i className="bx bx-caret-left"></i>
            </button>

            <div className="flex flex-row overflow-hidden bg-[#F0F0F0] flex-grow">
                {slides.map((slide, index) => (
                    <div key={slide.name} className="flex flex-col md:flex-row min-w-full h-full transition-transform ease-in-out duration-500 md:w-[4.9rem]" style={{
                        transform: `translateX(${-(currentSlide) * 100}%)`
                    }}>
                        <div className="bg-green-700 h-1 md:w-2 md:h-auto"></div>
                        <Image src={slide.image} alt={slide.name} width={1000} height={1000} className="md:w-1/2 aspect-square object-cover object-center mb-0!" />
                        <div className="p-2 md:p-4 flex flex-col justify-center gap-2">
                            <div className="flex flex-col font-heading">
                                <h3 className="text-[#017E3F] text-[22px] md:text-[26px] md:font-semibold leading-7 my-0!">{slide.name}</h3>
                                <p className="text-[#333333] text-[16px] md:text-[20px] my-0!">{slide.batch}</p>
                            </div>
                            <p className="font-body text-[#555555] text-[14px] md:text-[18px] leading-5 my-0!">
                                {slide.description}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <button className="flex justify-center items-center transition-colors hover:bg-[#686868] bg-[#333333] text-white p-1" onClick={next}>
                <i className="bx bx-caret-right"></i>
            </button>
        </div>
    );
};

export default Carousel;
