import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/partials/Hero";
import CTA from "@/components/partials/CTA";
import GallerySection from "../partials/GallerySection";
import { HOME_CONTENTS } from "@/lib/constants";

import Pisay from "@/assets/News/PISAY.png"
import Passers from "@/assets/News/PISAY (2).png"
import Quipper from "@/assets/News/QUIPPER QUIZBOWL.png"
import SpellingBee from "@/assets/News/Spelling bee.png"
import LitFest from "@/assets/News/LITFEST.png"
import Chess from "@/assets/News/Chess daprisa.png"
import Taekwondo from "@/assets/News/TKD daprisa.png"
import CheerDance from "@/assets/News/CHEERDANCE.png"
import Soccer from "@/assets/News/TKD Soccer.png"
import ModernDance from "@/assets/News/MODERN DANCE.png"
import Qualifiers from "@/assets/News/DCAA QUALIFIERS.png"
import Medalist from "@/assets/News/TKD DCAA BRONZE MEDALIST.png"

import welcomeBack from "@/assets/Shared/welbac.png";
import julyActivities from "@/assets/Shared/julact.png";

const NEWS_ASSETS = {
  pisay: {
    image: Pisay,
    alt: "PISAY SMART UP 2025",
  },
  passers: {
    image: Passers,
    alt: "PSHSS - NCE Passers",
  },
  quipper: {
    image: Quipper,
    alt: "Quipper Quiz Bowl",
  },
  spellingBee: {
    image: SpellingBee,
    alt: "DAPRISA Spelling Bee",
  },
  litFest: {
    image: LitFest,
    alt: "DAPRISA Literary Festival",
  },
  chess: {
    image: Chess,
    alt: "DAPRISA Chess",
  },
  taekwondo: {
    image: Taekwondo,
    alt: "DAPRISA Taekwondo",
  },
  cheerDance: {
    image: CheerDance,
    alt: "DAPRISA Cheer Dance",
  },
  soccer: {
    image: Soccer,
    alt: "DAPRISA Soccer",
  },
  modernDance: {
    image: ModernDance,
    alt: "DAPRISA Modern Dance",
  },
  qualifiers: {
    image: Qualifiers,
    alt: "DCAA Qualifiers",
  },
  medalist: {
    image: Medalist,
    alt: "DCAA Taekwondo Bronze Medalist",
  },
}

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
                src={welcomeBack}
                alt="Welcome Back"
              ></Image>
            </div>
            <div>
              <Image
                className="rounded-md shadow-lg"
                src={julyActivities}
                alt="July Activities"
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

          <h1>
            NewFielders Shine in Academics and Athletics: A Celebration of Excellence
          </h1>
          <p>
            At The NewFields STEM School of Davao, we take immense pride in the achievements of our students, who continue to excel in both academic and athletic areas. Here’s a roundup of our latest triumphs:
          </p>

          <h1>
            Academic Achievements
          </h1>
          <h2>
            PISAY SMART UP 2025
          </h2>
          <p>
            Our young innovators showcased their skills and intellect at the PISAY SMART UP 2025, proving that NewFielders are future-ready!
          </p>

          <Image
            src={NEWS_ASSETS.pisay.image}
            alt={NEWS_ASSETS.pisay.alt}
          />

          <h2>
            PSHSS - NCE Passers
          </h2>
          <p>
            Congratulations to our NewFielders who successfully passed the Philippine Science High School National Competitive Examination! Your hard work and dedication have truly paid off.
          </p>

          <Image
            src={NEWS_ASSETS.passers.image}
            alt={NEWS_ASSETS.passers.alt}
          />

          <h2>
            Quipper Quiz Bowl
          </h2>
          <p>
            Our NewFielders rose to the challenge and made a remarkable performance in the Quipper Quiz Bowl.
          </p>

          <Image
            src={NEWS_ASSETS.quipper.image}
            alt={NEWS_ASSETS.quipper.alt}
          />

          <h2>
            DAPRISA Spelling Bee
          </h2>
          <p>
            Spelling excellence was on full display as our students clinched notable placements in the DAPRISA Spelling Bee.
          </p>

          <Image
            src={NEWS_ASSETS.spellingBee.image}
            alt={NEWS_ASSETS.spellingBee.alt}
          />

          <h2>
            DAPRISA Literary Festival
          </h2>
          <p>
            Celebrating the power of words, our students made an impact at the DAPRISA Literary Festival, bringing home honors for their creativity and eloquence.
          </p>

          <Image
            src={NEWS_ASSETS.litFest.image}
            alt={NEWS_ASSETS.litFest.alt}
          />

          <h1>
            Athletic Excellence
          </h1>
          <h2>
            DAPRISA GAMES 2025
          </h2>
          <p>
            Our student-athletes dominated the DAPRISA Games across multiple categories:
          </p>
          <ul>
            <li>
              <p><strong>Chess Category:</strong> Strategic minds battled it out in the chess tournament, bringing pride to our school.</p>
              <Image
                src={NEWS_ASSETS.chess.image}
                alt={NEWS_ASSETS.chess.alt}
              />
            </li>
            <li>
              <p><strong>Taekwondo:</strong> Strength, agility, and discipline led our athletes to victory.</p>
              <Image
                src={NEWS_ASSETS.taekwondo.image}
                alt={NEWS_ASSETS.taekwondo.alt}
              />
            </li>
            <li>
              <p><strong>Cheer Dance:</strong> ur spirited team delivered an electrifying performance that wowed the crowd.</p>
              <Image
                src={NEWS_ASSETS.cheerDance.image}
                alt={NEWS_ASSETS.cheerDance.alt}
              />
            </li>
            <li>
              <p><strong>Soccer:</strong> A thrilling display of teamwork and sportsmanship in the soccer field.</p>
              <Image
                src={NEWS_ASSETS.soccer.image}
                alt={NEWS_ASSETS.soccer.alt}
              />
            </li>
          </ul>

          <h2>
            DAPRISA Musical Fest - Modern Dance
          </h2>
          <p>
            Grace and rhythm took center stage as our dancers showcased their talent at the DAPRISA Musical Fest.
          </p>
          <Image
            src={NEWS_ASSETS.modernDance.image}
            alt={NEWS_ASSETS.modernDance.alt}
          />

          <h2>
            DCAA Qualifiers & Medalists
          </h2>
          <p>
            Our Taekwondo warriors made it to the next level, qualifying for the DCAA and securing a bronze medal in the competition.
          </p>
          <ul>
            <li>
              <p><strong>DCAA Qualifiers:</strong></p>
              <Image
                src={NEWS_ASSETS.qualifiers.image}
                alt={NEWS_ASSETS.qualifiers.alt}
              />
            </li>
            <li>
              <p><strong>DCAA Bronze Medalists:</strong></p>
              <Image
                src={NEWS_ASSETS.medalist.image}
                alt={NEWS_ASSETS.medalist.alt}
              />
            </li>
          </ul>
          <p className="mb-8">
            These accomplishments are a testament to the hard work, perseverance, and dedication of our students, teachers, and coaches. Congratulations to all our NewFielders for making us proud! Keep soaring high!
          </p>
        </section>
      </div>
      <CTA />
    </div>
  );
}
