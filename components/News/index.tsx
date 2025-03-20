import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/partials/Hero";
import CTA from "@/components/partials/CTA";
import GallerySection from "../partials/GallerySection";
import { HOME_CONTENTS } from "@/lib/constants";

export default function News() {
  return (
    <div className="bg-[#F0F0F0]">
      <Hero title="News" />

      <div className="flex flex-row md:px-4 h-auto relative bottom-16 gap-5 w-full mx-auto max-w-[1440px]">
        <section className="hidden lg:block w-1/5">
          <div className="flex flex-col gap-5 sticky top-28">
            <Link href={`/contact`} className="w-full">
              <Image
                src={`/svg/Contact Us.svg`}
                width={1000}
                height={1000}
                alt="contact-us-cta"
              />
            </Link>
            <Link href={`/admission`} className="w-full">
              <Image
                src={`/svg/Admission.svg`}
                width={1000}
                height={1000}
                alt="admission-cta"
              />
            </Link>
            <div className="flex flex-col gap-3.5 w-full">
              <h1 className="font-heading text-[#00582C] text-[28px] font-medium">
                Contents
              </h1>
              <div className="flex flex-col gap-2 font-body text-[#333333] text-[18px]">
                <Link href={`#ann-section`}>Announcements</Link>
                <Link href={`#high-section`}>
                  Highlights and Milestones
                </Link>
                <Link href={`#learn-section`}>
                  Learning the NewField&apos;s Way
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white w-full max-w-full px-4 lg:px-12 prose">

          <h1 id="ann-section">
            Announcements
          </h1>
          <p>
            Welcome to the official announcements and updates
            page of The Newfield&apos;s STEM School of Davao! Here,
            you&apos;ll find the latest news, important dates, and
            crucial information to keep students, parents, and
            staff in the loop.
          </p>

          <div className="flex flex-col lg:flex-row gap-4">
            <div>
              <Image
                className="rounded-md shadow-lg"
                src="/images/welbac.png"
                width={1000}
                height={100}
                alt="placeholder"
              ></Image>
            </div>
            <div>
              <Image
                className="rounded-md shadow-lg"
                src="/images/julact.png"
                width={1000}
                height={100}
                alt="placeholder"
              ></Image>
            </div>
          </div>

          <h1 id="high-section">
            Highlights and Milestones
          </h1>
          <h2>
            A Year of Vibrant Achievements
          </h2>
          <p>
            The 2023-2024 school year at NewFields STEM
            School of Davao was packed with exciting and
            enriching activities. Our community enjoyed
            regular monthly events like Buwan ng Wika,
            celebrating Filipino language and culture, and
            the festive UN Day and Christmas events that
            brought students and staff together in joyful
            celebration.
          </p>
          <h2>
            Special Events and Competitions
          </h2>
          <p>
            We had special highlights such as the BSP
            Camporee, where students developed leadership
            and survival skills, and STEM Day, showcasing
            innovative projects and experiments.
            Intellectual challenges like the Brain Boost
            Math and Science Quiz Bowl and the Spelling Bee
            pushed our students to excel, while the Literary
            Festival fostered public speaking and self
            esteem. Our Foundation Day marked the school&apos;s
            growth and achievements, and the first ever
            Parents and Teachers Sports Fest promoted
            camaraderie and fitness.
          </p>
          <p>
            Our students excelled in interschool
            competitions, winning the Grade School Modern
            Dance and securing 1st place in the Grade School
            Cheerdance. We also earned top spots in the
            Literary Festival, Spelling Bee, and DEPED
            Literary Festival, underscoring our dedication
            to academic excellence.
          </p>
          <p>
            Relive these memorable moments by watching our
            event recaps:
          </p>

          <GallerySection gallery={HOME_CONTENTS.gallery.content} />

          <h1 id="learn-section">
            Learning the NewField&apos;s Way
          </h1>
          <p>
            At ACCESSEDU, INC. (The NewFields STEM School of
            Davao), we make education an exciting journey of
            discovery. Our innovative approach, from Nursery to
            Grade 6, aligns with the DEPED curriculum and
            incorporates our unique STEM (Science, Technology,
            Engineering, and Mathematics) focus. Our dedicated
            teachers design interactive activities to ignite a
            lifelong passion for learning.
          </p>
          <h2>
            Hands-On Learning
          </h2>
          <p>
            Hands on experimentation is a cornerstone of the
            NewFields experience. Students engage in
            practical activities like mixing household
            chemicals in chemistry or building simple
            machines in engineering projects, reinforcing
            theoretical knowledge and fostering critical
            thinking.
          </p>
          <h2>
            First-Hand Observations
          </h2>
          <p>
            Students explore plant life cycles in our garden
            or observe insects in their habitats, making
            science come alive beyond textbooks.
          </p>
          <h2>
            Beyond the Classroom
          </h2>
          <p>
            Community walks, tours, and field trips connect
            classroom learning to the real world. Visits to
            local markets, communities, and parks provide
            educational opportunities that enhance the DEPED
            curriculum.
          </p>

          <video
            src="/videos/vid-news.mp4"
            autoPlay
            muted
            loop
            controls
            width="100%"
          />
        </section>
      </div>
      <CTA />
    </div>
  );
}
