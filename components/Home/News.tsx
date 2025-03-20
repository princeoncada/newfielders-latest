import Image from 'next/image'
import Link from 'next/link'

import { HOME_CONTENTS } from '@/lib/constants'

const News = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 max-w-[1440px] mx-auto px-4 py-8 xl:py-12 font-heading">
        <h1 className="text-2xl font-bold text-[#028141] xl:text-[48px] xl:mb-1">
          {HOME_CONTENTS.news.title}
        </h1>

        <div className="flex flex-col md:flex-row gap-4">
          {
            HOME_CONTENTS.news.posters.map((poster, index) => (
              <div key={`${HOME_CONTENTS.news.title}-poster-${index}`}>
                <Link href={poster.link}>
                  <Image
                    src={poster.image}
                    alt={poster.alt}
                  ></Image>
                </Link>
              </div>
            ))
          }
        </div>

        {
          HOME_CONTENTS.news.updates.map((update, index) => (
            <Link href={update.link} key={`${HOME_CONTENTS.news.title}-update-${index}`} className='flex flex-row gap-2 h-auto'>
              <div className="hidden md:flex w-[250px] aspect-square bg-cover bg-center rounded-tr-md rounded-bl-md" style={{ backgroundImage: `url(${update.image.src})` }}></div>
              <div className="flex flex-col bg-gradient-to-r from-gray-100 w-full gap-1 p-4 lg:px-8 justify-center">
                <div className="flex flex-row items-end gap-2">
                  <div className="font-heading text-xl text-[#028141] lg:font-semibold lg:text-3xl">
                    {update.title}
                  </div>
                </div>
                <div className="font-body text-xs lg:text-lg text-[#333333]">
                  {update.description}
                </div>
              </div>
            </Link>
          ))
        }
      </div>
    </section>
  )
}

export default News