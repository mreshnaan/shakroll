
function ChainIcon({ label, img, bgColor }: { label: string, img: string, bgColor?: string }) {
    return (
        <div className={`flex flex-col items-center gap-2 ${bgColor ? bgColor : ''} `}>
            <div className='h-[54px] w-[54px]'>
                <img src={`${img ? img : "/assets/ETH.svg"}`} alt="" loading="lazy"/>
            </div>
            <p className='text-[#FFF] text-[12px] font-medium leading-4 uppercase'>{label ? label : "ETH"}</p>
        </div>
    )
}

export default ChainIcon