"use client";
import * as React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { Button } from "@/components/ui/button";

export function Carousel() {
  const [instanceRef, setInstanceRef] = React.useState<any>(null);
  const [isMounted, setIsMounted] = React.useState(false);

  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
    },
    created(slider) {
      setInstanceRef(slider);
    },
  });

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  // Auto-slide effect
  React.useEffect(() => {
    if (!instanceRef) return;

    const interval = setInterval(() => {
      instanceRef.next();
    }, 4000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  if (!isMounted) return null;

  return (
    <div className="relative overflow-hidden">
      <div ref={sliderRef} className="keen-slider">
        <div className="keen-slider__slide flex items-center justify-center lg:h-[650px] md:h-[400px] sm:h-[250px] text-white text-xl font-bold">
          <img
            src="/images/slider.jpg"
            alt="Slide 1"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="keen-slider__slide flex items-center justify-center lg:h-[650px]  md:h-[400px] sm:h-[250px] text-white text-xl font-bold">
          <img
            src="/images/slider1.png"
            alt="Slide 1"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="keen-slider__slide flex items-center justify-center lg:h-[650px]  md:h-[400px] sm:h-[250px] text-white text-xl font-bold">
          <img
            src="/images/slider2.jpg"
            alt="Slide 1"
            className="object-cover h-full w-full"
          />
        </div>
        <div className="keen-slider__slide flex items-center justify-center lg:h-[650px]  md:h-[400px] sm:h-[250px] text-white text-xl font-bold">
          <img
            src="/images/slider3.jpg"
            alt="Slide 1"
            className="object-cover h-full w-full"
          />
        </div>
      </div>

      {/* Prev Button */}
      <Button
        variant="outline"
        className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10"
        onClick={() => instanceRef?.prev()}
      >
        <i className="bi bi-chevron-double-left"></i>
      </Button>

      {/* Next Button */}
      <Button
        variant="outline"
        className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10"
        onClick={() => instanceRef?.next()}
      >
        <i className="bi bi-chevron-double-right"></i>
      </Button>
    </div>
  );
}
