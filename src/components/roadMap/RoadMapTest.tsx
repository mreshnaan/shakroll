import React, { useState } from "react";
import { steps } from "./dates";
import { TimelineStep } from "./RoadMap";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";

const TimelineTest: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const progress = (activeStep / (steps.length - 1)) * 100;

  const handleClick = (index: number) => {
    setActiveStep(index);
    console.log(activeStep);
  };

  return (
    <div className="lg:hidden">
      <div className="flex grid items-center justify-items-center grid-row-3">
        <div className="flex flex-row ">
        <Carousel className="w-full ">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
        </div>

        <div className="relative flex flex-row items-center w-3/5">
          {steps.map((_step, index) => (
            <div key={index}>
              <div
                className={`relative wrap  focus:outline-none py-8 min-h-full  rounded-md text-left`}
                onClick={() => handleClick(index)}
              >
                <div className="z-10 flex flex-row items-center justify-center size-7">
                  <span
                    className={`absolute h-3 w-3 lg:h-4 lg:w-4 rounded-full bg-gradient-to-r from-blue-700 to-cyan-300 opacity-100 ${
                      index === activeStep ? "animate-ping " : ""
                    }`}
                  ></span>
                  <span
                    className={`z-10 size-7  border-transparent brightness-125 rounded-full ${
                      activeStep > index
                        ? "bg-gradient-to-r from-blue-700 to-cyan-300 "
                        : ""
                    } h-3 w-3 lg:h-4 lg:w-4 ${
                      index === activeStep
                        ? "bg-gradient-to-r from-blue-700 to-cyan-300 "
                        : "bg-blue-800"
                    }`}
                  ></span>
                </div>
              </div>
            </div>
          ))}
          <div className="absolute w-full">
            <div className="h-0.5 bg-opacity-20 bg-gray-700 w-full">
              <div
                className="h-full bg-gray-400"
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center ">
          {activeStep !== null && steps[activeStep] && (
            <TimelineStep key={activeStep} {...steps[activeStep]} />
          )}
        </div>
      </div>
    </div>
  );
};

export default TimelineTest;
