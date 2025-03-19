import Image from "next/image"
import Link from "next/link"

import { HOME_CONTENTS } from "@/lib/constants"

const Gallery = () => {
  return (
    <section>
      <div className="max-w-[1440px] mx-auto px-4 py-8 xl:px-0 xl:py-12">
        <h1 className="text-2xl font-bold mb-2 text-[#028141] xl:text-[48px] xl:mb-5">
          {HOME_CONTENTS.gallery.title}
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-y-4">
          {
            HOME_CONTENTS.gallery.content.map((gallery, index) => (
              <Link key={`${HOME_CONTENTS.gallery.title}-${gallery.title}-${index}`} href={gallery.link}>
                <h1 className="mb-0.5 xl:my-2 xl:text-[16px] text-sm text-[#333333]">
                  {gallery.title}
                </h1>
                <Image
                  className="rounded-md shadow-lg"
                  src={gallery.image}
                  alt=""
                  width="1000"
                  height="800"
                ></Image>
              </Link>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Gallery