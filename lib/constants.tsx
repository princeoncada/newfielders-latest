import heroImage from "@/assets/Home/Hero/Hero.jpg";
import nursery from "@/assets/Home/Programs/Nursery.png";
import kinder from "@/assets/Home/Programs/Kinder.png";
import preKinder from "@/assets/Home/Programs/PreKinder.png";
import elementary from "@/assets/Home/Programs/Elementary.png";
import contentImage from "@/assets/Home/Content/Image.png";
import docNap from "@/assets/Home/Founder/DOCNAP.png";
import firstQ from "@/assets/Shared/first q.jpg";
import secondQ from "@/assets/Shared/second q.jpg";
import thirdQ from "@/assets/Shared/third q.jpg";
import fourthQ from "@/assets/Shared/fourth q.jpg";
import welcomeBack from "@/assets/Shared/welbac.png";
import julyActivities from "@/assets/Shared/julact.png";
import newsFirst from "@/assets/Home/News/teacher.jpg";

export const HEADER_CONTENT = {
  title: "The NewFields STEM School of Davao",
  subtitle: "Operated by ACCESSEDU, INC.",
  nav_links: [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/admission", label: "Admissions" },
    { href: "/news", label: "News" },
    { href: "/newfielders", label: "NewFielder's Life" },
    { href: "/contact", label: "Contact Us" },
  ],
}

export const HOME_CONTENTS = {
  hero: {
    title: "The NewFields STEM School of Davao",
    description: "Empowering the next generation of Filipino innovators, we cultivate STEM skills and critical thinking for global readiness. Join us in shaping a brighter future through innovative and collaborative education.",
    image: heroImage
  },
  programs: {
    title: "Programs Offered",
    content: [
      {
        image: nursery,
        alt: "Nursery"
      },
      {
        image: kinder,
        alt: "Kinder"
      },
      {
        image: preKinder,
        alt: "PreKinder"
      },
      {
        image: elementary,
        alt: "Elementary"
      }
    ]
  },
  content: {
    header: <>
      The&nbsp;
      <span className="text-[#D2A808] underline">
        NewFields
      </span>
      <div>STEM School</div>
    </>,
    subheader: "Empowering Filipino Youth Through STEM",
    image: contentImage,
    description: "At The NewFields STEM School of Davao, we are dedicated to nurturing critical thinking and problem-solving skills in Filipino youth. Our innovative approach prepares students to become future leaders and innovators, equipped for global competitiveness.",
    button: "Read more"
  },
  founder: {
    image: docNap,
    quote: "Empowering the next generation of Filipino innovators, we cultivate STEM skills and critical thinking for global readiness. Join us in shaping a brighter future through innovative and collaborative education.",
    role: "Dr. Napoleon K. Juanillo Jr. | Founder"
  },
  gallery: {
    title: "Gallery",
    content: [
      {
        title: "First Quarter Activities",
        image: firstQ,
        link: "https://www.youtube.com/watch?v=x7Op3VT6Ezs&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      },
      {
        title: "Second Quarter Activities",
        image: secondQ,
        link: "https://www.youtube.com/watch?v=ia1cSZCSbCU&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      },
      {
        title: "Third & Fourth Quarter Activities",
        image: thirdQ,
        link: "https://www.youtube.com/watch?v=KzHPmdXXO2U&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      },
      {
        title: "Academic Interschool Activities",
        image: fourthQ,
        link: "https://www.youtube.com/watch?v=D6JjEId-Fo8&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      }
    ]
  },
  news: {
    title: "News & Updates",
    posters: [
      {
        image: welcomeBack,
        alt: "Welcome Back",
        link: "/news"
      },
      {
        image: julyActivities,
        alt: "July Activities",
        link: "/news"
      }
    ],
    updates: [
      {
        title: <>Teacher&apos;s Summer <br /> Seminars and Workshops</>,
        description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta quae iure porro alias minima eaque sunt exercitationem, minus ullam corporis assumenda accusantium, tempora quos consequatur, aliquid incidunt fugit iusto quam.",
        image: newsFirst,
        alert: "First News",
        link: "/news"
      }
    ]
  }
}