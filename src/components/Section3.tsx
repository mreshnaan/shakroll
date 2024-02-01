import { CustomAccordion } from "./CustomAccordion"
import IconWithText from "./IconWithText"

function Section3() {
    return (
        <div className='flex flex-col items-center py-14 xl:py-28 bg-[#00113d]'>
            <h1 className=' flex flex-col items-center text-[40px] leading-[44px] px-28 font-bold headline-gradient-2 text-center mb-5 xl:text-[120px] xl:leading-[132px] xl:mb-[30px] xl:text-left'>Dive into the Depths <span>of Sharkroll </span></h1>

            <p className="text-[#FFF] text-[17px] leading-[25.5px]  tracking-[0.51px] px-28 text-center mb-[50px] xl:mb-[100px] xl:text-[24px] xl:leading-[36px] xl:tracking-[0.72px]">Uncover the Elements of Our Oceanic Empire</p>

            <div className="flex flex-col w-full gap-y-40 mb-[40px] xl:mb-[60px] px-6 xl:px-28 xl:flex-row xl:justify-between ">
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

                <div className="flex flex-col gap-5 w-[537px]">
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
            <CustomAccordion />


        </div>
    )
}

export default Section3