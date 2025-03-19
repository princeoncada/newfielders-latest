import { HOME_CONTENTS } from "@/lib/constants"

const Hero = () => {
  return (
    <section>
      <div className="bg-center bg-cover" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${HOME_CONTENTS.hero.image.src})` }}>
        <div className="text-white p-4 py-16 md:px-8 lg:px-24 xl:pl-[100px] xl:pb-[100px] xl:h-[600px] max-w-[1440px] mx-auto">
          <div className="flex flex-col gap-4 xl:gap-2 xl:w-[525px] xl:h-full xl:justify-end">
            <h1 className="font-heading font-bold text-3xl text-center xl:text-start xl:text-[48px] xl:leading-[56px]">
              {HOME_CONTENTS.hero.title}
            </h1>
            <p className="font-body text-center xl:text-start xl:text-[14px]">
              {HOME_CONTENTS.hero.description}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero