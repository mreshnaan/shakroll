import { AccountAccordingItems, BonusesAccordingItems, GamesAccordingItems, GeneralAccordingItems, SupportAccordingItems } from "@/data/according"
import { DynamicAccordion } from "./DynamicAccordion"

function Section9() {
    return (
        <div className='flex flex-col items-center px-16 py-[50px] gap-5 bg-[] xl:py-[100px] xl:pb-28'>
            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] text-center xl:text-[70px] font-bold xl:leading-[77px] headline-gradient-2'>Frequently Asked Questions</h1>

            <img src="/assets/Group-513.svg" alt="" srcSet="" className="hidden xl:block xl:mb-[100px] xl:w-[739px] xl:h-[92px]" />


            <div className="flex flex-col gap-[40px] w-[330px] xl:w-[1330px]">
                <h1 className=' flex flex-col text-[35px] leading-[35px] font-bold  headline-gradient-3'>General Questions</h1>
                <DynamicAccordion
                    titleClassName="text-[20px] xl:text-[20px] font-medium"
                    contentClassName="text-[20px] xl:text-[20px] font-light"
                    items={GeneralAccordingItems}

                />
                <h1 className=' flex flex-col text-[35px] leading-[35px] font-bold  headline-gradient-3 xl:text-[35px] xl:leading-[38.5px]'>Account and Payments</h1>
                <DynamicAccordion
                    titleClassName="text-[20px] xl:text-[20px] font-medium"
                    contentClassName="text-[20px] xl:text-[20px] font-light"
                    items={AccountAccordingItems}

                />
                <h1 className=' flex flex-col text-[35px] leading-[35px] font-bold  headline-gradient-3 xl:text-[35px] xl:leading-[38.5px]'>Games and Betting</h1>
                <DynamicAccordion
                    titleClassName="text-[20px] xl:text-[20px] font-medium"
                    contentClassName="text-[20px] xl:text-[20px] font-light"
                    items={GamesAccordingItems}

                />
                <h1 className=' flex flex-col text-[35px] leading-[35px] font-bold  headline-gradient-3 xl:text-[35px] xl:leading-[38.5px]'>Bonuses and Promotions</h1>
                <DynamicAccordion
                    titleClassName="text-[20px] xl:text-[20px] font-medium"
                    contentClassName="text-[20px] xl:text-[20px] font-light"
                    items={BonusesAccordingItems}

                />
                <h1 className=' flex flex-col text-[35px] leading-[35px] font-bold  headline-gradient-3 xl:text-[35px] xl:leading-[38.5px]'>Support</h1>
                <DynamicAccordion
                    titleClassName="text-[20px] xl:text-[20px] font-medium"
                    contentClassName="text-[20px] xl:text-[20px] font-light"
                    items={SupportAccordingItems}

                />

            </div>


        </div>
    )
}

export default Section9