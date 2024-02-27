import React, { useState } from "react";
import { steps } from "./dates";
import { TimelineStep } from "./RoadMap";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const TimelineMobile: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const goToPrevious = () => {
    setActiveStep((prevIndex) =>
      prevIndex === 0 ? steps.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setActiveStep((prevIndex) =>
      prevIndex === steps.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="lg:hidden ">
      <div className="flex grid items-center justify-items-center grid-row-3">
        <div className="flex flex-row w-64 md:w-96">
          <Carousel className="w-full ">
            <CarouselContent>
              {steps.map((steps, index) => (
                <CarouselItem key={index}>
                  <div className="p-1 text-xl font-semibold text-cyan-100">
                    {steps.date}
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious onClickCapture={goToPrevious} />
            <CarouselNext onClickCapture={goToNext} />
          </Carousel>
        </div>

        <div className="relative flex flex-row items-center w-[84vw] ms-[16vw]">
          <div>
            <div
              className={`relative wrap  focus:outline-none py-4 min-h-full  rounded-md text-left `}
            >
              <div className="z-10 flex flex-row items-center justify-center size-7">
                <span
                  className={`absolute h-4 w-4 lg:h-4 animate-ping lg:w-4 rounded-full bg-gradient-to-r from-blue-700 to-cyan-300 opacity-100`}
                ></span>
                <span
                  className={`z-10 size-7 h-4 w-4 bg-gradient-to-r from-blue-700 to-cyan-300  border-transparent brightness-125 rounded-full `}
                ></span>
              </div>
            </div>
          </div>

          <div className="absolute pl-5 w-[84vw]">
            <div className="h-0.5 w-full">
              <div className="h-full bg-gray-400"></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          {activeStep !== null && steps[activeStep] && (
            <TimelineStep key={activeStep} {...steps[activeStep]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineMobile;
