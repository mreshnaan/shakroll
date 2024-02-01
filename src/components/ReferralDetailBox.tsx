
function ReferralDetailBox({ bgColor, level, title, description }: { bgColor: string, level: number, title: string, description: string }) {
    return (
        <div className={`flex items-center rounded-[300px] h-[110px] px-5 xl:h-[136px] xl:w-[1440px] xl:px-12`} style={{
            background: bgColor
        }}>
            <div className='flex items-center gap-[10px] xl:mr-[100px]'>
                <h3 className="text-[#000]  font-medium transform rotate-[270deg] text-[14px] leading-[18.2px] tracking-[0.7px] w-[60px]  xl:text-[19px] xl:w-[78px] xl:leading-[24px] xl:tracking-[0.95px] ">LEVEL {level}</h3>
                <h1 className=' hidden xl:block text-[30px] leading-[38px] font-bold text-[#000] w-[330px]'>{title}</h1>
            </div>
            <div className="flex flex-col gap-1 xl:block xl:w-full">
                <h1 className=' block font-bold text-[#000] text-[20px] leading-[22px] w-[232px] xl:w-[330px] xl:hidden'>{title}</h1>
                <div className='text-[12px] leading-[15.6px] text-left text-[#000] w-[254px] xl:text-right xl:w-full xl:text-[19px] xl:leading-[28px]'>
                    {description}
                </div>
            </div>

        </div>
    )
}

export default ReferralDetailBox