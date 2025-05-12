import React from "react";

interface BannerProps {
  image: string;
  heading: string;
  text: string;
}

const Banner = ({ image, heading, text }:BannerProps) => {
  return (
    <section
      className={`w-full py-12 md:py-24 lg:py-32 bg-no-repeat bg-cover bg-center`}
      style={{
        backgroundImage: `linear-gradient(to right, rgba(25, 47, 89, 0.1), rgba(100, 187, 231, 0.1)), url(${image})`,
      }}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-white tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              {heading}
            </h1>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              {text}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
