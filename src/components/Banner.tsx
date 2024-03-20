import { CrowdSale } from "./Crowdsale/Crowdsale";

function Banner() {
  return (
    <div className='bg-[url("/assets/mobileBannerBg.png")] lg:bg-[url("/assets/bannerBg.png")] bg-center bg-no-repeat bg-cover h-fit w-full pt-[550px] grid grid-cols-1 mt-[-64px] xl:grid-cols-2 gap-14 xl:h-screen xl:py-0'>
      <div className="flex items-center justify-center p-8 col-span-1">
        <div className="flex flex-col items-center justify-center xl:block w-[335px] xl:w-[468px]">
          <img
            src="/assets/logo.svg"
            className="w-[217px] h-[65.758px] xl:w-[373px] xl:h-[114px]"
            alt="Sharkroll Logo"
            loading="lazy"
          />
          <h1 className="font-bold mt-5 mb-5 headline-gradient-1 text-[30px] text-center leading-[39px] xl:text-[50px] xl:leading-[65px] xl:text-left xl:mt-8">
            The Apex Predator of Online Casinos
          </h1>
          <p className="text-white text-[14px] text-center leading-[21px] xl:text-[20px] xl:leading-[30px] xl:text-left">
            Welcome to the Shark-infested waters of gaming excellence. Here at
            Sharkroll, excitement lurks around every corner, and our{" "}
            <strong>$SKR Token</strong> is your talisman in this thrilling
            underwater adventure.
            <span className="text-[#69EAFF]">
              Are you ready to swim with the sharks?
            </span>
          </p>
          <button className="button-gradient-1 py-3 px-8 rounded-[6px] text-[#FFF] text-[19px] leading-7 uppercase mt-7">
            JOIN COMMUNITY
          </button>
        </div>
      </div>

      <div className="col-span-1  items-center justify-center px-2 py-4 hidden md:flex">
        <CrowdSale/>
      </div>
    </div>
  );
}

export default Banner;
