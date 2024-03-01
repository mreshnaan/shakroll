import Divider from "./Divider"
import StatsDetail from "./StatsDetail"

function Section5() {
    return (
        <div className='flex flex-col items-center px-16 gap-5 '>
            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] font-bold headline-gradient-2 xl:text-[70px] xl:leading-[77px]'>Tokenomics</h1>
            <p className="text-[#FFF] text-center text-[17px] leading-[25.5px] tracking-[0.51px] mb-[20px] xl:text-[24px]  xl:leading-[36px] xl:tracking-[0.72px] xl:mb-[100px]">Join our Revenue Ladder: Every referral you make enhances your stature in the ecosystem.</p>

            <div className="flex flex-col items-center justify-center gap-[50px] mb-[50px] xl:gap-[100px] xl:flex-row  xl:mb-[100px]">

                <img src="/assets/circle-chart.svg" alt="" srcSet="" className="h-[335px] w-[335px] xl:h-[668px] xl:w-[668px]" loading="lazy" />

                <div className="flex flex-col items-center w-[350px] gap-12 xl:items-start xl:w-[518px] uppercase font-medium text-sm">
                    <div className="flex flex-col">
                        <StatsDetail lable="Sales Round 1" strokcolor="#69EAFF" percentage="2,5%" />
                        <StatsDetail lable="Sales Round 2" strokcolor="#75BDFF" percentage="3,0%" />
                        <StatsDetail lable="Sales Round 3" strokcolor="#1181E8" percentage="3,5%" />
                        <StatsDetail lable="Sales Round 4" strokcolor="#00388C" percentage="4,5%" />

                        <StatsDetail lable="Equity" strokcolor="#F0B90B" percentage="2,0%" />
                        <StatsDetail lable="Team" strokcolor="#D500FF" percentage="12,0%" />
                        <StatsDetail lable="Marketing" strokcolor="#5D24FF" percentage="4,0%" />
                        <StatsDetail lable="Reserve Pool" strokcolor="#41D49F" percentage="28,0%" />

                        <StatsDetail lable="Game rewards" strokcolor="#F9762D" percentage="18,0%" />
                        <StatsDetail lable="Liquidity Pool" strokcolor="#E93D3D" percentage="5,0%" />
                        <StatsDetail lable="Burn" strokcolor="#7D0390" percentage="2,0%" />
                        <StatsDetail lable="Airdrop" strokcolor="#FFA3A3" percentage="0,5%" />

                        <StatsDetail lable="Bonus" strokcolor="#B770FF" percentage="5,0%" />
                        <StatsDetail lable="Staking" strokcolor="#C0E555" percentage="10,0%" />
                    </div>
                    <Divider />
                    <div className="flex flex-col gap-[10px]">
                        <h1 className="text-[#FFF] text-[24px] leading-[31px] text-center font-bold xl:text-left">
                            Total Supply:
                        </h1>
                        <h1 className=' flex flex-col text-[30px] text-center font-bold  headline-gradient-1  leading-[30px] xl:text-[50px] xl:leading-[65px] xl:text-left'>5.000.000.000</h1>
                        <p className="text-[14px] leading-[21px] text-center text-[#FFF] xl:text-[20px] xl:leading-[30px] xl:text-left">
                            The tokens allocated to the
                            team will be subject to a vesting period of two years, during which they will be released incrementally on a monthly basis.
                        </p>
                    </div>
                </div>
                <Divider className="xl:hidden" />
            </div>


        </div>
    )
}

export default Section5