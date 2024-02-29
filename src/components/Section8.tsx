import { useEffect, useRef, useState } from "react";
import Divider from "./Divider";
import { Timeline } from "./roadMap/RoadMap";
import TimelineMobile from "./roadMap/RoadMapMobile";
import React from "react";
import { useScrollDirection } from "./useScrollDirection";

function Section8() {
  const [scrollYPosition, setScrollYPosition] = React.useState(0);
  const [timelineScroll, setTimelineScroll] = React.useState(0);

  const elementRef = useRef<any>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [activeStep, setActiveStep] = useState<number>(0);

  useEffect(() => {
    function handleResize() {
      const x = elementRef.current.offsetLeft;
      const y = elementRef.current.offsetTop;
      setPosition({ x, y });
    }

    handleResize(); // initial call to get position of the element on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [elementRef]);

  const handleScroll = () => {
    const newScrollYPosition = window.pageYOffset;
    setScrollYPosition(newScrollYPosition);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollDirection = useScrollDirection();

  const handleScrollTimeline = () => {
    if (
      scrollDirection === "up" &&
      activeStep >= 1 &&
      timelineScroll <= activeStep * 50
    ) {
      setActiveStep(activeStep - 1);
    } else if (
      scrollDirection === "down" &&
      activeStep <= 3 &&
      timelineScroll > activeStep * 50
    ) {
      setActiveStep(activeStep + 1);
    }
  };

  React.useEffect(() => {
    if (scrollYPosition > position.y) {
      handleScrollTimeline();
    }
    setTimelineScroll(scrollYPosition - position.y);
  }, [scrollYPosition]);

  return (
    <div
      className={`relative flex flex-col items-center px-5 gap-5 bg-[] pb-[50px] xl:pb-28 xl:border-b xl:border-opacity-20 xl:border-[#FFF] ${
        scrollYPosition > position.y && timelineScroll < 200 && "xl:sticky"
      } w-full xl:top-[0vh]`}
      ref={elementRef}
    >
      <h1 className=" flex flex-col items-center text-[70px] leading-[77px] text-center xl:text-[150px] font-bold xl:leading-[165px] headline-gradient-2">
        Roadmap
      </h1>
      <img
        className="hidden absolute lg:block lg:top-[350px] lg:left-0  bg-no-repeat z-[-1] lg:h-[2500px] lg:w-[1500px] "
        src="/assets/ellipse4.svg"
      />

      <img
        src="/assets/Group-513.svg"
        alt=""
        srcSet=""
        className="w-[334px] h-[42px] mb-[50px] xl:mb-[100px] xl:w-[739px] xl:h-[92px]"
        loading="lazy"
      />

      <div className="flex flex-col items-center w-330px gap-[50px] xl:gap-[100px] xl:w-[1250px] 2xl:w-[1330px]">
        <Timeline activeStep={activeStep} setActiveStep={setActiveStep} />
        <TimelineMobile />
        <Divider />
        <div className="flex flex-col items-center justify-center gap-16 xl:flex-row xl:gap-52 ">
          <h1 className="flex flex-col text-[40px]  leading-[44px] text-center xl:text-left xl:text-[70px] text-[#FFF] xl:leading-[77px] xl:w-[434px] font-bold xl:px-0 px-10">
            Stay Ahead of the Tide:
            <span className="text-[#69EAFF]">Subscribe Now!</span>
          </h1>
          <div className=" flex flex-col items-center gap-4 text-[#FFF] w-[334px] xl:w-[550px] 2xl:w-[675px] xl:items-start">
            <h1 className="flex flex-col text-[20px] text-center leading-[26px] xl:text-[35px] xl:leading-[45.5px] xl:text-left font-bold">
              Don't miss a wave of excitement
              <span>in the Sharkroll seas!</span>
            </h1>
            <p className="text-[20px]  text-center xl:text-[19px] xl:leading-[45.5px] xl:text-left font-normal text-sm leading-[18.20px]">
              Subscribe to our newsletter and get the latest news, exclusive
              offers, and a treasure trove of tips delivered directly to your
              inbox. Join our school of sharks today and ensure you're always
              swimming with the current!
            </p>
            <button className=" xl:text-[19px] button-gradient-1 uppercase xl:leading-[28px] font-bold px-8 py-4 mt-5 w-[140px] h-[60px] rounded-[10px]">
              Dive In!
            </button>
          </div>
        </div>
        <Divider className="lg:hidden" />
      </div>
    </div>
  );
}

export default Section8;
