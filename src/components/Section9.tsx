import { AccountAccordingItems, BonusesAccordingItems, GamesAccordingItems, GeneralAccordingItems, SupportAccordingItems } from "@/data/according"
import { DynamicAccordion } from "./DynamicAccordion"

function Section9() {
    return (
        <div className='flex flex-col items-center px-16 pb-[50px] gap-5 bg-[] xl:py-[100px] xl:pb-28'>
            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] text-center xl:text-[70px] font-bold xl:leading-[77px] headline-gradient-2'>Frequently Asked Questions</h1>

            <img src="/assets/Group-513.svg" alt="" srcSet="" className="hidden xl:block xl:mb-[100px] xl:w-[739px] xl:h-[92px]" loading="lazy" />


            <div className="flex flex-col w-[330px] xl:w-[1250px] 2xl:w-[1330px]">
                <h1 className=' flex flex-col text-[20px] xl:text-[35px] xl:leading-[35px] font-bold  headline-gradient-3 mt-10'>General Questions</h1>
                <DynamicAccordion
                       titleClassName="text-[14px] xl:text-[20px] font-medium"
                    contentClassName="text-[14px] xl:text-[20px] font-light"
                    items={GeneralAccordingItems}

                />
                <h1 className=' flex flex-col text-[20px] xl:text-[35px] xl:leading-[35px] font-bold  headline-gradient-3 mt-10'>Account and Payments</h1>
                <DynamicAccordion
                    titleClassName="text-[14px] xl:text-[20px] font-medium"
                    contentClassName="text-[14px] xl:text-[20px] font-light"
                    items={AccountAccordingItems}

                />
                <h1 className=' flex flex-col text-[20px] xl:text-[35px] xl:leading-[35px] font-bold  headline-gradient-3 mt-10'>Games and Betting</h1>
                <DynamicAccordion
                       titleClassName="text-[14px] xl:text-[20px] font-medium"
                    contentClassName="text-[14px] xl:text-[20px] font-light"
                    items={GamesAccordingItems}

                />
                <h1 className=' flex flex-col text-[20px] xl:text-[35px] xl:leading-[35px] font-bold  headline-gradient-3 mt-10'>Bonuses and Promotions</h1>
                <DynamicAccordion
                       titleClassName="text-[14px] xl:text-[20px] font-medium"
                    contentClassName="text-[14px] xl:text-[20px] font-light"
                    items={BonusesAccordingItems}

                />
                <h1 className=' flex flex-col text-[20px] xl:text-[35px] xl:leading-[35px] font-bold  headline-gradient-3 mt-10'>Support</h1>
                <DynamicAccordion
                       titleClassName="text-[14px] xl:text-[20px] font-medium"
                    contentClassName="text-[14px] xl:text-[20px] font-light"
                    items={SupportAccordingItems}

                />

            </div>


        </div>
    )
}

export default Section9