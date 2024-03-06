import Divider from "./Divider";
import StatsDetail from "./StatsDetail";

function Section5() {
  const statsDetails = [
    { label: "Sales Round 1", strokeColor: "#69EAFF", percentage: "2.5%" },
    { label: "Sales Round 2", strokeColor: "#75BDFF", percentage: "3.0%" },
    { label: "Sales Round 3", strokeColor: "#1181E8", percentage: "3.5%" },
    { label: "Sales Round 4", strokeColor: "#00388C", percentage: "4.5%" },
    { label: "Equity", strokeColor: "#F0B90B", percentage: "2.0%" },
    { label: "Team", strokeColor: "#D500FF", percentage: "12.0%" },
    { label: "Marketing", strokeColor: "#5D24FF", percentage: "4.0%" },
    { label: "Reserve Pool", strokeColor: "#41D49F", percentage: "28.0%" },
    { label: "Game rewards", strokeColor: "#F9762D", percentage: "18.0%" },
    { label: "Liquidity Pool", strokeColor: "#E93D3D", percentage: "5.0%" },
    { label: "Burn", strokeColor: "#7D0390", percentage: "2.0%" },
    { label: "Airdrop", strokeColor: "#FFA3A3", percentage: "0.5%" },
    { label: "Bonus", strokeColor: "#B770FF", percentage: "5.0%" },
    { label: "Staking", strokeColor: "#C0E555", percentage: "10.0%" },
  ];

  return (
    <div className="flex flex-col items-center gap-5 px-16 ">
      <h1 className=" flex flex-col items-center text-[40px] leading-[44px] font-bold headline-gradient-2 xl:text-[70px] xl:leading-[77px]">
        Tokenomics
      </h1>
      <p className="text-[#FFF] text-center text-[17px] leading-[25.5px] tracking-[0.51px] mb-[20px] xl:text-[24px]  xl:leading-[36px] xl:tracking-[0.72px] xl:mb-[100px]">
        Join our Revenue Ladder: Every referral you make enhances your stature
        in the ecosystem.
      </p>

      <div className="flex flex-col items-center justify-center gap-[50px] mb-[50px] xl:gap-[100px] xl:flex-row  xl:mb-[100px]">
        <img
          src="/assets/circle-chart.svg"
          alt="Tokenomics circle chart illustrating distribution percentages"
          className="h-[335px] w-[335px] xl:h-[668px] xl:w-[668px]"
          loading="lazy"
        />

        <div className="flex flex-col items-center w-[350px] gap-12 xl:items-start xl:w-[518px] uppercase font-medium text-sm">
          <div className="flex flex-col">
            {statsDetails.map((detail, index) => (
              <StatsDetail
                key={index}
                label={detail.label}
                strokcolor={detail.strokeColor}
                percentage={detail.percentage}
              />
            ))}
          </div>
          <Divider />
          <div className="flex flex-col gap-[10px]">
            <h1 className="text-[#FFF] text-[24px] leading-[31px] text-center font-bold xl:text-left">
              Total Supply:
            </h1>
            <h1 className=" flex flex-col text-[30px] text-center font-bold  headline-gradient-1  leading-[30px] xl:text-[50px] xl:leading-[65px] xl:text-left">
              5.000.000.000
            </h1>
            <p className="text-[14px] leading-[21px] text-center text-[#FFF] xl:text-[20px] xl:leading-[30px] xl:text-left">
              The tokens allocated to the team will be subject to a vesting
              period of two years, during which they will be released
              incrementally on a monthly basis.
            </p>
          </div>
        </div>
        <Divider className="xl:hidden" />
      </div>
    </div>
  );
}

export default Section5;
