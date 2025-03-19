import heroImage from "@/assets/Home/Hero/Hero.jpg";
import nursery from "@/assets/Home/Programs/Nursery.png";
import kinder from "@/assets/Home/Programs/Kinder.png";
import preKinder from "@/assets/Home/Programs/PreKinder.png";
import elementary from "@/assets/Home/Programs/Elementary.png";
import contentImage from "@/assets/Home/Content/Image.png";
import docNap from "@/assets/Home/Founder/DOCNAP.png";
import welcomeBack from "@/assets/Home/News/welbac.png";
import julyActivities from "@/assets/Home/News/julact.png";
import newsFirst from "@/assets/Home/News/teacher.jpg";

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
        image: "/images/first q.jpg",
        link: "https://www.youtube.com/watch?v=x7Op3VT6Ezs&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      },
      {
        title: "Second Quarter Activities",
        image: "/images/second q.jpg",
        link: "https://www.youtube.com/watch?v=ia1cSZCSbCU&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      },
      {
        title: "Third & Fourth Quarter Activities",
        image: "/images/third q.jpg",
        link: "https://www.youtube.com/watch?v=KzHPmdXXO2U&ab_channel=TheNewFieldsSTEMSchoolofDavao"
      },
      {
        title: "Academic Interschool Activities",
        image: "/images/fourth q.jpg",
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