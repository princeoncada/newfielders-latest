import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/partials/Hero";
import CTA from "@/components/partials/CTA";

export default function About() {
  return (
    <div className="bg-[#F0F0F0] w-full">
      <Hero title="About Us" />

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
            <div className="flex flex-col gap-3.5 w-full ">
              <h1 className="font-heading text-[#00582C] text-[28px] font-medium">
                Contents
              </h1>
              <div className="flex flex-col gap-2 font-body text-[#333333] text-[18px]">
                <Link href={`#vision-section`}>Vision</Link>
                <Link href={`#mission-section`}>Mission</Link>
                <Link href={`#values-section`}>
                  Core Values
                </Link>
                <Link href={`#philo-section`}>Philosophy</Link>
                <Link href={`#educ-section`}>
                  Method of Education
                </Link>
                <Link href={`#team-section`}>Our Team</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white w-full max-w-full px-4 lg:px-12 prose">
          <h1 id="vision-section">
            Vision
          </h1>
          <p>
            The NewFields STEM School of Davao aims to produce
            academically successful, scientifically literate,
            socially aware, and respectful, responsible global
            citizens through a student-centered, collaborative
            and problem-based learning processes facilitated by
            passionate, knowledgeable educators trained in
            science, technology, engineering and mathematics
            (STEM) philosophies and applications.
          </p>
          <h1 id="mission-section">
            Mission
          </h1>
          <p>
            The NewFields STEM School of Davao cultivates in
            students from early childhood through 12th grade
            deep interest, appreciation, knowledge, competencies
            and skills in science and mathematics and the
            technology and engineering design process, sharpens
            their analytical, problem-solving, experimentation,
            collaboration, and communication skills, nurtures
            their creative talents and imagination, fosters
            character education and good citizenship, and
            creates a culture of inquiry with their peers and
            teachers.
          </p>

          <h1 id="values-section">
            Core Values
          </h1>
          <ul>
            <li className="text-[18px] lg:text-[24px] font-semibold text-[#017E3F]">
              Respectful
            </li>
            <ul className="mt-0">
              <li>Waits for one&apos;s turn</li>
              <li>Listens when others are talking</li>
              <li>
                Respects one&apos;s feelings and those
                of others
              </li>
              <li>Follows rules</li>
              <li>
                Refrain from using rude, insulting and
                vulgar actions/words
              </li>
              <li>
                Does not engage in any form of bullying,
                fighting, vandalism,&nbsp;
                <br className="hidden lg:flex" />&nbsp;
                distasteful jokes/pranks and rough plays
              </li>
              <li>Tells the truth</li>
              <li>Talks and acts politely</li>
            </ul>
            <li className="text-[18px] lg:text-[24px] font-semibold text-[#017E3F]">
              Responsible
            </li>
            <ul className="mt-0">
              <li>Accepts responsibility</li>
              <li>
                Takes care of oneself by having good
                health and cleanliness habits
              </li>
              <li>
                Takes care of one&apos;s things, school
                materials, and facilities
              </li>
              <li>Returns borrowed things</li>
              <li>Starts and finishes work</li>
              <li>
                Keeps things in order during and after
                work
              </li>
              <li>
                Keeps one&apos;s work neat and orderly
              </li>
              <li>Makes good choices</li>
              <li>Does what is right</li>
            </ul>
            <li className="text-[18px] lg:text-[24px] font-semibold text-[#017E3F]">
              Reflective
            </li>
            <ul className="mt-0">
              <li>
                Takes time to think about one&apos;s
                actions and their effects
              </li>
              <li>
                Gives and takes feedback from others
              </li>
              <li>Shares learnings</li>
            </ul>
            <li className="text-[18px] lg:text-[24px] font-semibold text-[#017E3F]">
              Collaborative
            </li>
            <ul className="mt-0">
              <li>Works and plays well with others</li>
              <li>Cooperates during activities</li>
              <li>Volunteers to assist others</li>
              <li>
                Recognizes and accepts the contribution
                of others toward a goal/activity
              </li>
              <li>
                Accepts defeats and celebrates
                other&apos;s success
              </li>
              <li>Willing to lead or follow as needed</li>
            </ul>
          </ul>

          <Image
            src="/images/placeholder.png"
            width={1000}
            height={100}
            alt="placeholder"
          ></Image>

          <h1 id="philo-section">
            Our Philosophy
          </h1>

          <h2>
            Empowering Through STEM
          </h2>
          <p>
            At The NewFields STEM School of Davao, founded
            by Dr. Napoleon K. Juanillo Jr. in 2013, we are
            committed to empowering Filipino youth through a
            deep appreciation of STEM. Our goal is to
            cultivate critical thinking, problem-solving,
            and research skills, preparing students to excel
            in a globally competitive environment.
          </p>

          <h2>
            Why STEM?
          </h2>
          <p>
            STEM education is vital for success in the
            modern world. It&apos;s not just about learning
            science and technology; it&apos;s about
            developing essential skills that lead to
            innovation and economic growth. STEM careers
            offer better opportunities, higher wages, and
            lower unemployment rates, making these skills
            crucial for future success.
          </p>

          <h2>
            Shaping Tomorrow's Leaders
          </h2>
          <p>
            Our problem-based and collaborative learning
            approach fosters creativity, leadership, and
            entrepreneurship. At NewFields, students are
            encouraged to take risks, communicate
            effectively, and grow into the next generation
            of Filipino innovators who will lead and
            transform society. We believe this journey,
            though challenging, is filled with joy and
            discovery.
          </p>

          <h1 id="educ-section">
            Our Method of Education
          </h1>

          <p>
            The NewFields STEM School of Davao expects its
            students to play their unique role in their
            respective communities as a) Problem-Solvers, b)
            Designers, c) Thinkers, d) Innovators, and e)
            Leaders. As Problem-Solvers, they should be able
            to define questions and problems, design
            investigations to gather data, collect and
            organise data, draw conclusions, and then apply
            understanding to new and novel situations.
          </p>

          <ul>
            <li>
              <span className="font-bold">
                As Designers,
              </span>&nbsp;
              they should be able to recognize the needs
              of the world and creatively design, test,
              redesign, and then implement solution
            </li>
            <li>
              <span className="font-bold">
                As Thinkers,
              </span>&nbsp;
              they should be able to apply rational and
              logical thought processes of science,
              mathematics, and engineering design to
              innovation and invention and possess a
              life-long passion for learning.
            </li>
            <li>
              <span className="font-bold">
                As Innovators,
              </span>&nbsp;
              they should be able to creatively use
              science, mathematics, and technology
              concepts and principles by applying them to
              the engineering design process.
            </li>
            <li>
              <span className="font-bold">
                And as Leaders,
              </span>&nbsp;
              they should be able to inspire, listen to,
              communicate and work with others
              collaboratively to embrace change in pursuit
              of the common good.
            </li>
          </ul>

          <p>
            ACCESSEDU, INC. (The NewFields STEM School of
            Davao) also believes that STEM shapes our
            everyday experiences and pervades every aspect
            of our lives. We experience science as we deal
            with our natural world: plants, animals (large,
            small, microbial), food, air, fire, weather,
            natural disasters, lands and oceans, fossil
            fuels, even our own bodies.
          </p>
          <p>
            We encounter technology at every corner, right
            at the palm of our hand through our smartphones
            and other telecommunication gadgets. We look to
            engineering for designs of roads, bridges,
            buildings, houses, transportation, hospitals and
            a plethora of systems. We use mathematics in
            almost every transaction at the corner store,
            including family budgets and taxes. The list is
            endless.
          </p>
          <p>
            There are four key educational principles that
            drive the approach to basic education by
            ACCESSEDU, INC. (The NewFields STEM School of
            Davao).
          </p>

          <ul className="list-disc flex flex-col gap-1 my-2 ml-4">
            <li>
              <span className="font-bold">
                We seek to develop among the young a
                passion for life-long learning.
              </span>&nbsp;
              ACCESSEDU, INC. (The NewFields STEM School
              of Davao) believes that education happens
              within and outside the classroom. STEM
              disciplines, which encompass practically
              everything in life, help students to be
              curious, ask questions, analyze data, and
              make connections as to why the world exists
              as it does. By allowing students to work
              collaboratively with their peers as well as
              their teachers in exploring ideas in science
              and get to the “aha” moment of
              understanding, we inspire them to become
              life-long learners and enable them to deploy
              their knowledge, learnings and skills to new
              situations
            </li>
            <li>
              <span className="font-bold">
                We seek to foster inquiry-based or
                problem-based learning.
              </span>&nbsp;
              ACCESSEDU, INC. (The NewFields STEM School
              of Davao) believes that education happens
              within and outside the classroom. STEM
              disciplines, which encompass practically
              everything in life, help students to be
              curious, ask questions, analyze data, and
              make connections as to why the world exists
              as it does. By allowing students to work
              collaboratively with their peers as well as
              their teachers in exploring ideas in science
              and get to the “aha” moment of
              understanding, we inspire them to become
              life-long learners and enable them to deploy
              their knowledge, learnings and skills to new
              situations
              <p className="mt-1">
                The NewFields STEM School of Davao shall
                integrate academic and workplace/outside
                world experiences through field trips,
                camping, outings, office visits,
                industry visits, interviews,
                conversations, parent-guests, and other
                non-traditional classroom settings.
                Project-based learning will connect
                school work with the work of
                professionals, parents, organizations,
                social groups or other forums for
                service-learning experiences, including
                the home.
              </p>
            </li>
            <li>
              <span className="font-bold">
                We seek to equip the young with
                competencies and skills for the 21st
                Century.
              </span>&nbsp;
              To prepare for college, career and
              citizenship, it&apos;s not enough to master
              academics. Students also need to acquire a
              set of skills that will last for a lifetime.
              These competencies &#45; known as 21st
              -century skills &#45; are summed as the
              “4Cs” by the Partnership for 21st Century
              Skills. They include the following:
              Collaboration, Creativity, Communication and
              Critical Thinking. The 4Cs will not replace
              academic learning goals. Students still need
              to become good readers and writers. The Big
              Capstone projects, which constitute one of
              the two vital components of the basic
              education program at The NewFields STEM
              School of Davao, enable students to achieve
              these competencies. In these Big Capstone
              projects, students integrate the lens of
              science, technology, engineering and
              mathematics with other disciplines such as
              the arts and humanities in working together
              to create innovative solutions to real-world
              problems and communicate their solutions
              with others. As they carry out their
              investigations and projects, they must
              access, analyze, and use the information
              they need to complete the learning tasks.
              While working through the task, students
              build important life and career skills by
              learning to manage their time, to become
              self-directed workers and to collaborate
              effectively with others. Using appropriate
              technology tools to complete their task,
              students discover the most effective and
              efficient ways to access and manage the
              world of digital information that is
              available to them.
            </li>
            <li>
              <span className="font-bold">
                We seek to promote STEM careers.
              </span>&nbsp;
              The NewFields STEM School of Davao believes
              in promoting STEM careers in the K-12
              classroom. There is no doubt that 80% of the
              jobs in the global workforce will require
              STEM skills.
            </li>
          </ul>

          <p>
            As these are the disciplines that are widely
            considered to be engines for innovation and
            economic growth, we believe that we will
            contribute significantly to bridging the STEM
            skills gap in the country. Currently, the
            Philippines ranks 8th among 9 ASEAN countries in
            STEM education, ranks 112th among 138 economies
            in science and mathematics, and significantly
            falls behind Singapore, Brunei, Malaysia,
            Indonesia, Thailand and Vietnam in STEM fields.
          </p>

          <h2>
            Integrating STEM in Daily Life
          </h2>
          <p>
            STEM education is integral to understanding and
            interacting with the world. From observing
            nature to using technology, engineering our
            environments, and managing daily finances, STEM
            is everywhere. Our curriculum emphasizes these
            connections, inspiring curiosity and a deeper
            understanding of the world.
          </p>

          <h2>
            21st Century Skills and Real-World Learning
          </h2>
          <p>
            Our teaching methods emphasize the “4Cs” —
            Collaboration, Creativity, Communication, and
            Critical Thinking. Through inquiry-based and
            project-based learning, students gain not only
            academic knowledge but also essential life
            skills. They engage in activities that tie
            classroom learning to real-world applications,
            preparing them for future challenges in college,
            careers, and citizenship.
          </p>

          <h2>
            Promoting STEM Careers
          </h2>
          <p>
            We recognize the pivotal role of STEM in driving
            innovation and economic growth. By promoting
            STEM careers, we aim to bridge the skills gap
            and prepare students for the growing demand in
            the global workforce. Our goal is to inspire the
            next generation of Filipino innovators and
            leaders who will contribute to national and
            global prosperity.
          </p>

          <h1 id="team-section">
            The NewFields Team
          </h1>

          <p>
            The NewField&apos;s Team is a dedicated and
            dynamic group committed to fostering an
            effective and nurturing educational environment.
            Leading the team is Maam Helen Perpetua J.
            Onggo, a visionary directress whose inspiring
            leadership drives innovation, inclusivity, and
            academic excellence.
          </p>

          <h2>
            Administrative Staff
          </h2>
          <p>
            The backbone of the school, our administrative
            staff manage student records, coordinate events,
            and maintain communication with parents and the
            community, ensuring smooth operations and
            supporting teachers and students.
          </p>

          <h2>
            Teachers
          </h2>
          <p>
            Our educators are passionate professionals who
            deliver high-quality education using diverse
            teaching methods and technologies. They engage
            students, foster a love of learning, and serve
            as mentors and role models, guiding both
            academic and personal growth.
          </p>

          <h2>
            General Services Staff
          </h2>
          <p>
            Our general services team ensures a safe, clean,
            and welcoming environment. From custodians to
            security personnel, their efforts are vital to
            creating a conducive learning space.
          </p>

          <p>
            Under Maam Helen&apos;s leadership, the
            NewFields Team collaborates to create a
            harmonious educational ecosystem that nurtures
            every student&apos;s potential, ensuring they
            achieve academic success and develop into
            well-rounded individuals.
          </p>

          <video
            src="/videos/vid-about.mp4"
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
