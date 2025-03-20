import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/partials/Hero";
import CTA from "@/components/partials/CTA";
import SubArticle from "@/components/partials/SubArticle";

export default function Contact() {
  return (
    <div className="bg-[#F0F0F0]">
      <Hero title="Contact Us" />

      <div className="flex flex-row md:px-4 h-auto relative bottom-16 gap-5 w-full mx-auto max-w-[1440px]">
        <section className="hidden lg:block w-1/5">
          <div className="flex flex-col gap-5 sticky top-28">
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
                <Link href={`#email-section`}>Email Form</Link>
                <Link href={`#contact-section`}>
                  Contact Details
                </Link>
                <Link href={`#location-section`}>Location</Link>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white w-full max-w-full px-4 lg:px-12 prose">
          <h1 id="email-section">
            We&apos;ve been <br className="lg:hidden" />
            waiting for you!
          </h1>
          <h2>
            Send us a Message
          </h2>

          <form className="flex flex-col mt-1 gap-1 lg:gap-2 items-start">
            <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
              <Image
                className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
                src={`/svg/user.svg`}
                alt=""
                width={100}
                height={100}
              />

              <input
                name="email"
                id="email"
                placeholder="Name"
                className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
              />
            </label>
            <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
              <Image
                className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
                src={`/svg/mail.svg`}
                alt=""
                width={100}
                height={100}
              />

              <input
                name="email"
                id="email"
                placeholder="Email"
                className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
              />
            </label>
            <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
              <Image
                className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
                src={`/svg/phone.svg`}
                alt=""
                width={100}
                height={100}
              />

              <input
                name="email"
                id="email"
                placeholder="Phone Number"
                className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
              />
            </label>
            <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
              <Image
                className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
                src={`/svg/book.svg`}
                alt=""
                width={100}
                height={100}
              />

              <input
                name="email"
                id="email"
                placeholder="Subject"
                className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] lg:pl-[40px] focus:outline-none text-[16px]"
              />
            </label>
            <label className="relative text-gray-400 focus-within:text-gray-600 flex flex-row justify-start w-full">
              <Image
                className="pointer-events-none w-6 h-6 text-red-300 absolute top-[6px] left-[6px] lg:top-[11px] lg:left-[11px]"
                src={`/svg/book-open.svg`}
                alt=""
                width={100}
                height={100}
              />

              <textarea
                name="email"
                id="email"
                placeholder="Message"
                rows={10}
                className="w-full rounded-[6px] form-input border border-b-2 lg:border-b-[3px] border-gray-900 py-2 bg-white placeholder:text-[#555555] text-black appearance-none block pl-[32px] pr-[12px] lg:pl-[40px] focus:outline-none text-[16px]"
              ></textarea>
            </label>
            <button className="bg-[#017E3F] text-white p-2.5 px-8 mt-1 lg:text-lg font-bold lg:py-3 lg:px-16">
              Submit
            </button>
          </form>

          <h2 id="contact-section" className="mt-8!">
            Contact Us Directly
          </h2>

          <ul>
            <li>
              <span className="font-bold">
                Landline:{" "}
              </span>
              (082) 291 5036
            </li>
            <li>
              <span className="font-bold">
                Mobile:{" "}
              </span>
              0995 269 1712
            </li>
            <li>
              <span className="font-bold">
                Email:
              </span>
              <ul className="italic mt-0!">
                <li>
                  Admin -
                  <span className="font-medium">
                    {" "}
                    thenewfields.school@yahoo.com
                  </span>
                </li>
                <li>
                  Cashier -
                  <span className="font-medium">
                    {" "}
                    thenewfields.cashier@gmail.com
                  </span>
                </li>
                <li>
                  Registrar -
                  <span className="font-medium">
                    {" "}
                    thenewfields.registrar@gmail.com
                  </span>
                </li>
              </ul>
            </li>
          </ul>

          <p className="font-bold mb-0!">Visit Us:</p>

          <div className="italic">
            <div>
              P9B, BLK 44, LOTS 7-16, DECA Homes
            </div>
            <div>
              Tacunan, Davao City, Davao del Sur,
              8000
            </div>
          </div>

          <div id="location-section" className="w-full my-5">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3959.126616832511!2d125.4962916764629!3d7.111322292892269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32f913c9b3566017%3A0xb1054b3c87885784!2sThe%20NewFields%20STEM%20School%20Of%20Davao!5e0!3m2!1sfil!2sph!4v1720711433794!5m2!1sfil!2sph"
              loading="lazy"
              title="Google Maps"
              className="w-full h-[400px]"
              referrerPolicy="no-referrer"
            ></iframe>
          </div>
        </section>
      </div>
      <CTA />
    </div>
  );
}
