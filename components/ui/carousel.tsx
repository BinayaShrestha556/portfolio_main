"use client"
import React, { useCallback, useEffect, useState } from 'react'
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image';
import Autoplay from 'embla-carousel-autoplay'
import { cn } from '@/lib/utils';

 const EmblaCarousel = ({images,className}:{images:string[],className:string}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({loop:true},[Autoplay({delay:3000})])

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])
    const [mounted,isMounted]=useState(false)
    useEffect(()=>{
      isMounted(true)
    },[])
 if(!mounted) return null

  return (
    <div className={cn("embla w-full m-auto border border-border relative h-full",className)}>
      <div className="embla__viewport h-full" ref={emblaRef}>
        <div className="embla__container h-full w-full ">

          {
            images.map((e)=>(<div key={e} className="embla__slide relative"><Image  src={e} alt='image about project' fill className='object-contain object-center bg-black/50' /></div>))
          }
        
        </div>
      </div>
      <button className="embla__prev absolute top-1/2 bottom-1/2 left-3 text-neutral-500 text-3xl" onClick={scrollPrev}>
        <FaCircleChevronLeft/>
      </button>
      <button className="embla__next absolute top-1/2 bottom-1/2 right-3 text-3xl text-neutral-500/50" onClick={scrollNext}>
        <FaCircleChevronRight/>
      </button>
    </div>
  )
}
export default EmblaCarousel
