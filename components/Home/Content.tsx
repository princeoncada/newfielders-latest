import Link from 'next/link'

import { HOME_CONTENTS } from '@/lib/constants'

const Content = () => {
  return (
    <section>
      <div className="flex flex-col md:flex-row max-w-[1440px] mx-auto py-8 xl:py-12">
        <div
          className="w-full h-[100vw] md:h-auto md:w-1/2 md:aspect-square bg-cover bg-center"
          style={{
            backgroundImage: `url('${HOME_CONTENTS.content.image.src}')`,
          }}
        ></div>
        <div className="font-heading px-4 md:px-12 pt-8 xl:p-[107px] md:w-1/2 md:flex flex-col justify-center lg:pl-14">
          <div>
            <h1 className="font-bold text-2xl xl:text-[48px] w-2/3 mb-2 xl:w-auto xl:leading-[64px] text-[#028141]">
              {HOME_CONTENTS.content.header}
            </h1>
            <h2 className="font-medium text-sm xl:text-[19px] mb-3 xl:mb-10 xl:w-auto text-[#333333] md:w-9/12">
              {HOME_CONTENTS.content.subheader}
            </h2>
            <p className="text-xs xl:text-[18px] xl:leading-[25px] font-body mb-6 md:w-4/5 xl:w-auto text-[#555555]">
              {HOME_CONTENTS.content.description}
            </p>
            <Link
              href="/newfielders"
              className="text-sm inline-block xl:text-[14px] bg-[#028141] text-white px-4 xl:px-6 py-2 xl:py-3"
            >
              {HOME_CONTENTS.content.button}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Content