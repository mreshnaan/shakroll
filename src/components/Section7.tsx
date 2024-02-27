import ContentWithBorder from "./ContentWithBorder"

function Section7() {
    return (
        <div className='relative flex flex-col items-center pb-[50px] gap-5 xl:pb-28 '>
            <img className="hidden absolute lg:block lg:top-[0] lg:right-0  bg-no-repeat z-[-1] lg:h-[2500px] lg:w-[1500px] " src="/assets/shark3.svg" />
            <img className="absolute top-[630px] right-0  bg-no-repeat z-[-1] h-[1500px] w-[1500px] " src="/assets/mobileShark3.svg" />
            <img className="absolute xl:hidden top-[1030px] right-0 bg-no-repeat z-[-1]  h-[1500px] w-[1500px] " src="/assets/wave-mobile.svg" />
            <img className="absolute xl:hidden top-[1355px] right-0 bg-no-repeat z-[-1]  h-[1500px] w-[1500px] " src="/assets/wave-mobile.svg" />

            <div className="flex flex-col items-center gap-5">
                <h1 className=' pt-[50px]- flex flex-col items-center text-[40px] leading-[44px] text-center xl:text-[70px] font-bold xl:leading-[77px] xl:pt-[100px] headline-gradient-2'>What Distinguishes Sharkroll</h1>
                <p className="text-[#FFF] text-[17px] leading-[25.5px] tracking-[0.5] mb-[50px] xl:text-[24px] xl:leading-[36px] xl:tracking-[0.72px] xl:mb-[100px]">The Meteoric Rise of Crypto Casinos</p>

                <div className="flex flex-col items-center gap-0 xl:gap-[100px]">
                    <p className="flex flex-col text-[#FFF] text-[14px] w-[335px] gap-3 font-light text-center xl:leading-[26px] xl:text-[20px] xl:w-[1250px] 2xl:w-[1330px] xl:pb-0 pb-10">
                        Sharkroll stands out in the gaming ocean with its user-friendly and smooth platform, allowing for seamless gameplay. Our robust marketing efforts are
                        quickly making us a recognized name in online gaming. Dive into a world where your gaming experience is enhanced by:
                    </p>
                    <div className="flex flex-col  xl:flex-row gap-5 mb-[170px] xl:mb-[300px] xl:w-[1250px] 2xl:w-[1330px]">

                        <ContentWithBorder content="Our innovative investment and rewarding model" />
                        <ContentWithBorder content="Implemented Buy Back & Burn Mechanism" />
                        <ContentWithBorder content="Multi-Tiered Affiliate and Referral Program" />
                        <ContentWithBorder content="Daily, Weekly and Monthly Rewards" />
                        <ContentWithBorder content="VIP Subscription Bonuses" />
                        <ContentWithBorder content="Rakeback System" />
                    </div>

                    <h1 className=' flex flex-col items-center text-[40px] leading-[44px] font-bold  text-center text-[#FFF] mb-[150px] w-[335px] xl:mb-[300px] xl:w-[1197px] xl:text-[70px] xl:leading-[77px]'>With Sharkroll, step into a new era of gaming excellence.</h1>

                </div>
            </div>

            <div className="flex flex-col items-center gap-5 xl:bg-[url('/assets/waves.svg')] w-full pb-20 pt-20" >
                <h1 className=' flex flex-col items-center text-[40px] leading-[44px] text-center w-[283px] font-bold headline-gradient-2 xl:w-[807px] xl:text-[70px] xl:leading-[77px]'>Catch the Crypto Casino
                    <span>Wave Now</span> </h1>
                <p className="text-[#FFF] text-[17px] leading-[25.5px] tracking-[0.5px] mb-[50px] xl:text-[24px] xl:leading-[36px] xl:tracking-[0.72px] xl:mb-[100px]">The Meteoric Rise of Crypto Casinos</p>
                <div className="flex flex-col gap-[23px] xl:gap-[46px] items-center w-[335px] xl:w-[1250px] 2xl:w-[1330px]">
                    <div className="flex flex-col gap-5 w-[335px] xl:w-[1250px] 2xl:w-[1330px]">
                        <p className="text-[#FFF] text-center font-bold text-[14px] leading-[18.2px] xl:text-[24px] xl:leading-[31px] ">
                            As the global online casino market surges from <span className="text-[#69EAFF]">$95.1 billion in 2023</span> to an anticipated <span className="text-[#69EAFF]">$131.9 billion by 2027</span>, the time to join the crypto casino revolution is now.
                        </p>
                        <p className="text-[#FFF] text-center font-thin text-[14px] leading-[18.2px] xl:text-[24px] xl:leading-[31px] ">
                            Sharkroll is at the vanguard of this explosive growth, offering a thrilling and innovative gaming experience.
                            This is the prime moment to dive into the rapidly evolving world of digital gaming. With Sharkroll, you're not just playing games; you're part of a pioneering movement reshaping the online casino landscape. Seize this opportunity – the future of gaming awaits at Sharkroll!
                        </p>
                    </div>
                    <a href="https://www.statista.com/study/135483/eservices-report-online-gambling/" className="text-[#69EAFF] text-[10px] leading-[13px] text-center font-thin flex flex-col xl:flex-row xl:text-left xl:text-[14px] xl:leading-[18.2px]"><span>Source:</span> https://www.statista.com/study/135483/eservices-report-online-gambling/</a>

                </div>

            </div>

        </div>


    )
}

export default Section7