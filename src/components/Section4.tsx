import FeatureBox from "./FeatureBox"
import ReferralDetailBox from "./ReferralDetailBox"
import { CustomCarousel } from "./Slider"

function Section4() {
    return (
        <div className='flex flex-col items-center px-16 gap-5 bg-[#00113d]'>
            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] text-center font-bold headline-gradient-2 xl:text-[70px] xl:leading-[77px]'>Multi-Tiered Affiliate and <span>Referral Program</span></h1>
            <p className="text-[#FFF] text-center text-[17px] leading-[25.5px] tracking-[0.51px] xl:text-[24px] xl:leading-[36px] xl:tracking-[0.72px] mb-[50px] xl:mb-[100px]">Join our Revenue Ladder: Every referral you make enhances your stature in the ecosystem.</p>

            <div className='flex flex-col items-center gap-[20px] mb-[20px] xl:mb-[100px]'>
                {/* details bars start */}
                <ReferralDetailBox
                    bgColor='#00FFC2'
                    level={1}
                    title='Direct Referrals'
                    description='Earn a commission from players you directly reel in.'
                />

                <ReferralDetailBox
                    bgColor='#69EAFF'
                    level={2}
                    title='Secondary Referrals'
                    description='Boost your earnings from players referred by your direct catches.'
                />

                <ReferralDetailBox
                    bgColor='#1181E8'
                    level={3}
                    title='Tertiary Referrals'
                    description='Dive deeper into the referral ecosystem. When your secondary referrals bait new players into our waters, you earn a share of their catch.'
                />

                <ReferralDetailBox
                    bgColor='#003BD2'
                    level={4}
                    title='Quaternary Referrals'
                    description='Dominate the Ocean. Gain from players brought in by your tertiary network.'
                />
                {/* details bars  end*/}
            </div>

            <div className="flex flex-col gap-[50px] items-center mb-[50px] xl:mb-[100px] xl:gap-[100px]">
                <h1 className=' flex flex-col items-center font-bold headline-gradient-1 text-[40px] leading-[44px] xl:leading-[77px] xl:text-[70px]'>
                    Features
                </h1>
                <div className="flex flex-col xl:flex-row items-center w-full gap-10 xl:gap-20">
                    <CustomCarousel sliders={[
                        <FeatureBox title=" Advanced" subTitle="Tracking System" content="Navigate the waters of opportunity with precision, tracking your network&#39;s growth and earnings in real-time." />,
                        <FeatureBox title=" Grow Your" subTitle="Influence" content="Each successful referral enhances your dominance in the shark-infested waters of our platform." />,
                        <FeatureBox title="Feast" subTitle="of Rewards" content="The more you hunt, the richer the feast. From financial incentives to exclusive perks, the ocean is teeming with opportunities." />

                    ]} classNames="xl:hidden w-[330px]" />

                    <FeatureBox className="hidden xl:block" title=" Advanced" subTitle="Tracking System" content="Navigate the waters of opportunity with precision, tracking your network&#39;s growth and earnings in real-time." />

                    <svg className="hidden xl:block" xmlns="http://www.w3.org/2000/svg" width="11" height="189" viewBox="0 0 11 189" fill="none">
                        <path d="M5.5 1C-0.49999 6.66667 -0.49999 12.3333 5.5 18C11.5 23.6666 11.5 29.3333 5.5 35C-0.499991 40.6667 -0.499991 46.3333 5.5 52C11.5 57.6667 11.5 63.3333 5.5 69C-0.499993 74.6666 -0.499993 80.3333 5.5 86C11.5 91.6667 11.5 97.3333 5.5 103C-0.499994 108.667 -0.499994 114.333 5.5 120C11.5 125.667 11.5 131.333 5.5 137C-0.499996 142.667 -0.499996 148.333 5.5 154C11.5 159.667 11.5 165.333 5.5 171C-0.499997 176.667 -0.499997 182.333 5.5 188" stroke="#69EAFF" stroke-width="2" />
                    </svg>
                    <FeatureBox className="hidden xl:block" title=" Grow Your" subTitle="Influence" content="Each successful referral enhances your dominance in the shark-infested waters of our platform." />

                    <svg className="hidden xl:block" xmlns="http://www.w3.org/2000/svg" width="11" height="189" viewBox="0 0 11 189" fill="none">
                        <path d="M5.5 1C-0.49999 6.66667 -0.49999 12.3333 5.5 18C11.5 23.6666 11.5 29.3333 5.5 35C-0.499991 40.6667 -0.499991 46.3333 5.5 52C11.5 57.6667 11.5 63.3333 5.5 69C-0.499993 74.6666 -0.499993 80.3333 5.5 86C11.5 91.6667 11.5 97.3333 5.5 103C-0.499994 108.667 -0.499994 114.333 5.5 120C11.5 125.667 11.5 131.333 5.5 137C-0.499996 142.667 -0.499996 148.333 5.5 154C11.5 159.667 11.5 165.333 5.5 171C-0.499997 176.667 -0.499997 182.333 5.5 188" stroke="#69EAFF" stroke-width="2" />
                    </svg>

                    <FeatureBox className="hidden xl:block" title="Feast" subTitle="of Rewards" content="The more you hunt, the richer the feast. From financial incentives to exclusive perks, the ocean is teeming with opportunities." />

                </div>
                <button className="text-[#FFF] text-[14px] leading-[21px] px-[30px] py-[12px] w-[335px] font-bold uppercase button-gradient-1 rounded-[10px] xl:text-[19px] xl:w-[730px] xl:leading-[28px] xl:px-[30px] xl:py-[16px]">
                    Are you ready to lead the pack and make the ocean your own?
                </button>
            </div>


        </div>
    )
}

export default Section4