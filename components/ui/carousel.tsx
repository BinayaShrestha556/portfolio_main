"use client";
import React, { useCallback, useEffect, useState } from "react";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import { cn } from "@/lib/utils";

const EmblaCarousel = ({
  images,
  className,
}: {
  images: string[];
  className: string;
}) => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true }
    // [Autoplay({ delay: Math.floor(Math.random() * 4000) + 2000 })]
    //for auto play turn this on
  );

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);
  const [mounted, isMounted] = useState(false);
  useEffect(() => {
    isMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div
      className={cn(
        "embla w-full m-auto border border-border bg-background rounded p-1 relative h-full",
        className
      )}
    >
      <div className={cn("embla__viewport h-full ")} ref={emblaRef}>
        <div className={cn("embla__container h-full w-full ")}>
          {images.map((e) => (
            <div key={e} className="embla__slide relative">
              <div className="w-full h-full relative">
                <Image
                  src={e}
                  alt="image about project"
                  fill
                  className={cn("object-contain object-center rounded-xl px-1")}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button
        className="embla__prev absolute top-1/2 bottom-1/2 left-3 text-neutral-400/80 backdrop-blur-sm text-3xl"
        onClick={scrollPrev}
      >
        <FaCircleChevronLeft />
      </button>
      <button
        className="embla__next absolute top-1/2 bottom-1/2 backdrop-blur-sm right-3 text-3xl text-neutral-400/80"
        onClick={scrollNext}
      >
        <FaCircleChevronRight
          style={{ animationDuration: "4000" }}
          className="animate-pulse backdrop-blur-lg"
        />
      </button>
    </div>
  );
};
export default EmblaCarousel;
