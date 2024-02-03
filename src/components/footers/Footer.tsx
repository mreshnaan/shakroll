
function Footer() {
    return (
        <div>
            <div className="h-[356px]  gap-[30px] footer-bg flex flex-col items-center justify-center lg:gap-[50px] lg:w-31 lg:h-[502px] ">
                <h1 className='text-[#000] text-[40px] text-center leading-[44px] w-[335px] lg:text-[70px] lg:leading-[77px] font-bold lg:w-[976px]'>Join the <span className='text-[#FFF]'>Sharkroll</span> Revolution</h1>
                <p className=' text-[14px] leading-[18px] w-[293px] lg:text-[19px] text-[#000] lg:leading-[24px] lg:w-[807px] text-center'>
                    This is not just gaming; this is Sharkroll - a realm where the brave rule and the daring prosper.
                    Invest in Shark Token and assert your dominance in the ocean of online gaming.


                </p>
                <p className='text-[14px] leading-[18px] w-[293px] lg:text-[35px] text-[#000] lg:leading-[24px] font-bold lg:w-[807px] text-center'>Your throne awaits.</p>
            </div>
            <div className='w-full h-[80px] lg:h-[100px] bg-[#000] flex justify-center py-[16px] lg:py-[20px]'>
                <img src="/assets/logo.svg" className='w-[66px] h-[20px] lg:w-[128px] lg:h-[39px]' alt="" srcSet=""  loading="lazy"/>
            </div>
        </div>

    )
}

export default Footer