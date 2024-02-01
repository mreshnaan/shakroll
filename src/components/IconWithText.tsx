import React from 'react'

function IconWithText({ icon, text }: { icon?: React.ReactNode, text: string }) {
    return (
        <div className="flex items-center gap-5">
            {icon ? icon :
                <svg className='h-[12px] w-[13px] xl:h-[17px] xl:w-[19px]' xmlns="http://www.w3.org/2000/svg" width="19" height="17" viewBox="0 0 24 21" fill="none">
                    <path d="M5.07692 0L10.0701 13.8331L0 21L13.5 18.5769L24 21L5.07692 0Z" fill="#69EAFF" />
                </svg>
            }
            <p className="text-[#FFF] text-[14px] leading-[25.2px] font-thin xl:text-[20px] xl:leading-[36px]">{text}</p>
        </div>
    )
}

export default IconWithText