import Image from 'next/image'

import { HOME_CONTENTS } from '@/lib/constants'

const Programs = () => {
  return (
    <section>
      <div className="flex flex-col gap-4 py-8 xl:py-12 max-w-[1440px] mx-auto px-4">
        <h1 className="font-bold text-2xl xl:text-[42px] xl:text-start text-[#028141]">
          {HOME_CONTENTS.programs.title}
        </h1>

        <div className="grid grid-cols-2 gap-3 pb-4 md:grid-cols-4 md:p-0">
          {
            HOME_CONTENTS.programs.content.map((program, index) => (
              <div key={HOME_CONTENTS.programs.title + program.alt + index} className={`relative w-full aspect-square ${index % 2 !== 0 ? 'top-4 md:top-0' : ''}`}>
                <Image
                  className='w-full'
                  src={program.image}
                  alt={program.alt}
                ></Image>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Programs