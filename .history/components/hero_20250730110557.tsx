"use client"

import * as React from "react"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"

// Slide content data
const slides = [
  {
    image: "/images/bg-2.jpg",
    title: "Shaping Tomorrow's Innovators",
    subtitle: "Discover excellence in Computer Engineering education",
    description: "Join a community dedicated to technological advancement and innovation",
    cta: "Explore ",
    link: "/curriculum",
  },
 
  {
    image: "/images/bg-3.jpg",
    title: "Build Your Future",
    subtitle: "World-class facilities and expert guidance",
    description: "Prepare for a successful career with hands-on learning and industry connections",
    cta: "Explore Research",
    link: "/admission",
  },
]

export default function Hero() {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const [count, setCount] = React.useState(0)

  const autoplayPlugin = React.useRef(Autoplay({ delay: 5000, stopOnInteraction: true }))

  React.useEffect(() => {
    if (!api) {
      return
    }

    setCount(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleIndicatorClick = (index: number) => {
    if (api) {
      api.scrollTo(index)
    }
  }

  // Colors from the school's palette
  const colors = ["#D11479", "#64BBE7", "#192F59"]

  return (
    <div className="relative">
      <Carousel
        className="w-full h-[90vh] mt-[12vh] relative overflow-hidden"
        setApi={setApi}
        plugins={[autoplayPlugin.current]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index} className="relative w-full h-[90vh]">
              <Image
                src={slide.image || "/placeholder.svg"}
                alt={`Slide ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Dark overlay for better text visibility */}
              <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

              {/* Text content with animation */}
              <AnimatePresence>
                {current === index && (
                  <div className="absolute inset-0 flex flex-col justify-center px-8 md:px-16 lg:px-24">
                    <div className="max-w-2xl">
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-2 inline-block rounded-full bg-[#64BBE7] px-4 py-1 text-sm font-medium text-white"
                      >
                        {slide.subtitle}
                      </motion.div>
                      <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="mb-4 text-4xl md:text-5xl lg:text-6xl font-bold text-white"
                      >
                        {slide.title}
                      </motion.h1>
                      <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mb-6 text-lg text-white/90 max-w-xl"
                      >
                        {slide.description}
                      </motion.p>
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                      >
                        <Button size="lg" className="bg-[#D11479] hover:bg-[#D11479]/90 text-white" asChild>
                          <a href={slide.link}>
                            {slide.cta}
                            <ChevronRight className="ml-2 h-4 w-4" />
                          </a>
                        </Button>
                      </motion.div>
                    </div>
                  </div>
                )}
              </AnimatePresence>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 bg-white/10 hover:bg-white/20 border-none text-white" />
        <CarouselNext className="right-4 bg-white/10 hover:bg-white/20 border-none text-white" />
      </Carousel>

      {/* Creative Indicators */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center z-10">
        <div className="bg-black/30 backdrop-blur-sm rounded-full p-2 flex items-center gap-3">
          {Array.from({ length: count }).map((_, index) => (
            <button
              key={index}
              onClick={() => handleIndicatorClick(index)}
              className="group relative flex items-center justify-center"
              aria-label={`Go to slide ${index + 1}`}
            >
              <span
                className={`block h-1 w-8 rounded-full transition-all duration-300 ${
                  current === index ? `bg-[${colors[index % colors.length]}]` : "bg-white/40 group-hover:bg-white/60"
                }`}
              />

              {current === index && (
                <span
                  className="absolute -top-6 text-xs font-medium text-white bg-black/50 rounded px-2 py-1"
                  style={{
                    opacity: current === index ? 1 : 0,
                    transform: `scale(${current === index ? 1 : 0.8})`,
                    transition: "all 0.3s ease",
                  }}
                >
                  {index + 1}/{count}
                </span>
              )}

              {/* Animated dot that moves along the line when active */}
              {current === index && (
                <motion.span
                  initial={{ left: 0 }}
                  animate={{ left: "100%" }}
                  transition={{
                    duration: 5,
                    ease: "linear",
                    repeat: 0,
                  }}
                  className={`absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-[${colors[index % colors.length]}]`}
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Slide counter */}
      <div className="absolute top-8 right-8 bg-black/30 backdrop-blur-sm text-white rounded-full px-4 py-2 text-sm font-medium">
        <span className="text-[#D11479]">{current + 1}</span>
        <span className="mx-1">/</span>
        <span>{count}</span>
      </div>
    </div>
  )
}
