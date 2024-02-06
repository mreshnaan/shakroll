
function DetailBox({ title, contentTitle, content, icon, className }: { title: string, contentTitle: string, content: string, icon?: React.ReactNode, className?: string }) {
    return (
        <div className={className}>
            <div className={`bg-[url("/assets/mobile-rectangle.svg")]  xl:bg-[url("/assets/rectangle.svg")] bg-no-repeat flex flex-col items-center p-8 w-[298px] xl:w-[318px] xl:bg-contain 2xl:w-[418px] gap-8`}>
                <h1 className='text-[24px] font-bold leading-[36px] text-[#FFF] flex flex-col justify-center items-center xl:flex-row gap-5'>
                    {
                        icon ?
                            icon : <svg xmlns="http://www.w3.org/2000/svg" width="31" height="31" viewBox="0 0 31 31" fill="none">
                                <path d="M14.376 9.912H15.928V21H14.376V9.912Z" fill="white" />
                                <circle cx="15.5" cy="15.5" r="14.5" stroke="white" stroke-width="2" />
                            </svg>
                    }

                    {title}
                </h1>
                <p className='flex flex-col text-[#FFF] text-[14px] leading-[21px] xl:text-[18px] xl:leading-[28px] 2xl:text-[20px] 2xl:leading-[30px] text-center '>
                    <span className='text-[#69EAFF] font-bold'>{contentTitle} :</span>
                    {content}
                </p>


            </div>
        </div>

    )
}

export default DetailBox