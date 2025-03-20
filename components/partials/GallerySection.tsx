import Image, { StaticImageData } from "next/image"
import Link from "next/link"

import { HOME_CONTENTS } from "@/lib/constants"

type GallerySectionProps = {
  gallery: {
    title: string
    image: StaticImageData
    link: string
  }[]
}

const GallerySection = ({ gallery }: GallerySectionProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
      {
        gallery.map((galleryItem, index) => (
          <Link key={`${HOME_CONTENTS.gallery.title}-${galleryItem.title}-${index}`} href={galleryItem.link}>
            <h3 className="mt-0! xl:text-[16px] text-sm text-[#333333] font-normal">
              {galleryItem.title}
            </h3>
            <Image
              className="rounded-md shadow-lg mb-0!"
              src={galleryItem.image}
              alt={`${galleryItem.title}-image`}
              width="1000"
              height="800"
            ></Image>
          </Link>
        ))
      }
    </div>
  )
}

export default GallerySection