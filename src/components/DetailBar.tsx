
function DetailBar({ title, content }: { title: string, content: string }) {
    return (
        <div className='flex flex-col justify-center items-center w-[300px] h-[298px] gap-6 rounded-[16px] px-6 detail-bar-1 xl:rounded-[300px] xl:h-[136px]  xl:w-[1440px]  xl:flex-row border-none '>
            <div className='flex flex-col items-center justify-center gap-4  xl:flex-row  xl:gap-[20px] xl:mr-[100px]'>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 44 39" fill="none">
                    <path d="M9.30769 0L18.4618 25.69L0 39L24.75 34.5L44 39L9.30769 0Z" fill="#69EAFF" />
                </svg>
                <h1 className='font-bold text-[#69EAFF] text-[24px] leading-[26px] w-[172px] text-center xl:text-[30px] xl:leading-[38px] xl:w-[330px] xl:text-left  '>{title}</h1>
            </div>
            <div className='hidden xl:block h-16 w-[1px] bg-[#00FFC2] mr-8'></div>
            <div className=' xl:hidden h-[1px] w-[192px] bg-[#00FFC2]'></div>
            <div className=' text-[14px] leading-[21px] text-center xl:text-[19px] xl:leading-[28px] xl:text-left text-[#FFF]'>
                {content}
            </div>

        </div>
    )
}

export default DetailBar