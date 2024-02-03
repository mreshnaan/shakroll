import { AccordingItems, } from "@/data/according"
import { DynamicAccordion } from "./DynamicAccordion"
import FeatureBox from "./FeatureBox"
import IconWithText from "./IconWithText"
import ReferralDetailBox from "./ReferralDetailBox"
import { CustomCarousel } from "./Slider"

function Section3() {
    return (
        <div className='relative flex flex-col items-center py-14 xl:py-28 bg-[url("/assets/")] lg:pl-64 lg:pr-0 xl:px-28'>
            {/* gradient images  */}
            <img className="hidden absolute lg:block lg:top-[1350px] lg:right-0  bg-no-repeat z-[-1] lg:h-[2500px] lg:w-[1500px] " src="/assets/shark1.svg" />
            <img className="lg:hidden absolute top-[1280px] right-0  bg-no-repeat z-[-1] h-[1500px] w-[1500px] " src="/assets/mobileShark1.svg" />
            <img className=" hidden lg:block absolute top-[2720px] lg:left-0  bg-no-repeat z-[-1] h-[2500px] w-[1200px] " src="/assets/shark2.svg" />
            <img className=" hidden lg:block absolute top-[4220px] lg:right-10  bg-no-repeat z-[-1] h-[300px] w-[300px] " src="/assets/vapali6.svg" />

            <img className=" lg:hidden absolute top-[2620px] left-0  bg-no-repeat z-[-1] h-[1500px] w-[1500px]" src="/assets/mobileShark2.svg" />

            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] font-bold headline-gradient-2 text-center mb-5 xl:text-[120px] xl:leading-[132px] xl:mb-[30px] xl:text-left'>Dive into the Depths <span>of Sharkroll </span></h1>

            <p className="text-[#FFF] text-[17px] leading-[25.5px]  tracking-[0.51px] px-28 text-center mb-[50px] xl:mb-[100px] xl:text-[24px] xl:leading-[36px] xl:tracking-[0.72px]">Uncover the Elements of Our Oceanic Empire</p>

            <div className="flex flex-col w-full gap-y-40 mb-[40px] xl:mb-[60px] px-12  lg:flex-row lg:justify-between lg:w-[1350px] ">
                <div className="flex flex-col gap-4 w-full xl:w-[537px] xl:gap-7">
                    <div className="flex items-center gap-4 xl:gap-7">
                        <svg className="w-[22px] h-[22px] xl:w-[31px] xl:h-[31px]" xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                            <path d="M14.376 9.912H15.928V21H14.376V9.912Z" fill="#69EAFF" />
                            <circle cx="15.5" cy="15.5" r="14.5" stroke="#69EAFF" stroke-width="2" />
                        </svg>
                        <h1 className="text-[#69EAFF] font-bold text-[17px] leading-[18.7px] xl:text-[35px] xl:leading-[38px]">Sharkroll Casino:</h1>
                    </div>
                    <div className="relative">
                        <h1 className=" text-[40px] leading-[44px] pl-[55px] font-bold text-[#FFF] flex flex-col xl:text-[70px] xl:pl-[55px] xl:leading-[77px]">
                            Where the <span>Big Sharks</span> <span className="text-[#69EAFF]">Play</span>
                        </h1>
                        <img src="/assets/shark-with-coin.png" alt="" className="absolute top-14 left-14 w-[335px] h-[248.349px] xl:top-20 xl:left-24 xl:w-[501px] xl:h-[372px]" />
                    </div>


                </div>

                <div className="flex flex-col gap-5 w-full xl:w-[537px]">
                    <div className="flex items-center gap-4 xl:gap-7">
                        <svg className="w-[19px] h-[17px] xl:w-[24px] xl:h-[21px]" xmlns="http://www.w3.org/2000/svg" width="24" height="21" viewBox="0 0 24 21" fill="none">
                            <path d="M5.07692 0L10.0701 13.8331L0 21L13.5 18.5769L24 21L5.07692 0Z" fill="#69EAFF" />
                        </svg>
                        <h1 className="text-[#69EAFF] text-[17px] font-bold xl:text-[35px] xl:leading-[38px] xl:pl-0">Original Games</h1>
                    </div>
                    <p className="text-[#FFF] pl-9 w-[256px] text-[14px] leading-[18.2px] font-light xl:leading-[31px] xl:text-[24px] xl:w-full ">
                        Dare to spin the Spin Wheel or scratch your way to victory? Our games are not for the faint-hearted:
                    </p>
                    <div className="flex flex-col pl-9 mt-4 xl:mt-10 xl:pl-0">
                        <IconWithText text="Spin Wheel" />
                        <IconWithText text="Scratch Card" />
                        <IconWithText text="Dragon Tower" />
                        <IconWithText text="Limbo" />
                        <IconWithText text="Slide" />
                        <IconWithText text="Hilo" />
                        <IconWithText text="Patchinko" />
                        <IconWithText text="Bingo" />


                    </div>
                </div>


            </div>
            <div className="lg:w-[1350px]">
                <DynamicAccordion
                    items={AccordingItems}
                />
            </div>

            <div className="flex flex-col items-center gap-5 mt-36 lg:mt-60">
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

        </div>
    )
}

export default Section3