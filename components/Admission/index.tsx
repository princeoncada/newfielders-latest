import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/partials/Hero";
import CTA from "@/components/partials/CTA";

export default function Admissions() {
  return (
    <div className="bg-[#F0F0F0] max-w-full">
      <Hero title="Admissions" />

      <div className="flex flex-row md:px-4 h-auto relative bottom-16 gap-5 w-full mx-auto max-w-[1440px]">
        <menu className="hidden lg:block w-1/5">
        <div className="flex flex-col gap-5 sticky top-32">
            <Link href={`/contact`} className="w-full">
              <Image
                src={`/svg/Contact Us.svg`}
                width={1000}
                height={1000}
                alt="contact-us-cta"
              />
            </Link>
            <div className="flex flex-col gap-3.5 w-full">
              <h1 className="font-heading text-[#00582C] text-[28px] font-medium">
                Contents
              </h1>
              <div className="flex flex-col gap-2 font-body text-[#333333] text-[18px]">
                <Link href={`#choose-section`}>
                  Why Choose Us?
                </Link>
                <Link href={`#pre-section`}>
                  Programs: Pre-School
                </Link>
                <Link href={`#grade-section`}>
                  Programs: Grade School
                </Link>
                <Link href={`#req-section`}>
                  Required Documents
                </Link>
                <Link href={`#add-section`}>
                  Admission Procedure
                </Link>
                <Link href={`#enr-section`}>
                  Enrollment Procedure
                </Link>
              </div>
            </div>
          </div>
        </menu>

        <section className="bg-white w-full max-w-full px-4 lg:px-12 prose">

          <h1 id="choose-section">
            Why Choose Us?
          </h1>

          <video
            src="/videos/vid-admission.mp4"
            autoPlay
            muted
            loop
            controls
            width="100%"
          />

          <h2>
            Optimized STEM Curriculum
          </h2>
          <p>
            Our school offers a dynamic STEM curriculum that
            emphasizes hands-on learning and real-world
            applications. This approach nurtures critical
            thinking and problem-solving skills, essential for
            future careers in science, technology, engineering,
            and mathematics (STEM).
          </p>

          <h2>
            Modern Facilities and Qualified Faculty
          </h2>
          <p>
            We are proud of our modern facilities and highly
            qualified faculty. Our commitment to small class
            sizes ensures personalized attention, helping
            students thrive both academically and personally.
          </p>

          <h2>
            Enriching Extracurricular Activities
          </h2>
          <p>
            Beyond academics, we provide diverse extracurricular
            activities and partnerships with local industries.
            These opportunities enhance learning, foster growth,
            and offer valuable networking experiences.
          </p>

          <h2>
            Inclusive and Supportive Community
          </h2>
          <p>
            Our inclusive community values and encourages every
            student. We create an environment where all students
            feel supported and are motivated to reach their full
            potential.
          </p>

          <h2>
            Investing in the Future
          </h2>
          <p>
            By choosing The NewFields STEM School of Davao,
            students invest in their education and their future
            as innovators and leaders in STEM fields. Join us
            and be part of a transformative educational
            experience.
          </p>

          <h1>
            Programs Offered
          </h1>
          <h2 id="pre-section">
            Pre-School Level
          </h2>

          <Image
            src={`/images/add-pre-1.jpg`}
            alt="pre-1-img"
            width={1000}
            height={500}
          />

          <p>
            ACCESSEDU, INC. (The NewFields STEM School of
            Davao) has pioneered an innovative approach to
            early childhood education by being the first
            institution in Davao City to offer a
            comprehensive STEM (Science, Technology,
            Engineering, and Mathematics) curriculum
            starting from the Nursery level. This
            trailblazing program is designed to cultivate
            curiosity, critical thinking, and
            problem-solving skills among young learners,
            setting a strong foundation for their future
            academic and personal growth.
          </p>

          <Image
            src={`/images/add-pre-2.jpg`}
            alt="pre-2-img"
            width={1000}
            height={500}
          />

          <p>
            By integrating STEM concepts into the preschool
            curriculum, NewFields aims to nurture a generation
            of thinkers, creators, and innovators who are
            well-prepared for the challenges of the 21st
            century. At NewFields, the STEM curriculum for
            pre-schoolers is crafted to be engaging and
            age-appropriate, ensuring that learning is both fun
            and educational. Through hands-on activities,
            interactive lessons, and playful exploration,
            children are introduced to basic scientific
            principles, mathematical concepts, and technological
            tools. For example, students might engage in simple
            experiments to observe natural phenomena, use
            building blocks to understand engineering basics, or
            utilize age-appropriate software to develop early
            computational skills.
          </p>

          <Image
            src={`/images/add-pre-3.jpg`}
            alt="pre-1-img"
            width={1000}
            height={500}
          />

          <p>
            These activities not only make learning enjoyable
            but also encourage children to ask questions,
            explore their environment, and develop a love for
            learning. Moreover, the school emphasizes a holistic
            approach, incorporating elements of arts and
            social-emotional learning into the STEM framework.
            This ensures that while children are developing
            their analytical and technical skills, they are also
            growing socially, emotionally, and creatively. The
            NewFields STEM School of Davao is committed to
            providing a supportive and nurturing environment
            where each child is seen as a unique individual with
            their own strengths and interests.
          </p>

          <Image
            src={`/images/add-pre-4.jpg`}
            alt="pre-1-img"
            width={1000}
            height={500}
          />

          <p>
            By starting STEM education at such an early age,
            NewFields is helping to create a solid foundation
            for lifelong learning and success in an increasingly
            STEM-focused world.
          </p>

          <h2 id="grade-section">
            Grade School Level
          </h2>
          <Image
            src={`/images/add-gra-1.jpg`}
            alt="pre-1-img"
            width={1000}
            height={500}
          />
          <p>
            ACCESSEDU, INC. (The NewFields STEM School of
            Davao) offers a dynamic and comprehensive grade
            school program for students in Grades 1 through
            6. Built on the foundations of the Department of
            Education (DEPED) curriculum guide and
            standards, this program is enriched with
            specialized STEM (Science, Technology,
            Engineering, and Mathematics) curriculum
            designed to foster a deeper understanding and
            appreciation of these fields from an early age.
            By integrating these specialized elements,
            NewFields aims to cultivate critical thinking,
            problem-solving skills, and a passion for
            innovation among its young learners.
          </p>

          <Image
            src={`/images/add-gra-2.jpg`}
            alt="pre-1-img"
            width={1000}
            height={500}
          />

          <p>
            Beginning in Grade 4, students at NewFields are
            introduced to Science investigatory projects, which
            form a cornerstone of the school&apos;s emphasis on
            hands-on learning and scientific inquiry. These
            projects encourage students to engage actively with
            the scientific method, from hypothesis formation to
            experimentation and analysis. This early exposure
            helps to demystify complex scientific concepts and
            nurtures a sense of curiosity and exploration.
            Students work on projects that often relate to
            real-world problems, allowing them to see the
            practical applications of their studies and the
            impact of scientific research on everyday life.
          </p>

          <Image
            src={`/images/add-gra-3.jpg`}
            alt="pre-1-img"
            width={1000}
            height={500}
          />

          <p>
            Complementing the robust in-class curriculum,
            NewFields places a strong emphasis on experiential
            learning through various out-of-school trips. These
            excursions are carefully curated to align with the
            lessons being taught, providing students with
            firsthand experiences that reinforce and expand upon
            classroom instruction.
          </p>

          <div className="flex flex-row gap-3">
            <div className="w-8/12">
              <Image
                src={`/images/add-gra-4.jpg`}
                alt="pre-1-img"
                width={1000}
                height={100}
              />
            </div>
            <div className="w-6/12">
              <Image
                src={`/images/add-gra-3.jpg`}
                alt="pre-1-img"
                width={1000}
                height={100}
              />
            </div>
          </div>

          <p>
            Whether visiting science museums, participating in
            nature walks, or touring technology centers, these
            trips are designed to make learning tangible and
            memorable. By connecting theoretical knowledge with
            real-world experiences, NewFields ensures that
            students not only absorb information but also
            develop a lifelong love for learning and discovery.
          </p>

          <h1 id="req-section">
            Required Documents
          </h1>
          <h2>
            For Pre school (Nursery to Kinder)
          </h2>
          <ul>
            <li>
              PSA Birth Certificate - 2 photocopies
            </li>
            <li>2x2 recent ID Picture - 2 pc</li>
            <li>Php 200.00 Assessment Fee</li>
            <li>Result of Assessment</li>
          </ul>

          <h2>
            For Grade school
          </h2>
          <ul >
            <li>
              PSA Birth Certificate - 2 photocopies
            </li>
            <li>2x2 recent ID Picture - 2 pc</li>
            <li>
              Photocopy of latest report card (current
              school year)
            </li>
            <li>Php 200.00 Assessment Fee</li>
            <li>Result of Assessment</li>
          </ul>

          <h3 className="note">
            Note
          </h3>
          <ul>
            <li>
              All applicants must pass the oral and
              written assessment.
            </li>
            <li>
              All applicants must have no grades below
              80 in all subject areas (for elementary
              only).
            </li>
          </ul>

          <h1 id="add-section">
            Admission Procedure
          </h1>

          <Image
            src={`/images/add-addm.png`}
            alt="admission"
            width={1000}
            height={1000}
          />

          <h3 className="note">
            Note
          </h3>
          <ul>
            <li>
              The admission of new student applicants is
              based on the admission test results,
              academic records, school records, and
              interviews.
            </li>
            <li>
              The oral and written evaluations of the
              student applicant are not subjects for
              interpretation of scores and results to the
              parents/guardians. They are strictly
              confidential and become a part of the school
              records.
            </li>
          </ul>

          <h1 id="enr-section">
            Enrollment Procedure
          </h1>
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <Image
                src={`/images/add-cont.png`}
                alt="admission continuing"
                width={1000}
                height={1000}
              />
            </div>
            <div>
              <Image
                src={`/images/add-trans.png`}
                alt="admission transferee"
                width={1000}
                height={1000}
              />
            </div>
          </div>
        </section>
      </div>
      <CTA />
    </div>
  );
}
