import React, { useState } from "react";
import DetailsButton from "./DetailsButton";
import { steps } from "./dates";

interface TimelineStepProps {
  date: string;
  actionLabels: string[];
}

const TimelineStep: React.FC<TimelineStepProps> = ({ actionLabels }) => {
  return (
    <div className="flex items-center mb-2 md:mb-4">
      <div>
        <div className="flex flex-wrap">
          {actionLabels.map((label, index) => (
            <div className="px-1 py-1 md:px-2 md:py-2" key={index}>
              <DetailsButton label={label} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const Timeline: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const progress = (activeStep / (steps.length - 1)) * 100;

  const handleClick = (index: number) => {
    setActiveStep(index);
    console.log(activeStep);
  };

  return (
    <div className="hidden lg:flex">
      <div className="flex grid grid-cols-8">
        <div className="grid space-y-0 justify-items-end">
          {steps.map((step, index) => (
            <div key={index}>
              <button
                type="button"
                className={`relative wrap flex focus:outline-none py-8  px-2 rounded-md text-left  block`}
                onClick={() => handleClick(index)}
              >
                <span
                  className={`text-lg lg:text-xl  text-left text-slate-400 font-normal px-2 ${
                    index === activeStep ? "text-zinc-50" : "text-slate-500"
                  }`}
                >
                  {step.date}
                </span>
              </button>
            </div>
          ))}
        </div>

        <div className="relative flex flex-col items-center w-3/5">
          {steps.map((_step, index) => (
            <div key={index}>
              <div
                className={`relative wrap  focus:outline-none py-8 min-h-full  rounded-md text-left`}
                onClick={() => handleClick(index)}
              >
                <div className="z-10 flex flex-col items-center justify-center size-7">
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
          <div className="absolute h-full py-10">
            <div className="w-0.5 bg-opacity-40 bg-gray-700 h-full">
              <div
                className="w-full bg-gray-400"
                style={{ height: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>

        <div className="flex justify-center flex-grow col-span-6 overflow-auto">
          {activeStep !== null && steps[activeStep] && (
            <TimelineStep key={activeStep} {...steps[activeStep]} />
          )}
        </div>
      </div>
    </div>
  );
};

export  {TimelineStep,Timeline};
