import { HOME_CONTENTS } from "@/lib/constants"

const Founder = () => {
  return (
    <section>
      <div className="py-8 xl:py-12 flex justify-center max-w-[1440px] mx-auto px-4">
        <div className="flex items-center w-full aspect-[1/1.2] md:aspect-video bg-cover bg-[center_top_-1.5rem] md:bg-[top_-6rem_left_12rem]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HOME_CONTENTS.founder.image.src})` }}>
          <div className="space-y-4 text-white px-4 md:px-16">
            <p className="text-center md:w-1/2 mx-auto italic font-semibold md:text-start md:mx-0 md:text-[20px] xl:text-[28px]">
              &quot;{HOME_CONTENTS.founder.quote}&quot;
            </p>
            <p className="text-center text-xs md:text-start md:text-[12px] xl:text-[16px]">
              {HOME_CONTENTS.founder.role}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Founder