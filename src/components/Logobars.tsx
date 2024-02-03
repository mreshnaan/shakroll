
function Logobar() {
    return (
        <div className="bg-[#000] h-[50px] grid grid-cols-3 xl:grid-cols-5 px-16 pl-24 items-center xl:h-[110px]  xl:gap-[50px] 2xl:gap-[100px] xl:px-60  ">
            <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px]" loading="lazy" />
            <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px]"  loading="lazy"/>
            <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px]"  loading="lazy"/>
            <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] hidden xl:block"  loading="lazy"/>
            <img src="/assets/coincierge.png" alt="" className="w-[85px] h-[21px] xl:w-[155px] xl:h-[39px] hidden xl:block" loading="lazy" />
        </div>
    )
}

export default Logobar