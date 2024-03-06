import Divider from "./Divider";

function Section6() {
  return (
    <div className="flex flex-col items-center px-16 gap-5 bg-[] pb-[50px] xl:pb-28 xl:border-b xl:border-opacity-20 xl:border-[#FFF]">
      <h1 className=" flex flex-col items-center text-[40px] leading-[44px] font-bold  headline-gradient-2 xl:text-[70px] xl:leading-[77px]">
        Digital Dice
      </h1>
      <p className="text-[#FFF] text-[17px] leading-[25.5px] tracking-[0.5px] mb-[50px] xl:text-[24px] xl:leading-[36px] xl:tracking-[0.72px] xl:mb-[100px]">
        The Meteoric Rise of Crypto Casinos
      </p>

      <div className="flex flex-col items-center gap-[50px] w-[350px] xl:gap-[100px] xl:w-[1250px] 2xl:w-[1330px]">
        <p className="flex flex-col text-[#FFF] text-[14px] font-light leading-[18.2px] gap-3 xl:text-[20px] xl:leading-[26px] ">
          <span>
            The global casino market, now worth a colossal{" "}
            <span className="font-bold">$263.3 billion</span>, is riding the
            digital wave with cryptocurrency users doubling in 2021, boasting a{" "}
            <span className="font-bold">178%increase</span>. Gambling-related
            cryptocurrencies hold a significant pot of over $150 million, with
            crypto bets in the first half of 2022 seeing a notable uptick of 2.2
            times.
          </span>

          <span>
            The online casino realm is captivated by this digital revolution,
            with North Americans spending 107 minutes daily on such platforms,
            and 80% of gamblers betting through mobile devices. The sector's
            growth is on a jackpot-winning streak, with an 11.49% annual growth
            rate and a market value exceeding{" "}
            <span className="font-bold">$200 billion in 2023. </span>
          </span>

          <span>
            Early 2023 has set a new record with crypto bets{" "}
            <span className="font-bold">up by 44.6%</span> from the previous
            year, signaling the unstoppable momentum of crypto casinos. This is
            not just a game-changer; it's the new gaming reality, where the
            stakes are digital, and the opportunities are vast.
          </span>
        </p>
        <Divider />
        <div className="flex flex-col gap-5">
          <h1 className="hidden xl:flex flex-col  text-[#FFF] text-[17px] leading-[25.5px] font-bold text-center xl:text-[35px] xl:leading-[38px]">
            Overall Global Casinos & Online Gambling Market Size:
            <span>2020 - 2023</span>
          </h1>
          <h1 className="xl:hidden flex flex-col  text-[#FFF] text-[17px] leading-[25.5px] font-bold text-center xl:text-[35px] xl:leading-[38px]">
            Overall Global Casinos & Online Gambling Market Size: 2020 - 2023
          </h1>
          <img
            src="/assets/line-chart.svg"
            alt=""
            srcSet=""
            className="hidden xl:flex w-[350px] h-[300px] xl:h-[537px] xl:w-[1063px]"
            loading="lazy"
          />
          <img
            src="/assets/mobile-graph.svg"
            alt=""
            srcSet=""
            className="xl:hidden flex w-[350px] h-[300px] xl:h-[537px] xl:w-[1063px]"
            loading="lazy"
          />
        </div>
        <Divider className=" xl:hidden" />
      </div>
    </div>
  );
}

export default Section6;
